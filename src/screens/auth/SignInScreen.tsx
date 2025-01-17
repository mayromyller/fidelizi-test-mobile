import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Box, Button, PasswordInput, Text, TextInput } from '@/components'
import { useAuthSignIn } from '@/features'

export function SignInScreen() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { signIn } = useAuthSignIn()

	function handleSignIn() {
		signIn({ email, password })
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Box
				pt="s60"
				paddingHorizontal="s32"
				backgroundColor="background"
				flex={1}
			>
				<Text fontFamily="bold" preset="title">
					Meu programa de {'\n'}
					fidelidade
				</Text>

				<Box mt="s60" gap="s32">
					<TextInput
						label="Email ou seu nome de usuário"
						placeholder="nome@email.com"
						autoCapitalize="none"
						value={email}
						onChangeText={setEmail}
					/>

					<PasswordInput
						testID="password-input"
						label="Senha"
						autoCapitalize="none"
						value={password}
						onChangeText={setPassword}
					/>

					<Button title="Login" variant="secondary" onPress={handleSignIn} />
				</Box>
			</Box>
		</SafeAreaView>
	)
}
