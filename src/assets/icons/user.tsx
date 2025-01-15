import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

export function UserIcon() {
	return (
		<Svg
			width={16}
			height={16}
			viewBox="0 0 24 24"
			fill="none"
			stroke="#8D8D8D"
			strokeWidth={1}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Path d="M18 20a6 6 0 00-12 0" />
			<Circle cx={12} cy={10} r={4} />
			<Circle cx={12} cy={12} r={10} />
		</Svg>
	)
}
