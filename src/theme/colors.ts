export const palette = {
	white: '#FFFFFF',
	white100: '#F9F9F9',

	black900: '#181818',

	gray50: '#E6E6E6', // using in button
	gray100: '#E9E9E9', // using in border-bottom unfocused
	gray200: '#C3C3C3', // using in border-bottom focused
	gray300: '#B2B2B2', // using in border-bottom unfocused, eye icon and stamp (selo) unfilled
	gray400: '#898989', // using in placeholder
	gray500: '#8D8D8D', // using in user icon
	gray600: '#5A5A5A', // using in text-body-secondary

	purple200: '#CCB0EA', // using in stamp filled
	purple300: '#9C7BBF', // using in disabled primary button
	purple500: '#6F3FA2' // using in primary button
}

export const colors = {
	...palette,
	primary: palette.purple500,
	secondary: palette.purple300,
	background: palette.white100,
	text: palette.black900,
	border: palette.gray100,
	placeholder: palette.gray400,
	focused: palette.gray200,
	unfocused: palette.gray100,
	textBody: palette.gray600
}
