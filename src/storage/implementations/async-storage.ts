import AsyncStorage from '@react-native-async-storage/async-storage'

import type { Storage } from '../storage'

export const asyncStorage: Storage = {
	getItem: async (key: string) => {
		const item = await AsyncStorage.getItem(key)
		if (item) {
			return JSON.parse(item)
		}
		return item
	},
	setItem: async (key, value) => {
		await AsyncStorage.setItem(key, JSON.stringify(value))
	},
	removeItem: async (key: string) => {
		await AsyncStorage.removeItem(key)
	}
}
