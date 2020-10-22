import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TextField, Typography} from '@material-ui/core';
import {taskType, useTaskEstimationContext} from './useTasksEstimations';
import TasksRow from './TasksRow';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		itemsWrapper: {
			padding: theme.spacing(1),
		},
		timesWrapper: {
			width: '20ch',
			textAlign: 'center',
		},
		taskInput: {
			flexGrow: 1,
		},
		numberInput: {
			textAlign: 'center',
		},
	})
);

const TasksTable = () => {
	const classes = useStyles();

	const {tasks, addTask, editTask} = useTaskEstimationContext();

	useEffect(() => {
		addEmptyTask(tasks);
	}, [tasks]);

	const addEmptyTask = (_tasks: taskType[]) => {
		const lastTask = _tasks.length ? _tasks[_tasks.length - 1] : null;
		if (
			!lastTask ||
			lastTask.text != null ||
			lastTask.pessimisticTime != null ||
			lastTask.mostLikelyTime != null ||
			lastTask.optimisticTime != null
		)
			addTask({
				id: _tasks.length,
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
							<TextField
								fullWidth
								type='number'
								InputProps={{
									classes: {
										input: classes.numberInput,
									},
								}}
								value={task.optimisticTime}
								onChange={e => editTask({...task, optimisticTime: parseInt(e.target.value, 10)})}
							/>,
							<TextField
								fullWidth
								type='number'
								InputProps={{
									classes: {
										input: classes.numberInput,
									},
								}}
								value={task.mostLikelyTime}
								onChange={e => editTask({...task, mostLikelyTime: parseInt(e.target.value, 10)})}
							/>,
							<TextField
								fullWidth
								type='number'
								InputProps={{
									classes: {
										input: classes.numberInput,
									},
								}}
								value={task.pessimisticTime}
								onChange={e => editTask({...task, pessimisticTime: parseInt(e.target.value, 10)})}
							/>,
						]}
					/>
				);
			})}
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
