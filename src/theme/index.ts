interface Colors {
	screenBackground: string;
	mainDark: string;
	bodyText: string;
	link: string;
	buttonLight: string;
	buttonDark: string;
	success: string;
	error: string;
	white: string;
	shadow: string;
	checkbox: string;
	divider: string;
}

export const colors: Colors = {
	screenBackground: '#FAFCFF',
	mainDark: '#1B1D4D',
	bodyText: '#4C4C60',
	link: '#FF5887',
	buttonLight: '#97DAFF',
	buttonDark: '#16579D',
	success: '#3EB290',
	error: '#FF5887',
	white: '#FFFFFF',
	shadow: '#161966',
	checkbox: '#868698',
	divider: '#CED6E1',
};

interface Shadows {
	ios: {
		shadowColor: string;
		shadowOffset: {
			width: number;
			height: number;
		};
		shadowOpacity: number;
		shadowRadius: number;
	};
	android: {
		elevation: number;
		shadowColor: string;
	};
}

export const shadows: Shadows = {
	ios: {
		shadowColor: colors.shadow,
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.08,
		shadowRadius: 16,
	},
	android: {
		elevation: 4,
		shadowColor: colors.shadow,
	},
};
