import '../../__mocks__/zustand'

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock('react-native-safe-area-context', () => ({
	...mockSafeAreaContext,
	useSafeAreaInsets: jest.fn(() => mockSafeAreaContext.useSafeAreaInsets)
}))

jest.mock('@react-navigation/native', () => {
	const actualNav = jest.requireActual('@react-navigation/native')
	return {
		...actualNav,
		useNavigation: () => ({
			navigate: jest.fn()
		})
	}
})

jest.mock('@react-native-async-storage/async-storage', () =>
	require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)
