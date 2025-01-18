import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

export function GiftCollectedIcon() {
	return (
		<Svg width={36} height={36} viewBox="0 0 36 36" fill="none">
			<Path
				d="M30 12H6a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 006 18h24a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0030 12zM18 12v19.5"
				stroke="#6F3FA2"
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M28.5 18v10.5a3 3 0 01-3 3h-15a3 3 0 01-3-3V18M11.25 12a3.75 3.75 0 110-7.5c1.447-.025 2.865.677 4.07 2.015C16.522 7.853 17.456 9.765 18 12c.543-2.236 1.477-4.147 2.68-5.485 1.205-1.338 2.623-2.04 4.07-2.015a3.75 3.75 0 010 7.5"
				stroke="#6F3FA2"
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}
