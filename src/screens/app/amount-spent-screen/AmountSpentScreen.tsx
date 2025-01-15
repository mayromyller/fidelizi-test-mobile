import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { useTheme } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AppHeader, Box, Button, Content, Text, TextInput } from '@/components'
import type { Theme } from '@/theme'

export function AmountSpentScreen() {
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
				<Content title="Qual o valor gasto?">
					<Box gap="s32">
						<TextInput placeholder="R$ 0,00" />
						<Text preset="body" fontFamily="bold" color="gray700">
							*A cada visita = 1 selo
						</Text>
						<Text preset="body" fontFamily="bold" color="gray700">
							*Gasto mínio: R$ 20,00
						</Text>

						<Box gap="s8">
							<Button title="Lançar pontos" variant="primary" disabled />
							<Button title="Desconectar" variant="secondary" />
						</Box>
					</Box>
				</Content>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
