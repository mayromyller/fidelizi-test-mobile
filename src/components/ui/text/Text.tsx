import type { TextStyle } from 'react-native'

import type { Theme } from '@/theme'
import { createText } from '@shopify/restyle'

const RestyleText = createText<Theme>()
export type RestyleTextProps = React.ComponentProps<typeof RestyleText>

interface TextProps extends RestyleTextProps {
	fontFamily?: FontFamily
	preset?: TextVariants
}

export function Text({
	children,
	preset = 'body',
	fontFamily = 'regular',
	...restyleText
}: TextProps) {
	const font = getFontFamily(fontFamily)

	return (
		<RestyleText
			style={[
				$fontSizes[preset],
				{
					fontFamily: font
				}
			]}
			{...restyleText}
		>
			{children}
		</RestyleText>
	)
}

function getFontFamily(font: FontFamily) {
	switch (true) {
		case font === 'bold':
			return $fontFamily.bold
		case font === 'semiBold':
			return $fontFamily.semiBold
		case font === 'medium':
			return $fontFamily.medium
		case font === 'light':
			return $fontFamily.light
		default:
			return $fontFamily.regular
	}
}

type TextVariants =
	| 'title'
	| 'caption'
	| 'body'
	| 'heading'
	| 'paragraph'
	| 'paragraphSmall'

export const $fontSizes: Record<TextVariants, TextStyle> = {
	title: {
		fontSize: 24,
		lineHeight: 32
	},
	caption: {
		fontSize: 12,
		lineHeight: 16
	},
	paragraphSmall: {
		fontSize: 14
	},
	body: {
		fontSize: 18,
		lineHeight: 24
	},
	heading: {
		fontSize: 20,
		lineHeight: 24
	},
	paragraph: {
		fontSize: 16
	}
}

export const $fontFamily = {
	light: 'Nunito_300Light',
	regular: 'Nunito_400Regular',
	medium: 'Nunito_500Medium',
	semiBold: 'Nunito_600SemiBold',
	bold: 'Nunito_700Bold'
}

type FontFamily = keyof typeof $fontFamily
