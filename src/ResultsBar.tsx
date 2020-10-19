import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {useTaskEstimationContext} from './useTasksEstimations';
import getTimeEstimation from './getTimeEstimation';

const useStyles = makeStyles(() =>
	createStyles({
		typography: {
			textAlign: 'right',
		},
	})
);

const ResultsBar = () => {
	const classes = useStyles();

	const {tasks} = useTaskEstimationContext();

	return (
		<div>
			<Typography variant='body1' className={classes.typography}>
				<b>Estimated time: </b>
				{getTimeEstimation(tasks, 2)}
			</Typography>
		</div>
	);
};

export default ResultsBar;
