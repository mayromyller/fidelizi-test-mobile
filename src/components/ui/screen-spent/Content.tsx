import { Box } from '../box/box'
import { Text } from '../text/Text'

interface ContentProps {
	title?: string
	children?: React.ReactElement
}

export function Content({ title, children }: ContentProps) {
	return (
		<Box mt="s60" paddingHorizontal="s16" gap="s20">
			<Text preset="heading" fontFamily="semiBold">
				{title}
			</Text>

			<Box
				borderColor="white200"
				backgroundColor="white"
				borderRadius="s8"
				borderWidth={1}
				p="s16"
			>
				{children}
			</Box>
		</Box>
	)
}
