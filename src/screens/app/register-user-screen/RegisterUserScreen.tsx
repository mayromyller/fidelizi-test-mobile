import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppHeader, Box, Button, Content, TextInput } from '@/components'
import type { Theme } from '@/theme'

export function RegisterUserScreen() {
	const { colors } = useTheme<Theme>()
	const { top } = useSafeAreaInsets()

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
				<Content title="Qual o WhatsApp do cliente?">
					<Box gap="s32">
						<TextInput placeholder="Nome completo" />
						<TextInput placeholder="Email" />
						<TextInput placeholder="CPF" keyboardType="numeric" />

						<Box gap="s8">
							<Button title="Processar pontos" variant="secondary" />
						</Box>
					</Box>
				</Content>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
