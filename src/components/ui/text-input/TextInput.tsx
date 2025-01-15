import type React from 'react'
import { useRef } from 'react'
import {
	Pressable,
	TextInput as RNTextInput,
	type TextInputProps as RNTextInputProps,
	type TextStyle
} from 'react-native'

import type { Theme } from '@/theme'
import { useTheme } from '@shopify/restyle'
import { Box, type BoxProps } from '../box/box'
import { $fontFamily, $fontSizes, Text } from '../text/Text'

export interface TextInputProps extends RNTextInputProps {
	label?: string
	errorMessage?: string
	RightComponent?: React.ReactElement
}

export function TextInput({
	label,
	errorMessage,
	RightComponent,
	...rnTextInputProps
}: TextInputProps) {
	const { colors } = useTheme<Theme>()
	const inputRef = useRef<RNTextInput>(null)
	const focusInput = () => inputRef.current?.focus()

	const $textInputContainer: BoxProps = {
		flexDirection: 'row',
		borderWidth: errorMessage ? 1 : 0,
		padding: 's16',
		backgroundColor: 'white',
		borderBottomColor: 'border',
		borderBottomWidth: 1
	}

	return (
		<Pressable onPress={focusInput}>
			<Box>
				<Text preset="caption" marginBottom="s2">
					{label}
				</Text>
				<Box {...$textInputContainer}>
					<RNTextInput
						ref={inputRef}
						placeholderTextColor={colors.placeholder}
						style={[
							$textInputStyle,
							{
								color: colors.text
							}
						]}
						{...rnTextInputProps}
					/>
					{RightComponent && (
						<Box justifyContent="center" ml="s16">
							{RightComponent}
						</Box>
					)}
				</Box>
				{errorMessage && <Text preset="body">{errorMessage}</Text>}
			</Box>
		</Pressable>
	)
}

export const $textInputStyle: TextStyle = {
	flexGrow: 1,
	flexShrink: 1,
	padding: 0,
	fontFamily: $fontFamily.regular,
	...$fontSizes.body
}
