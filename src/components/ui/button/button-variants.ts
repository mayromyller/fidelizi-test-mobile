import type { ThemeColors } from '@/theme'
import type { TouchableOpacityBoxProps } from '../box/box'

export type ButtonVariants = 'primary' | 'secondary'

interface ButtonUI {
	container: TouchableOpacityBoxProps
	content: ThemeColors
}

export const buttonUIVariants: Record<
	ButtonVariants,
	{
		default: ButtonUI
		disabled: ButtonUI
	}
> = {
	primary: {
		default: {
			container: {
				backgroundColor: 'primary'
			},
			content: 'white'
		},
		disabled: {
			container: {
				backgroundColor: 'primaryDisabled'
			},
			content: 'white'
		}
	},
	secondary: {
		default: {
			container: {
				backgroundColor: 'gray50'
			},
			content: 'black800'
		},
		disabled: {
			container: {
				backgroundColor: 'gray50'
			},
			content: 'gray500'
		}
	}
}
