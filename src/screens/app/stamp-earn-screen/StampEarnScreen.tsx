import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
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

import type { AppScreenProps } from '@/routes'

const TOTAL_STAMPS = 12

export function StampEarnScreen({ route }: AppScreenProps<'StampEarnScreen'>) {
	const { top } = useSafeAreaInsets()
	const { colors } = useTheme<Theme>()

	const { totalStamps } = route.params
	const collectedStamps = totalStamps

	const stamps = Array.from({ length: TOTAL_STAMPS }, (_, index) => ({
		id: index,
		isCollected: index < collectedStamps
	}))

	const isGiftBoxCollected = collectedStamps === TOTAL_STAMPS

	function renderStamp(stamp: { id: number; isCollected: boolean }) {
		return (
			<Box
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
							<Text preset="paragraphSmall">Nome do cliente</Text>
							<Text preset="paragraphSmall">CPF 000.000.000-00</Text>
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
							{stamps.slice(0, 11).map(renderStamp)}
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
					<Button title="Ver detalhes da compra" variant="primary" disabled />
					<Button title="Finalizar" variant="primary" />
				</Box>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
