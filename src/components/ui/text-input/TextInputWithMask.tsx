import type React from 'react'
import { Pressable, type TextInput } from 'react-native'

import MaskInput, { type MaskInputProps } from 'react-native-mask-input'

import type { Theme } from '@/theme'
import { useTheme } from '@shopify/restyle'

import { useRef } from 'react'
import { Box, type BoxProps } from '../box/box'
import { Text } from '../text/Text'
import { $textInputStyle } from './TextInput'

export interface TextInputMaskProps extends MaskInputProps {
	label?: string
	RightComponent?: React.ReactElement
}

export function TextInputWithMask({
	label,
	RightComponent,
	...rnTextInputMaskProps
}: TextInputMaskProps) {
	const { colors } = useTheme<Theme>()
	const inputRef = useRef<TextInput>(null)
	const focusInput = () => inputRef.current?.focus()

	const $textInputContainer: BoxProps = {
		flexDirection: 'row',
		borderWidth: 0,
		padding: 's16',
		backgroundColor: 'white',
		borderBottomColor: 'border',
		borderBottomWidth: 1
	}

	return (
		<Pressable onPress={focusInput}>
			<Box>
				{label && (
					<Text preset="caption" marginBottom="s2">
						{label}
					</Text>
				)}
				<Box {...$textInputContainer}>
					<MaskInput
						ref={inputRef}
						placeholderTextColor={colors.placeholder}
						style={[
							$textInputStyle,
							{
								color: colors.text
							}
						]}
						{...rnTextInputMaskProps}
					/>
					{RightComponent && (
						<Box justifyContent="center" ml="s16">
							{RightComponent}
						</Box>
					)}
				</Box>
			</Box>
		</Pressable>
	)
}
