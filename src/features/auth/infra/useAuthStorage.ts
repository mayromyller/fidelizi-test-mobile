import { storage } from '@/storage'
import type { UserCredentials } from '../authTypes'

const STORAGE_KEY = '@FIDELIZI_TEST_MOBILE:AUTH'

async function getItem(): Promise<UserCredentials | null> {
	const userCredentials = await storage.getItem<UserCredentials>(STORAGE_KEY)

	return userCredentials
}

async function setItem(userCredentials: UserCredentials) {
	await storage.setItem(STORAGE_KEY, userCredentials)
}

async function removeItem() {
	await storage.removeItem(STORAGE_KEY)
}

export const useAuthStorage = {
	getItem,
	setItem,
	removeItem
}
