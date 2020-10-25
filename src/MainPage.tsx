import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import TasksTable from './tasksTable/TasksTable';
import {TasksEstimationProvider} from './hooks/useTasksEstimations';
import ResultsBar from './tasksTable/components/ResultsBar';

const useStyles = makeStyles((styleTheme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			overflowX: 'hidden', //Avoid negative margin from mainGrid
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
		},
		tasksTableWrapper: {
			margin: styleTheme.spacing(0, 10),
		},
	})
);

const MainPage = () => {
	const classes = useStyles();

	return (
		<TasksEstimationProvider>
			<main role='main'>
				<div className={classes.root}>
					<div className={classes.tasksTableWrapper}>
						<TasksTable />
						<Grid container direction='row' justify='flex-end' alignItems='flex-end'>
							<ResultsBar />
						</Grid>
					</div>
				</div>
			</main>
		</TasksEstimationProvider>
	);
};

export default MainPage;
