import {
	useGetUserPersisted,
	useUserService
} from '../infra/userPersistService'

export function useSetPhone() {
	const user = useGetUserPersisted()

	const { setUser } = useUserService()

	function setPhone(phone: string) {
		setUser({
			...user,
			phone
		})
	}

	return { setPhone }
}
