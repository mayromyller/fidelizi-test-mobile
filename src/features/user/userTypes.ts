import type { UserCredentials } from '../auth'

type User = UserCredentials & {
	fullName: string
	email: string
	cpf: string
	phone: string
}

export type UserService = {
	user: User
	stamps: number
	setUser: (user: User) => void
	removeUser: () => void

	setStamps: (stamps: number) => void
	removeStamps: () => void
}
