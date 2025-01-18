import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import React, { useMemo } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
	GiftCollectedIcon,
	GiftUncollectedIcon,
	HeartFilledIcon,
	HeartUnFilledIcon,
	UserIcon
} from '@/assets'
import { AppHeader, Box, Button, Content, Text } from '@/components'
import type { Theme } from '@/theme'

import { useGetUserPersisted, useStampService } from '@/features'
import type { AppScreenProps } from '@/routes'

const TOTAL_STAMPS = 12

export function StampEarnScreen({
	route,
	navigation
}: AppScreenProps<'StampEarnScreen'>) {
	const { top } = useSafeAreaInsets()
	const { colors } = useTheme<Theme>()

	const { totalStamps, value } = route.params

	const { setStamps, stamps } = useStampService()
	const { cpf, fullName } = useGetUserPersisted()

	const collectedStamps = useMemo(() => totalStamps + stamps, [totalStamps])

	const stampsToRender = Array.from({ length: TOTAL_STAMPS }, (_, index) => ({
		id: index,
		isCollected: index < collectedStamps
	}))

	const isGiftBoxCollected = collectedStamps >= TOTAL_STAMPS

	function handleSetStamps() {
		setStamps(collectedStamps)

		navigation.navigate('HomeScreen')
	}

	function handleNavigateToPurchaseDetailsScreen() {
		navigation.navigate('PurchaseDetailsScreen', {
			value
		})
	}

	function renderStamp(stamp: { id: number; isCollected: boolean }) {
		return (
			<Box
				testID={`stamp-${stamp.id}`}
				key={stamp.id}
				width={84}
				height={79}
				borderRadius="s8"
				backgroundColor={stamp.isCollected ? 'purple200' : 'white200'}
				alignItems="center"
				justifyContent="center"
			>
				{stamp.isCollected ? <HeartFilledIcon /> : <HeartUnFilledIcon />}
			</Box>
		)
	}

	function renderGift(isCollected: boolean) {
		return (
			<Box
				testID="gift"
				width={84}
				height={79}
				borderRadius="s8"
				backgroundColor={isCollected ? 'purple200' : 'white200'}
				alignItems="center"
				justifyContent="center"
			>
				{isCollected ? <GiftCollectedIcon /> : <GiftUncollectedIcon />}
			</Box>
		)
	}

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
						Cartões
					</Text>
					<Box flexDirection="row" alignItems="center" gap="s4">
						<UserIcon />
						<Box>
							<Text preset="paragraphSmall">{fullName}</Text>
							<Text preset="paragraphSmall">CPF {cpf}</Text>
						</Box>
					</Box>
				</Box>

				<Content
					noPadding
					backgroundColor="background"
					contentColor="background"
					mt="s2"
					noBorder
				>
					<Box>
						<Box
							flexDirection="row"
							flexWrap="wrap"
							justifyContent="center"
							mb="s12"
							gap="s12"
						>
							{stampsToRender.slice(0, 11).map(renderStamp)}
							{renderGift(isGiftBoxCollected)}
						</Box>
					</Box>
				</Content>

				<Box
					justifyContent="flex-end"
					paddingHorizontal="s16"
					gap="s8"
					flex={1}
				>
					<Button
						title="Ver detalhes da compra"
						variant="primary"
						onPress={handleNavigateToPurchaseDetailsScreen}
					/>
					<Button
						title="Finalizar"
						variant="primary"
						onPress={handleSetStamps}
					/>
				</Box>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
