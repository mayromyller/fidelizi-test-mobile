import { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
	AppHeader,
	Box,
	Button,
	Content,
	PressableBox,
	TextInput
} from '@/components'
import type { Theme } from '@/theme'

import { XIcon } from '@/assets'
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
	const { totalStamps, value } = route.params

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
				totalStamps,
				value
			})
		}
	}

	function cancellingSpent() {
		navigation.navigate('HomeScreen')
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
					Component={
						<PressableBox testID="cancel-button" onPress={cancellingSpent}>
							<XIcon />
						</PressableBox>
					}
				/>
				<Content title="Complete o seu cadastro">
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
								testID="button-register"
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
