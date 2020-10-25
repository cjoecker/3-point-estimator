import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		itemsWrapper: {
			padding: theme.spacing(1, 2),
		},
		timesWrapper: {
			width: '20ch',
			textAlign: 'center',
		},
		taskInput: {
			flexGrow: 1,
		},
	})
);

type timeInputType = {
	items: JSX.Element[];
};

const TasksRow = (props: timeInputType) => {
	const classes = useStyles();

	const {items} = props;

	return (
		<Grid container>
			<Grid container spacing={2}>
				<Grid item className={classes.taskInput}>
					<div className={classes.itemsWrapper}>{items[0]}</div>
				</Grid>
				<Grid item>
					<Grid container>
						<Grid item>
							<div className={`${`${classes.timesWrapper} ${classes.itemsWrapper}`}`}>{items[1]}</div>
						</Grid>
						<Grid item>
							<div className={`${classes.timesWrapper} ${classes.itemsWrapper}`}>{items[2]}</div>
						</Grid>
						<Grid item>
							<div className={`${classes.timesWrapper} ${classes.itemsWrapper}`}>{items[3]}</div>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default TasksRow;
