import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {FormControl, Grid, MenuItem, Select, Typography} from '@material-ui/core';
import {useTaskEstimationContext} from '../../hooks/useTasksEstimations';
import getTimeEstimation from '../../utils/getTimeEstimation';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainDiv: {
			display: 'inline-block',
			border: 'solid 0.5px white',
			padding: theme.spacing(2),
			marginTop: theme.spacing(2),
			marginRight: theme.spacing(2),
		},
		typography: {
			margin: theme.spacing(0, 2),
		},
	})
);

const ResultsBar = () => {
	const classes = useStyles();

	const {tasks} = useTaskEstimationContext();

	const [probability, setProbability] = useState(3);

	return (
		<div className={classes.mainDiv}>
			<Grid container direction='row' justify='center' alignItems='center' spacing={2}>
				<Grid item>
					<Grid container direction='column' justify='center' alignItems='center'>
						<Typography variant='body1' className={classes.typography}>
							Probability
						</Typography>
						<FormControl variant='outlined'>
							<Select value={probability} onChange={e => setProbability(e.target.value as number)}>
								<MenuItem value={4}>99,99 %</MenuItem>
								<MenuItem value={3}>99,73 %</MenuItem>
								<MenuItem value={2}>95,45 %</MenuItem>
								<MenuItem value={1}>68,27 %</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid item>
					<Typography variant='body1' className={classes.typography} color='textSecondary'>
						<Grid container direction='column' justify='center' alignItems='center' spacing={2}>
							<b>
								<u>Total Time</u>
							</b>
							{getTimeEstimation(tasks, probability)}
						</Grid>
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default ResultsBar;
