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
};

const TimeInput: React.FunctionComponent<Props> = (props: Props) => {
	const classes = useStyles();

	const {value, onChange, ariaLabel} = props;

	return (
		<div className={classes.root}>
			<TextField
				aria-label={ariaLabel}
				data-testid={`${ariaLabel} input`}
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
