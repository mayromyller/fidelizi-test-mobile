import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppHeader, Box, Button, Content, Text } from '@/components'
import { useStampService } from '@/features'
import { useBackHandler } from '@/hooks'
import type { AppScreenProps } from '@/routes'
import type { Theme } from '@/theme'

export function HomeScreen({ navigation }: AppScreenProps<'HomeScreen'>) {
	const { top } = useSafeAreaInsets()
	const { colors } = useTheme<Theme>()

	const { stamps, removeStamps } = useStampService()

	const stampsToCollect = stamps / 12

	function handleNavigateToAmountSpentScreen() {
		navigation.navigate('AmountSpentScreen')
	}

	useBackHandler()

	return (
		<KeyboardAvoidingView
			style={{ flex: 1, backgroundColor: colors.background }}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<StatusBar style="light" backgroundColor={colors.primary} translucent />
			<ScrollView
				style={{ flex: 1, paddingTop: top }}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
				overScrollMode="never"
				bounces={false}
			>
				<AppHeader
					titleStore="Pizzaria Italian"
					descriptionStore="Pizzaria Italian - Loja 01"
				/>
				<Box
					flexDirection="row"
					alignItems="center"
					pt="s14"
					paddingHorizontal="s16"
					justifyContent="space-between"
				>
					<Text preset="title" fontFamily="bold">
						Bem vindo!
					</Text>
				</Box>

				<Content
					noPadding
					backgroundColor="background"
					contentColor="background"
					mt="s2"
					noBorder
				>
					<Box gap="s8">
						{stamps < 12 ? (
							<Box gap="s8">
								<Text preset="body">
									Você ainda não possui pontos suficientes para resgatar.
								</Text>
								<Text preset="body">
									Pontos conquistados:{' '}
									<Text fontFamily="bold">{`${stamps}`}</Text>
								</Text>
							</Box>
						) : (
							<Text preset="body">
								Você já possui pontos suficientes para resgatar{' '}
								{Math.floor(stampsToCollect)}{' '}
								{stampsToCollect > 1 ? 'presente' : 'presente'}
							</Text>
						)}
					</Box>
				</Content>

				<Box
					justifyContent="flex-end"
					paddingHorizontal="s16"
					gap="s8"
					flex={1}
				>
					{stampsToCollect >= 1 && (
						<Button
							title="Regatar pontos"
							variant="primary"
							onPress={removeStamps}
						/>
					)}
					<Button
						title="Lançar pontos"
						variant="primary"
						onPress={handleNavigateToAmountSpentScreen}
					/>
				</Box>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
