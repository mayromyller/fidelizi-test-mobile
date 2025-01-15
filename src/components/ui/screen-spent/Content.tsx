import type { ThemeColors } from '@/theme'
import { Box, type BoxProps } from '../box/box'
import { Text } from '../text/Text'

interface ContentProps extends BoxProps {
	title?: string
	children?: React.ReactElement
	noPadding?: boolean
	backgroundColor?: ThemeColors
	noBorder?: boolean
}

export function Content({
	title,
	children,
	noPadding,
	noBorder = true,
	backgroundColor = 'white200',
	...boxProps
}: ContentProps) {
	return (
		<Box
			mt="s60"
			backgroundColor={backgroundColor}
			paddingHorizontal="s16"
			gap="s20"
			{...boxProps}
		>
			<Text preset="heading" fontFamily="semiBold">
				{title}
			</Text>

			<Box
				borderColor="white200"
				backgroundColor={backgroundColor}
				borderRadius="s8"
				borderWidth={noBorder ? 0 : 1}
				p={noPadding ? 'none' : 's16'}
			>
				{children}
			</Box>
		</Box>
	)
}
