import { createTheme } from '@shopify/restyle'
import { colors } from './colors'

export const theme = createTheme({
	colors: colors,
	spacing: {
		none: 0,
		s2: 2,
		s4: 4,
		s8: 8,
		s10: 10,
		s12: 12,
		s14: 14,
		s16: 16,
		s20: 20,
		s24: 24,
		s32: 32,
		s40: 40,
		s48: 48,
		s56: 56,
		s60: 60
	},
	borderRadii: {
		s8: 8,
		s12: 12,
		s16: 16,
		full: 999
	},

	textVariants: {
		defaults: {}
	}
})

export type Theme = typeof theme
export type ThemeColors = keyof Theme['colors']
