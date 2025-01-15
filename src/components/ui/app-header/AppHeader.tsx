import { Image, type ImageSourcePropType } from 'react-native'

import { Box } from '../box/box'
import { Text } from '../text/Text'

import PizzaLogo from '../../../assets/images/pizza-logo.png'

interface AppHeaderProps {
	titleStore: string
	descriptionStore: string
	imageStore?: ImageSourcePropType
	Component?: React.ReactElement
}

export function AppHeader({
	titleStore,
	descriptionStore,
	imageStore = PizzaLogo,
	Component
}: AppHeaderProps) {
	return (
		<Box paddingHorizontal="s16" pt="s24" pb="s16" backgroundColor="primary">
			{Component && (
				<Box paddingHorizontal="s16" mt="s16" mb="s24">
					{Component}
				</Box>
			)}
			<Box flexDirection="row" alignItems="center" gap="s8">
				<Box
					height={60}
					width={60}
					borderRadius="full"
					borderWidth={2}
					padding="s4"
					style={{
						borderColor: '#32732D'
					}}
					alignItems="center"
					justifyContent="center"
				>
					<Image source={imageStore} style={{ width: 52, height: 52 }} />
				</Box>

				<Box>
					<Text preset="body" fontFamily="bold" color="white">
						{titleStore}
					</Text>
					<Text color="white" preset="paragraph">
						{descriptionStore}
					</Text>
				</Box>
			</Box>
		</Box>
	)
}
