import { useTheme } from '@shopify/restyle'
import { ActivityIndicator } from 'react-native'

import { TouchableOpacityBox, type TouchableOpacityBoxProps } from '../box/box'
import { Text } from '../text/Text'
import { type ButtonVariants, buttonUIVariants } from './button-variants'

import type { Theme } from '@/theme'

interface ButtonProps extends TouchableOpacityBoxProps {
	title: string
	variant?: ButtonVariants
	disabled?: boolean
	isLoading?: boolean
}

export function Button({
	title,
	variant = 'primary',
	disabled = false,
	isLoading = false,
	...touchableOpacityBox
}: ButtonProps) {
	const buttonVariant =
		buttonUIVariants[variant][disabled ? 'disabled' : 'default']
	const { colors } = useTheme<Theme>()

	return (
		<TouchableOpacityBox
			disabled={disabled}
			height={36}
			activeOpacity={0.8}
			alignItems="center"
			justifyContent="center"
			borderRadius="full"
			{...buttonVariant.container}
			{...touchableOpacityBox}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={colors.primary} />
			) : (
				<Text
					preset="paragraph"
					fontFamily="bold"
					color={buttonVariant.content}
				>
					{title}
				</Text>
			)}
		</TouchableOpacityBox>
	)
}
