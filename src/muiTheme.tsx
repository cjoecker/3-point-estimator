import {createMuiTheme, Theme} from '@material-ui/core';

function theme(): Theme {
	const background = '#003420';
	const primary = '#d4a32e';
	const primaryContrastText = '#e3e3e3';
	const secondary = '#cdcdcd';
	const secondaryContrastText = '#303030';
	const primaryText = '#ffffff';
	const secondaryText = '#dbbc73';
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
			fontWeightBold: 300,
			h1: {
				fontWeight: 300,
				fontSize: 28,
			},
			h2: {
				fontWeight: 300,
				fontSize: 23,
			},
			h3: {
				fontWeight: 300,
				fontSize: 20,
			},
			h4: {
				fontWeight: 300,
				fontSize: 18,
			},
			h5: {
				fontWeight: 300,
				fontSize: 18,
			},
			h6: {
				fontWeight: 300,
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
						fontWeight: 300,
						fontSize: 28,
					},
					'& h2': {
						fontWeight: 300,
						fontSize: 23,
						marginTop: 50,
					},
					'& h3': {
						fontWeight: 300,
						fontSize: 20,
						marginBottom: -4,
						marginTop: 30,
					},
					'& h4': {
						fontWeight: 300,
						fontSize: 18,
						marginTop: 20,
					},
					'& h5': {
						fontWeight: 300,
						fontSize: 18,
					},
					'& h6': {
						fontWeight: 300,
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
					u: {
						textDecoration: 'none',
						borderBottom: `0.5px solid`,
						paddingBottom: `-0.5px`,
					},
				},
			},
			MuiButton: {
				label: {
					fontWeight: 300,
				},
			},
			MuiPaper: {
				root: {
					backgroundColor: background,
					border: `solid 0.5px ${primaryText}`,
				},
				elevation8: {
					boxShadow: 'none',
					border: `solid 0.5px ${primaryText}`,
				},
			},
			MuiOutlinedInput: {
				notchedOutline: {
					borderWidth: `0.5px`,
					borderColor: primaryText,
				},
				input: {
					padding: '5px 10px',
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
