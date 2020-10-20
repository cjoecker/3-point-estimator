import {createMuiTheme, Theme} from '@material-ui/core';

function theme(): Theme {
	const background = '#003420';
	const primary = '#d4a32e';
	const primaryContrastText = '#e3e3e3';
	const secondary = '#cdcdcd';
	const secondaryContrastText = '#303030';
	const primaryText = '#ffffff';
	const secondaryText = '#d4a32e';
	const disabledText = '#B0B0B0';

	/* eslint-disable no-bitwise*/
	function shadeHexColor(color: string, percent: number) {
		const f = parseInt(color.slice(1), 16);
		const t = percent < 0 ? 0 : 255;
		const p = percent < 0 ? percent * -1 : percent;
		const R = f >> 16;
		const G = (f >> 8) & 0x00ff;
		const B = f & 0x0000ff;
		return `#${(
			0x1000000 +
			(Math.round((t - R) * p) + R) * 0x10000 +
			(Math.round((t - G) * p) + G) * 0x100 +
			(Math.round((t - B) * p) + B)
		)
			.toString(16)
			.slice(1)}`;
	}

	return createMuiTheme({
		typography: {
			fontFamily: ['Work Sans', 'Calibri', 'sans-serif'].join(','),
			caption: {
				fontWeight: 100,
				fontSize: 14,
			},
			fontWeightRegular: 100,
			fontWeightBold: 200,
			h1: {
				fontWeight: 200,
				fontSize: 28,
			},
			h2: {
				fontWeight: 200,
				fontSize: 23,
			},
			h3: {
				fontWeight: 200,
				fontSize: 20,
			},
			h4: {
				fontWeight: 200,
				fontSize: 18,
			},
			h5: {
				fontWeight: 200,
				fontSize: 18,
			},
			h6: {
				fontWeight: 200,
				fontSize: 16,
			},
			body1: {
				fontWeight: 100,
				fontSize: 16,
			},
			body2: {
				fontWeight: 100,
				fontSize: 16,
			},
		},
		overrides: {
			MuiTypography: {
				root: {
					'& h1': {
						fontWeight: 200,
						fontSize: 28,
					},
					'& h2': {
						fontWeight: 200,
						fontSize: 23,
						marginTop: 50,
					},
					'& h3': {
						fontWeight: 200,
						fontSize: 20,
						marginBottom: -4,
						marginTop: 30,
					},
					'& h4': {
						fontWeight: 200,
						fontSize: 18,
						marginTop: 20,
					},
					'& h5': {
						fontWeight: 200,
						fontSize: 18,
					},
					'& h6': {
						fontWeight: 200,
						fontSize: 16,
					},
					'& body': {
						fontWeight: 100,
						fontSize: 16,
					},
					'& a': {
						color: primary,
					},
				},
			},
			MuiCssBaseline: {
				'@global': {
					body: {
						background: `linear-gradient(145deg, ${background} 0%, ${shadeHexColor(background, -0.57)}) 100%`,
					},
				},
			},
		},
		palette: {
			type: 'dark',
			background: {
				default: background,
			},
			primary: {
				main: primary,
				contrastText: primaryContrastText,
			},
			secondary: {
				main: secondary,
				contrastText: secondaryContrastText,
			},
			text: {
				primary: primaryText,
				secondary: secondaryText,
				disabled: disabledText,
			},
		},
	});
}

export default theme;
