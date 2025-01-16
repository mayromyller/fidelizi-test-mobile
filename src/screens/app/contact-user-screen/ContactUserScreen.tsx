import { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppHeader, Box, Button, Content, Text, TextInput } from '@/components'
import type { Theme } from '@/theme'

import {
	formatValueToCurrency,
	useCalculateStamp,
	useSetPhone
} from '@/features'
import type { AppScreenProps } from '@/routes'

export function ContactUserScreen({
	navigation,
	route
}: AppScreenProps<'ContactUserScreen'>) {
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const { value } = route.params

	const totalStamps = useCalculateStamp(value)

	const { colors } = useTheme<Theme>()
	const { top } = useSafeAreaInsets()
	const { setPhone } = useSetPhone()

	function handleNavigateToRegisterUser() {
		if (phoneNumber) {
			setPhone(phoneNumber)
		}

		navigation.navigate('RegisterUserScreen', {
			totalStamps
		})
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
				/>
				<Content title="Qual o WhatsApp do cliente?">
					<Box gap="s32">
						<TextInput
							placeholder="(99) 99999-9999"
							keyboardType="numeric"
							value={phoneNumber}
							onChangeText={setPhoneNumber}
						/>

						<Text preset="body" fontFamily="bold" color="gray700">
							{totalStamps} {totalStamps > 1 ? 'Selos' : 'Selo'}{' '}
							{`(${formatValueToCurrency(value)})`}
						</Text>

						<Box gap="s8">
							<Button
								title="Próximo >"
								variant="secondary"
								onPress={handleNavigateToRegisterUser}
							/>
						</Box>
					</Box>
				</Content>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
