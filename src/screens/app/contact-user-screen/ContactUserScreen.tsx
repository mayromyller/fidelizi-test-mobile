import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppHeader, Box, Button, Content, Text, TextInput } from '@/components'
import type { Theme } from '@/theme'

export function ContactUserScreen() {
	const { colors } = useTheme<Theme>()
	const { top } = useSafeAreaInsets()

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
						<TextInput placeholder="(99) 99999-9999" keyboardType="numeric" />
						<Text preset="body" fontFamily="bold" color="gray700">
							5 Selos (R$ 100,00)
						</Text>

						<Box gap="s8">
							<Button title="Próximo >" variant="secondary" />
						</Box>
					</Box>
				</Content>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
