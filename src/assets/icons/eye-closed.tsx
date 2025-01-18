import type { Theme } from '@/theme'
import { useTheme } from '@shopify/restyle'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconType } from './iconType'

export function EyeClosedIcon({ color }: IconType) {
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
			<Path d="M15 18l-.722-3.25M2 8a10.645 10.645 0 0020 0M20 15l-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25" />
		</Svg>
	)
}
