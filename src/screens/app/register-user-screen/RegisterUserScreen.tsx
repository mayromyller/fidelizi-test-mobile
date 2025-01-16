import { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppHeader, Box, Button, Content, TextInput } from '@/components'
import type { Theme } from '@/theme'

import { useSetUser } from '@/features'
import type { AppScreenProps } from '@/routes'

export function RegisterUserScreen({
	navigation,
	route
}: AppScreenProps<'RegisterUserScreen'>) {
	const [fullName, setFullName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [cpf, setCpf] = useState<string>('')

	const { colors } = useTheme<Theme>()
	const { top } = useSafeAreaInsets()
	const { totalStamps } = route.params

	const { registerUser } = useSetUser()

	const formIsValid = fullName && email && cpf

	function handleNavigateToStampEarnScreen() {
		if (formIsValid) {
			registerUser({
				fullName,
				email,
				cpf
			})

			navigation.navigate('StampEarnScreen', {
				totalStamps
			})
		}
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
				overScrollMode="never"
				bounces={false}
			>
				<AppHeader
					titleStore="Pizzaria Italian"
					descriptionStore="Pizzaria Italian - Loja 01"
				/>
				<Content title="Complete seu cadastro">
					<Box gap="s32">
						<TextInput
							value={fullName}
							onChangeText={setFullName}
							placeholder="Nome completo"
						/>
						<TextInput
							value={email}
							onChangeText={setEmail}
							placeholder="Email"
							autoCapitalize="none"
						/>
						<TextInput
							value={cpf}
							onChangeText={setCpf}
							placeholder="CPF"
							keyboardType="numeric"
						/>

						<Box gap="s8">
							<Button
								title="Processar pontos"
								variant="secondary"
								disabled={!formIsValid}
								onPress={handleNavigateToStampEarnScreen}
							/>
						</Box>
					</Box>
				</Content>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
