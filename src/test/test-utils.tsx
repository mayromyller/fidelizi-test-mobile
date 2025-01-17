import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import { type RenderOptions, render } from '@testing-library/react-native'
import type React from 'react'

import { AuthContextProvider } from '@/context'
import { theme } from '@/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<SafeAreaProvider>
			<AuthContextProvider>
				<ThemeProvider theme={theme}>
					<NavigationContainer>{children}</NavigationContainer>
				</ThemeProvider>
			</AuthContextProvider>
		</SafeAreaProvider>
	)
}

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'

export { customRender as render }
