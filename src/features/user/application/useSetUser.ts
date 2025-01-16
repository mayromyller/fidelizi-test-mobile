import {
	useGetUserPersisted,
	useUserService
} from '../infra/userPersistService'
import type { UserService } from '../userTypes'

type UserToRegister = Omit<UserService['user'], 'phone' | 'password'>

export function useSetUser() {
	const user = useGetUserPersisted()

	const { setUser } = useUserService()

	function registerUser({ cpf, fullName, email }: UserToRegister) {
		setUser({
			...user,
			cpf,
			fullName,
			email
		})
	}

	return { registerUser }
}
