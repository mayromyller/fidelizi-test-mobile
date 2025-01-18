import type { Theme } from '@/theme'
import { useTheme } from '@shopify/restyle'
import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { IconType } from './iconType'

export function EyeIcon({ color }: IconType) {
	const theme = useTheme<Theme>()

	return (
		<Svg
			width={18}
			height={18}
			viewBox="0 0 24 24"
			fill="none"
			stroke={theme.colors[color]}
			strokeWidth={1}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Path d="M2.062 12.348a1 1 0 010-.696 10.75 10.75 0 0119.876 0 1 1 0 010 .696 10.75 10.75 0 01-19.876 0" />
			<Circle cx={12} cy={12} r={3} />
		</Svg>
	)
}
