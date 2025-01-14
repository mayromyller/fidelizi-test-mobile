import { ThemeProvider } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'

import { Box, Button } from '@/components'
import { theme } from '@/theme'

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				flex={1}
				backgroundColor="white"
				alignItems="center"
				justifyContent="center"
			>
				<Text>Hello Theme</Text>
				<Button />
				<StatusBar style="auto" />
			</Box>
		</ThemeProvider>
	)
}
