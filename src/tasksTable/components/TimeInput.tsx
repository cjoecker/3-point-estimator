import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		numberInput: {
			textAlign: 'center',
		},
	})
);

type taskRowType = {
	value: number;
	onChange: (value: number) => void;
};

const TasksRow = (props: taskRowType) => {
	const classes = useStyles();

	const {value, onChange} = props;

	return (
		<div>
			<TextField
				fullWidth
				type='number'
				InputProps={{
					classes: {
						input: classes.numberInput,
					},
				}}
				value={value}
				onChange={e => onChange(parseInt(e.target.value, 10))}
			/>
		</div>
	);
};

export default TasksRow;
