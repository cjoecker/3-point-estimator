import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Collapse, Grid, IconButton, Tooltip} from '@material-ui/core';
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
		tasksWrapper: {
			display: 'flex',
			flexGrow: 1,
		},
		task: {
			flex: '4 4 100ch',
			margin: theme.spacing(0, 2),
		},
		time: {
			flex: '1 1 15ch',
			textAlign: 'center',
			margin: theme.spacing(0, 2),
		},
	})
);

type Props = {
	items: JSX.Element[];
	isTitle?: boolean;
	onClickDelete?: () => void;
	isNewTask?: boolean;
};

const TasksRowDesktop: React.FunctionComponent<Props> = (props: Props) => {
	const classes = useStyles();

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const {items, isTitle, onClickDelete, isNewTask} = props;

	return (
		<Collapse in={isVisible} timeout={500} onExited={onClickDelete}>
			<Grid container style={{marginBottom: isTitle ? '10px' : undefined}}>
				<div className={classes.tasksWrapper}>
					<div className={classes.task}>{items[0]}</div>
					<div className={classes.time}>{items[1]}</div>
					<div className={classes.time}>{items[2]}</div>
					<div className={classes.time}>{items[3]}</div>
					<div className={classes.deleteWrapper}>
						{!isTitle && onClickDelete && !isNewTask && (
							<Tooltip title='Delete task'>
								<IconButton aria-label='delete task' data-testid='deleteTask' onClick={() => setIsVisible(false)}>
									<DeleteOutlineIcon fontSize='small' />
								</IconButton>
							</Tooltip>
						)}
					</div>
				</div>
			</Grid>
		</Collapse>
	);
};

export default TasksRowDesktop;
