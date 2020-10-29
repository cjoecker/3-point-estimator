import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Grid, IconButton, Tooltip} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		itemsWrapper: {
			padding: theme.spacing(1, 2),
		},
		timesWrapper: {
			width: '20ch',
			textAlign: 'center',
		},
		deleteWrapper: {
			width: theme.spacing(2),
		},
		taskInput: {
			flexGrow: 1,
		},
	})
);

type timeInputType = {
	items: JSX.Element[];
	isTitle?: boolean;
	onDeleteTask?: () => void;
};

const TasksRow = (props: timeInputType) => {
	const classes = useStyles();

	const {items, isTitle, onDeleteTask} = props;

	return (
		<Grid container>
			<Grid container spacing={2}>
				<Grid item className={classes.taskInput}>
					<div className={classes.itemsWrapper}>{items[0]}</div>
				</Grid>
				<Grid item>
					<Grid container>
						<Grid item>
							<div className={`${classes.timesWrapper} ${classes.itemsWrapper}`}>{items[1]}</div>
						</Grid>
						<Grid item>
							<div className={`${classes.timesWrapper} ${classes.itemsWrapper}`}>{items[2]}</div>
						</Grid>
						<Grid item>
							<div className={`${classes.timesWrapper} ${classes.itemsWrapper}`}>{items[3]}</div>
						</Grid>
						<div className={classes.deleteWrapper}>
							{!isTitle && onDeleteTask && (
								<Tooltip title='Delete task'>
									<IconButton aria-label='delete task' data-testid='deleteTask' onClick={() => onDeleteTask()}>
										<DeleteOutlineIcon fontSize='small' />
									</IconButton>
								</Tooltip>
							)}
						</div>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default TasksRow;
