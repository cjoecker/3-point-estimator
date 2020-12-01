import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TextField, Typography} from '@material-ui/core';
import {isMobile} from 'react-device-detect';
import {taskType, useTaskEstimationContext} from '../hooks/useTasksEstimations';
import TasksRowDesktop from './components/TasksRowDesktop';
import TimeInput from './components/TimeInput';
import TasksRowMobile from './components/TasksRowMobile';

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

const TasksTable: React.FunctionComponent = () => {
	const classes = useStyles();

	const {tasks, addTask, editTask, deleteTask} = useTaskEstimationContext();

	useEffect(() => {
		addEmptyTask();
	}, []);

	useEffect(() => {
		if (tasks.length > 0 && !isTaskEmpty(tasks[tasks.length - 1])) addEmptyTask();
	}, [tasks]);

	const isTaskEmpty = (task: taskType) => {
		return task.text === '' && task.optimisticTime == null && task.mostLikelyTime == null && task.pessimisticTime == null;
	};

	const addEmptyTask = () => {
		const id = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 0;

		addTask({
			id,
			text: '',
			pessimisticTime: undefined,
			mostLikelyTime: undefined,
			optimisticTime: undefined,
		});
	};

	const items = (task: taskType) => [
		<TextField
			label={isMobile ? 'Task' : undefined}
			placeholder='New task'
			id='standard-basic'
			fullWidth
			value={task.text}
			onChange={e => editTask({...task, text: e.target.value})}
			data-testid='taskInput'
			InputLabelProps={{
				shrink: true,
			}}
		/>,
		<TimeInput
			label={isMobile ? 'Optimistic Time' : undefined}
			value={task.optimisticTime}
			onChange={value => editTask({...task, optimisticTime: value})}
			ariaLabel='optimistic time'
		/>,
		<TimeInput
			label={isMobile ? 'Most Likely Time' : undefined}
			value={task.mostLikelyTime}
			onChange={value => editTask({...task, mostLikelyTime: value})}
			ariaLabel='most likely time'
		/>,
		<TimeInput
			label={isMobile ? 'Pessimistic Time' : undefined}
			value={task.pessimisticTime}
			onChange={value => editTask({...task, pessimisticTime: value})}
			ariaLabel='pessimistic time'
		/>,
	];

	return (
		<div className={classes.root}>
			{!isMobile && (
				<TasksRowDesktop
					isTitle
					items={[
						underlinedTitle('Tasks'),
						underlinedTitle('Optimistic Time'),
						underlinedTitle('Most Likely Time'),
						underlinedTitle('Pessimistic Time'),
					]}
				/>
			)}
			{tasks.map((task, index) => {
				return isMobile ? (
					<TasksRowMobile
						key={task.id}
						items={items(task)}
						onClickDelete={() => deleteTask(task)}
						isNewTask={isTaskEmpty(task) && index === tasks.length - 1}
					/>
				) : (
					<TasksRowDesktop
						key={task.id}
						items={items(task)}
						onClickDelete={() => deleteTask(task)}
						isNewTask={isTaskEmpty(task) && index === tasks.length - 1}
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
