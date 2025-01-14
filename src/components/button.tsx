import type { Theme } from '@/theme'
import { useTheme } from '@shopify/restyle'
import { Pressable, Text } from 'react-native'

export function Button() {
	const theme = useTheme<Theme>()

	return (
		<Pressable
			style={{
				height: 40,
				width: 200,
				backgroundColor: theme.colors.primary,
				borderRadius: theme.borderRadii.s16,
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Text
				style={{
					color: theme.colors.white,
					textAlign: 'center'
				}}
			>
				Button
			</Text>
		</Pressable>
	)
}
