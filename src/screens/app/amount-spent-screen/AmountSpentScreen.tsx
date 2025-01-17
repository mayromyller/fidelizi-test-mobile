import { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ChevronLeftIcon } from '@/assets'
import {
	AppHeader,
	Box,
	Button,
	Content,
	PressableBox,
	Text,
	TextInput
} from '@/components'
import {
	useAuthSignOut,
	useCalculateStamp,
	useGetUserPersisted
} from '@/features'
import type { AppScreenProps } from '@/routes'
import type { Theme } from '@/theme'

export function AmountSpentScreen({
	navigation
}: AppScreenProps<'AmountSpentScreen'>) {
	const [value, setValue] = useState<string>('')

	const { colors } = useTheme<Theme>()
	const { signOut } = useAuthSignOut()
	const { top } = useSafeAreaInsets()

	const isValidValue = Number(value) < 20
	const userPersisted = useGetUserPersisted()
	const totalStamps = useCalculateStamp(Number(value))

	function handleNavigateToNextScreen() {
		if (userPersisted?.cpf) {
			navigation.navigate('StampEarnScreen', {
				value: Number(value),
				totalStamps
			})
		} else {
			navigation.navigate('ContactUserScreen', {
				value: Number(value)
			})
		}
	}

	return (
		<KeyboardAvoidingView
			style={{ flex: 1, backgroundColor: colors.background }}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<StatusBar style="light" backgroundColor={colors.primary} translucent />
			<ScrollView style={{ flex: 1, paddingTop: top }}>
				<AppHeader
					titleStore="Pizzaria Italian"
					descriptionStore="Pizzaria Italian - Loja 01"
					Component={
						<PressableBox onPress={navigation.goBack}>
							<ChevronLeftIcon />
						</PressableBox>
					}
				/>
				<Content title="Qual o valor gasto?">
					<Box gap="s32">
						<TextInput
							placeholder="R$ 0,00"
							keyboardType="numeric"
							value={value}
							onChangeText={setValue}
						/>
						<Text preset="body" fontFamily="bold" color="gray700">
							*A cada visita = 1 selo
						</Text>
						<Text preset="body" fontFamily="bold" color="gray700">
							*Gasto mínio: R$ 20,00
						</Text>

						<Box gap="s8">
							<Button
								title="Lançar pontos"
								variant="primary"
								disabled={isValidValue}
								onPress={handleNavigateToNextScreen}
							/>
							<Button
								title="Desconectar"
								variant="secondary"
								onPress={signOut}
							/>
						</Box>
					</Box>
				</Content>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
