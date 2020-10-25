import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Button, TextField, Typography} from '@material-ui/core';
import {useTaskEstimationContext} from '../hooks/useTasksEstimations';
import TasksRow from './components/TasksRow';
import TimeInput from './components/TimeInput';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		buttonWrapper: {
			marginTop: theme.spacing(1),
		},
	})
);

const TasksTable = () => {
	const classes = useStyles();

	const {tasks, addTask, editTask} = useTaskEstimationContext();

	useEffect(() => {
		addEmptyTask();
	}, []);

	const addEmptyTask = () => {
		addTask({
			id: tasks.length,
			text: null,
			pessimisticTime: null,
			mostLikelyTime: null,
			optimisticTime: null,
		});
	};

	return (
		<div className={classes.root}>
			<TasksRow
				items={[
					underlinedTitle('Tasks'),
					underlinedTitle('Optimistic Time'),
					underlinedTitle('Most Likely Time'),
					underlinedTitle('Pessimistic Time'),
				]}
			/>
			{tasks.map(task => {
				return (
					<TasksRow
						items={[
							<TextField
								id='standard-basic'
								fullWidth
								value={task.text}
								onChange={e => editTask({...task, text: e.target.value})}
							/>,
							<TimeInput
								value={task.optimisticTime}
								onChange={value => editTask({...task, optimisticTime: value})}
								ariaLabel='optimistic time'
							/>,
							<TimeInput
								value={task.mostLikelyTime}
								onChange={value => editTask({...task, mostLikelyTime: value})}
								ariaLabel='most likely time'
							/>,
							<TimeInput
								value={task.pessimisticTime}
								onChange={value => editTask({...task, pessimisticTime: value})}
								ariaLabel='pessimistic time'
							/>,
						]}
					/>
				);
			})}
			<div className={classes.buttonWrapper}>
				<Button color='primary' onClick={addEmptyTask}>
					Add new task
				</Button>
			</div>
		</div>
	);
};

export default TasksTable;

const underlinedTitle = (text: string) => (
	<Typography variant='body1' color='textSecondary'>
		<b>
			<u>{text}</u>
		</b>
	</Typography>
);
