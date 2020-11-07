import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Grid, Link, Typography} from '@material-ui/core';
import {Favorite} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		heart: {
			position: 'relative',
			top: theme.spacing(0.35),
		},
		grid: {
			marginTop: 'auto',
			marginBottom: theme.spacing(1),
			paddingBottom: 'env(safe-area-inset-bottom)',
		},
	})
);

const Footer: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.grid} container justify='center' alignContent='center'>
			<footer>
				<Typography component='span' variant='caption' align='center'>
					<Grid item xs={12}>
						Made with&nbsp;
						<span className={classes.heart}>
							<Favorite aria-label='love' fontSize='inherit' />
						</span>
						{/*eslint-disable-next-line react/jsx-one-expression-per-line*/}
						&nbsp;by{' '}
						<Link
							data-testid='cjoeckerLink'
							href='https://www.cjoecker.de/'
							rel='noopener noreferrer'
							underline='always'
							target='_blank'
							tabIndex={localStorage.getItem('cookieConsentAccepted') == null ? -1 : 0}
							aria-label={"Christian Jöcker's(opens personal website in a new window)"}
						>
							Christian Jöcker
						</Link>
					</Grid>
				</Typography>
			</footer>
		</Grid>
	);
};

export default Footer;
