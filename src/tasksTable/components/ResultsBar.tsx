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
			margin: theme.spacing(4, 2),
		},
		typography: {
			margin: theme.spacing(0, 2),
			textAlign: 'center',
			display: 'inline',
		},
	})
);

const ResultsBar: React.FunctionComponent = () => {
	const classes = useStyles();

	const {tasks} = useTaskEstimationContext();

	const [probability, setProbability] = useState(3);

	return (
		<div className={classes.mainDiv}>
			<Grid container direction='row' justify='center' alignItems='center' spacing={2}>
				<Grid item xs>
					<Grid container direction='column' justify='center' alignItems='center'>
						<Typography variant='body1' className={classes.typography}>
							Probability
						</Typography>
						<FormControl variant='outlined'>
							<Select value={probability} data-testid='probability' onChange={e => setProbability(e.target.value as number)}>
								<MenuItem data-testid='deviation4' value={4}>
									99.99 %
								</MenuItem>
								<MenuItem data-testid='deviation3' value={3}>
									99.73 %
								</MenuItem>
								<MenuItem data-testid='deviation2' value={2}>
									95.45 %
								</MenuItem>
								<MenuItem data-testid='deviation1' value={1}>
									68.27 %
								</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item>
					<Grid container style={{flexGrow: 1}} direction='column' justify='center' alignItems='center' spacing={2}>
						<Typography variant='body1' className={classes.typography} color='textSecondary'>
							<b>
								<u>Total Time</u>
							</b>
							<br />
							{getTimeEstimation(tasks, probability)}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default ResultsBar;
