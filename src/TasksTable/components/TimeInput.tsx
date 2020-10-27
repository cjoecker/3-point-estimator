import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'row',
		},
		numberInput: {
			textAlign: 'center',
		},
	})
);

type taskRowType = {
	value: number | undefined;
	onChange: (value: number) => void;
	ariaLabel: string;
};

const TimeInput = (props: taskRowType) => {
	const classes = useStyles();

	const {value, onChange, ariaLabel} = props;

	return (
		<div className={classes.root}>
			<TextField
				aria-label={ariaLabel}
				fullWidth
				type='number'
				InputProps={{
					classes: {
						input: classes.numberInput,
					},
				}}
				value={value ?? false}
				onChange={e => onChange(parseFloat(e.target.value))}
			/>
		</div>
	);
};

export default TimeInput;
