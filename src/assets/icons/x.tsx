import { Path, Svg } from 'react-native-svg'

export function XIcon() {
	return (
		<Svg
			width={32}
			height={32}
			viewBox="0 0 24 24"
			fill="none"
			stroke="white"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Path d="M18 6L6 18M6 6l12 12" />
		</Svg>
	)
}
