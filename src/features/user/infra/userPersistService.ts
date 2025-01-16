import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from '@/storage'

import type { UserService } from '../userTypes'

const USER_STORAGE_KEY = 'FIDELIZI_USER_STORAGE_KEY'
const STAMPS_STORAGE_KEY = 'FIDELIZI_STAMPS_STORAGE_KEY'

const useUserPersistStore = create<UserService>()(
	persist(
		(set, _) => ({
			user: null,
			stamps: 0,

			setUser: (user: UserService['user']) => {
				set({ user })
				storage.setItem(USER_STORAGE_KEY, user)
			},
			removeUser: () => {
				set({ user: null })
				storage.removeItem(USER_STORAGE_KEY)
			},

			setStamps: (stamps: UserService['stamps']) => {
				set({ stamps })

				storage.setItem(STAMPS_STORAGE_KEY, stamps)
			},
			removeStamps: () => {
				set({ stamps: 0 })
				storage.removeItem(STAMPS_STORAGE_KEY)
			}
		}),
		{
			name: '@UserPersistStore',
			storage: storage
		}
	)
)

export function useGetUserPersisted(): UserService['user'] {
	const user = useUserPersistStore((state) => state.user)

	return user
}

export function useUserService() {
	const setUser = useUserPersistStore((state) => state.setUser)
	const removeUser = useUserPersistStore((state) => state.removeUser)

	return {
		setUser,
		removeUser
	}
}

export function useStampService(): Omit<
	UserService,
	'user' | 'setUser' | 'removeUser'
> {
	const stamps = useUserPersistStore((state) => state.stamps)
	const setStamps = useUserPersistStore((state) => state.setStamps)
	const removeStamps = useUserPersistStore((state) => state.removeStamps)

	return {
		stamps,
		setStamps,
		removeStamps
	}
}
