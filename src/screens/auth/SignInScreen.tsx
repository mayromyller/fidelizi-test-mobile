import { Box, Button, PasswordInput, Text, TextInput } from '@/components'
import { SafeAreaView } from 'react-native-safe-area-context'

export function SignInScreen() {
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
					/>

					<PasswordInput label="Senha" autoCapitalize="none" />

					<Button title="Login" variant="secondary" />
				</Box>
			</Box>
		</SafeAreaView>
	)
}
