import { type UserCredentials, useAuthStorage } from '@/features'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({
	isAuthenticated: false,
	userCredentials: null,
	isLoading: false,
	saveUserCredentials: async (uc: UserCredentials) => {},
	removeUserCredentials: async () => {}
})

export function AuthContextProvider({
	children
}: React.PropsWithChildren<unknown>) {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [userCredentials, setUserCredentials] =
		useState<UserCredentials | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	async function startUserAuthentication() {
		try {
			const userCredentials = await useAuthStorage.getItem()

			if (userCredentials) {
				setIsAuthenticated(true)
				setUserCredentials(userCredentials)
			}
		} catch (error) {
			// handle error
		} finally {
			setIsLoading(false)
		}
	}

	async function saveUserCredentials(userCredentials: UserCredentials) {
		setIsLoading(true)

		await new Promise((resolve) => setTimeout(resolve, 2000))

		setIsLoading(false)
		useAuthStorage.setItem(userCredentials)
		setUserCredentials(userCredentials)
		setIsAuthenticated(true)
	}

	async function removeUserCredentials() {
		useAuthStorage.removeItem()
		setIsAuthenticated(false)
		setUserCredentials(null)
	}

	useEffect(() => {
		startUserAuthentication()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isLoading,
				isAuthenticated,
				userCredentials,
				saveUserCredentials,
				removeUserCredentials
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
