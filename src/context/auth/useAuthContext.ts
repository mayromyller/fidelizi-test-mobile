import { useContext } from 'react'

import { AuthContext } from './AuthContextProvider'

export function useAuthContext() {
	const authContext = useContext(AuthContext)

	return authContext
}
