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

type Props = {
	items: JSX.Element[];
	isTitle?: boolean;
	onClickDelete?: () => void;
};

const TasksRowDesktop: React.FunctionComponent<Props> = (props: Props) => {
	const classes = useStyles();

	const {items, isTitle, onClickDelete} = props;

	return (
		<Grid container>
			<Grid container spacing={2} wrap='nowrap'>
				<Grid item className={classes.taskInput} wrap='nowrap'>
					<div className={classes.itemsWrapper}>{items[0]}</div>
				</Grid>
				<Grid item>
					<Grid container wrap='nowrap'>
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
							{!isTitle && onClickDelete && (
								<Tooltip title='Delete task'>
									<IconButton aria-label='delete task' data-testid='deleteTask' onClick={() => onClickDelete()}>
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

export default TasksRowDesktop;
