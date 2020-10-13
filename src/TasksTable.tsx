import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Grid, Paper, TextField} from '@material-ui/core';
import {taskType, useTaskEstimationContext} from './useTasksEstimations';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
		},
		taskInput: {
			flexGrow: 1,
		},
		numberInput: {
			textAlign: 'center',
			width: '15ch',
		},
	})
);

type MainPageProps = {};

const TasksTable = (props: MainPageProps) => {
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
			{tasks.map(task => {
				return (
					<>
						<Grid container>
							<Grid container spacing={2}>
								<Grid item className={classes.taskInput}>
									<Paper className={classes.paper}>
										<TextField
											id='standard-basic'
											fullWidth
											value={task.text}
											onChange={e => editTask({...task, text: e.target.value})}
										/>
									</Paper>
								</Grid>
								<Grid item style={{display: 'block'}}>
									<Paper className={classes.paper}>
										<TextField
											fullWidth
											type='number'
											InputProps={{
												classes: {
													input: classes.numberInput,
												},
											}}
										/>
									</Paper>
								</Grid>
								<Grid item>
									<Paper className={classes.paper}>
										<TextField
											fullWidth
											type='number'
											InputProps={{
												classes: {
													input: classes.numberInput,
												},
											}}
										/>
									</Paper>
								</Grid>
								<Grid item>
									<Paper className={classes.paper}>
										<TextField
											fullWidth
											type='number'
											InputProps={{
												classes: {
													input: classes.numberInput,
												},
											}}
										/>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
					</>
				);
			})}
		</div>
	);
};

export default TasksTable;
