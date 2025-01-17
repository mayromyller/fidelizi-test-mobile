import { Path, Svg } from 'react-native-svg'

export function ChevronLeftIcon() {
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
			<Path d="M15 18l-6-6 6-6" />
		</Svg>
	)
}
