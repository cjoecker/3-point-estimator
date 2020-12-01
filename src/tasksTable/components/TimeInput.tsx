import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles(() =>
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

type Props = {
	value: number | undefined;
	onChange: (value: number) => void;
	ariaLabel: string;
	label: string | undefined;
};

const TimeInput: React.FunctionComponent<Props> = (props: Props) => {
	const classes = useStyles();

	const {value, onChange, ariaLabel, label} = props;

	/* eslint-disable react/jsx-no-duplicate-props */
	return (
		<div className={classes.root}>
			<TextField
				label={label}
				aria-label={ariaLabel}
				data-testid={`${ariaLabel} input`}
				fullWidth
				type='number'
				inputMode='decimal'
				inputProps={{
					keyboardType: 'number-pad',
					pattern: '[0-9]*',
				}}
				InputProps={{
					classes: {
						input: classes.numberInput,
					},
				}}
				InputLabelProps={{
					shrink: true,
				}}
				value={value ?? undefined}
				onChange={e => onChange(parseFloat(e.target.value))}
			/>
		</div>
	);
};

export default TimeInput;
