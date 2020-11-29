import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Grid, Tooltip} from '@material-ui/core';
import {isMobile} from 'react-device-detect';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import TasksTable from './tasksTable/TasksTable';
import {TasksEstimationProvider} from './hooks/useTasksEstimations';
import ResultsBar from './tasksTable/components/ResultsBar';
import BannerLogo from './header/BannerLogo';
import Footer from './footer/Footer';
import InfoDialog from './infoDialog/InfoDialog';
import HelpText from './infoDialog/HelpText';

const useStyles = makeStyles((styleTheme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			overflowX: 'hidden', //Avoid negative margin from mainGrid
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
		},
		tasksTableWrapper: {
			margin: styleTheme.spacing(0, isMobile ? 2 : 10),
		},
		helpButton: {
			position: 'absolute',
			top: styleTheme.spacing(1),
			right: styleTheme.spacing(1),
		},
	})
);

const MainPage: React.FunctionComponent = () => {
	const classes = useStyles();

	const [isHelpVisible, setIsHelpVisible] = useState(false);

	return (
		<TasksEstimationProvider>
			<main role='main'>
				<div className={classes.root}>
					<Tooltip title='Show help'>
						<IconButton
							aria-label='Show help'
							data-testid='showHelpButton'
							className={classes.helpButton}
							onClick={() => setIsHelpVisible(true)}
						>
							<HelpOutlineIcon />
						</IconButton>
					</Tooltip>
					<BannerLogo />
					<div className={classes.tasksTableWrapper}>
						<TasksTable />
						<Grid container direction='row' justify={isMobile ? 'center' : 'flex-end'} alignItems='flex-end'>
							<ResultsBar />
						</Grid>
					</div>
					<Footer />
				</div>
				<InfoDialog text={HelpText} isVisible={isHelpVisible} onClose={() => setIsHelpVisible(false)} />
			</main>
		</TasksEstimationProvider>
	);
};

export default MainPage;
