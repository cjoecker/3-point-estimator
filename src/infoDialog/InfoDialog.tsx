import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import {Tooltip} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	dialog: {
		margin: 0,
	},

	dialogContent: {
		marginTop: theme.spacing(-2),
	},
	closeButton: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(-1),
		float: 'right',
	},
	text: {
		textAlign: 'justify',
	},
}));

type Props = {
	text: JSX.Element;
	isVisible: boolean;
	onClose: () => void;
};

const InfoDialog: React.FC<Props> = (props: Props) => {
	const {text, isVisible, onClose} = props;

	const classes = useStyles();

	const handleClose = () => {
		onClose();
	};

	return (
		<div>
			<Dialog className={classes.dialog} onClose={handleClose} aria-labelledby='customized-dialog-title' open={isVisible}>
				<DialogContent className={classes.dialogContent}>
					<Tooltip title='Close dialog'>
						<IconButton
							aria-label='Close dialog'
							data-testid='infoCloseButton'
							className={classes.closeButton}
							onClick={handleClose}
						>
							<CloseIcon />
						</IconButton>
					</Tooltip>
					<Typography data-testid='infoText' component='span' variant='body1' align='left' className={classes.text}>
						{text}
					</Typography>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default InfoDialog;
