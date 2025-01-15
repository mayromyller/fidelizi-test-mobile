import { ThemeProvider } from '@shopify/restyle'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavigationRouter } from '@/routes'
import { theme } from '@/theme'

import {
	Nunito_300Light,
	Nunito_400Regular,
	Nunito_500Medium,
	Nunito_600SemiBold,
	Nunito_700Bold,
	useFonts
} from '@expo-google-fonts/nunito'

export default function App() {
	const [fontsLoaded, error] = useFonts({
		Nunito_300Light,
		Nunito_400Regular,
		Nunito_500Medium,
		Nunito_600SemiBold,
		Nunito_700Bold
	})

	useEffect(() => {
		if (fontsLoaded || error) {
			SplashScreen.hideAsync()
		}
	}, [fontsLoaded, error])

	if (!fontsLoaded && !error) {
		return null
	}

	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<NavigationRouter />
			</ThemeProvider>
		</SafeAreaProvider>
	)
}
