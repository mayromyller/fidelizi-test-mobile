import { Alert } from 'react-native'

import { useAuthContext } from '@/context'

import type { UserCredentials } from '../authTypes'

const testUser = {
	email: 'teste@fidelizi.com.br',
	password: 'password@123'
}

export function useAuthSignIn() {
	const { saveUserCredentials } = useAuthContext()

	const signIn = ({ email, password }: UserCredentials): boolean => {
		if (email === testUser.email && password === testUser.password) {
			const userCredentials: UserCredentials = {
				email: testUser.email,
				password: testUser.password
			}
			saveUserCredentials(userCredentials)

			return true
		}
		Alert.alert('Email ou senha inválidos')

		return false
	}

	return {
		signIn
	}
}
