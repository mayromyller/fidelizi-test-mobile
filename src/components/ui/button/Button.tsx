import { TouchableOpacityBox, type TouchableOpacityBoxProps } from '../box/box'
import { Text } from '../text/Text'
import { type ButtonVariants, buttonUIVariants } from './button-variants'

interface ButtonProps extends TouchableOpacityBoxProps {
	title: string
	variant?: ButtonVariants
	disabled?: boolean
}

export function Button({
	title,
	variant = 'primary',
	disabled = false,
	...touchableOpacityBox
}: ButtonProps) {
	const buttonVariant =
		buttonUIVariants[variant][disabled ? 'disabled' : 'default']

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
			<Text preset="paragraph" fontFamily="bold" color={buttonVariant.content}>
				{title}
			</Text>
		</TouchableOpacityBox>
	)
}
