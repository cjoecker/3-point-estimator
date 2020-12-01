import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Collapse, Grid, IconButton, Tooltip} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainDiv: {
			border: 'solid 0.5px white',
			margin: theme.spacing(2, 0),
			padding: theme.spacing(3, 2),
		},
		taskInput: {
			flexGrow: 1,
		},
		taskItem: {
			display: 'inline-block',
		},
	})
);

type Props = {
	items: JSX.Element[];
	onClickDelete?: () => void;
	isNewTask?: boolean;
};

const TasksRowMobile: React.FunctionComponent<Props> = (props: Props) => {
	const classes = useStyles();

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const {items, onClickDelete, isNewTask} = props;

	return (
		<Collapse in={isVisible} timeout={500} onExited={onClickDelete}>
			<div className={classes.mainDiv}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Grid container direction='row' justify='center' alignItems='flex-start'>
							<div className={classes.taskInput}>{items[0]}</div>
							{onClickDelete && !isNewTask && (
								<div>
									<Tooltip title='Delete task'>
										<IconButton aria-label='delete task' data-testid='deleteTask' onClick={() => setIsVisible(false)}>
											<DeleteOutlineIcon fontSize='small' />
										</IconButton>
									</Tooltip>
								</div>
							)}
						</Grid>
					</Grid>
					<Grid item xs={4} className={classes.taskInput}>
						<div>{items[1]}</div>
					</Grid>
					<Grid item xs={4} className={classes.taskInput}>
						<div>{items[2]}</div>
					</Grid>
					<Grid item xs={4} className={classes.taskInput}>
						<div>{items[3]}</div>
					</Grid>
				</Grid>
			</div>
		</Collapse>
	);
};

export default TasksRowMobile;
