import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TasksTable from './TasksTable';
import {TasksEstimationProvider} from './useTasksEstimations';

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

const MainPage = (props: MainPageProps) => {
	const classes = useStyles();

	return (
		<TasksEstimationProvider>
			<div className={classes.root}>
				<TasksTable />
			</div>
		</TasksEstimationProvider>
	);
};

export default MainPage;
