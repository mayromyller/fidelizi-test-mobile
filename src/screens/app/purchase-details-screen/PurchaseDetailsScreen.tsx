import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppHeader, Box, Button, Content, Text } from '@/components'
import { formatValueToCurrency, useCalculateStamp } from '@/features'
import type { AppScreenProps } from '@/routes'
import type { Theme } from '@/theme'

export function PurchaseDetailsScreen({
	route,
	navigation
}: AppScreenProps<'PurchaseDetailsScreen'>) {
	const { top } = useSafeAreaInsets()
	const { colors } = useTheme<Theme>()

	const { value } = route.params
	const totalStamps = useCalculateStamp(value)

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
						Detalhes da compra
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
						<Text preset="body">
							Compra no valor de{' '}
							<Text fontFamily="bold">{`${formatValueToCurrency(value)}`}</Text>
						</Text>
						<Text preset="body">
							Total de selos ganhos{' '}
							<Text fontFamily="bold">{`${totalStamps}`}</Text>
						</Text>
					</Box>
				</Content>

				<Box
					justifyContent="flex-end"
					paddingHorizontal="s16"
					gap="s8"
					flex={1}
				>
					<Button
						title="Voltar"
						variant="primary"
						onPress={navigation.goBack}
					/>
				</Box>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
