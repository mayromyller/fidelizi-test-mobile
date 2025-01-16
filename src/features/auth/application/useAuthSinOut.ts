import { useAuthContext } from '@/context'

export function useAuthSignOut() {
	const { removeUserCredentials } = useAuthContext()

	const signOut = () => {
		removeUserCredentials()
	}

	return {
		signOut
	}
}
