import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainDiv: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			padding: theme.spacing(2),
			marginTop: theme.spacing(2),
			marginLeft: theme.spacing(1),
			margin: theme.spacing(2, 0, 2, 1),
		},
		inlineDiv: {
			display: 'inline-block',
		},
		h1Div: {
			textDecoration: 'none',
			borderBottom: `0.5px solid`,
			display: 'inline-block',
			lineHeight: '2rem',
		},
	})
);

const BannerLogo = () => {
	const classes = useStyles();

	return (
		<div className={classes.mainDiv}>
			<div className={classes.inlineDiv}>
				<Typography variant='h1' color='textPrimary'>
					<div className={classes.h1Div}>3 Point Estimation</div>
				</Typography>
				<Typography variant='body1' color='textSecondary' align='right'>
					Calculator
				</Typography>
			</div>
		</div>
	);
};

export default BannerLogo;
