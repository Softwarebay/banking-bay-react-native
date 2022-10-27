interface Colors {
	screenBackground: string;
	mainDark: string;
	bodyText: string;
	pink: string;
	buttonLight: string;
	buttonDark: string;
	green: string;
	white: string;
	shadow: string;
	grey600: string;
	grey300: string;
	grey100: string;
}

export const colors: Colors = {
	screenBackground: '#FAFCFF',
	mainDark: '#1B1D4D',
	bodyText: '#4C4C60',
	pink: '#FF5887',
	buttonLight: '#97DAFF',
	buttonDark: '#16579D',
	green: '#3EB290',
	white: '#FFFFFF',
	shadow: '#161966',
	grey600: '#868698',
	grey300: '#CED6E1',
	grey100: '#F1F5FD',
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
