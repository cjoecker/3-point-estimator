import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TasksTable from './TasksTable';
import {TasksEstimationProvider} from './useTasksEstimations';
import ResultsBar from './ResultsBar';

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

const MainPage = () => {
	const classes = useStyles();

	return (
		<TasksEstimationProvider>
			<div className={classes.root}>
				<TasksTable />
				<ResultsBar />
			</div>
		</TasksEstimationProvider>
	);
};

export default MainPage;
