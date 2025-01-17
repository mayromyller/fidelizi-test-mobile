import { act, renderHook } from 'test-utils'

import type { UserService } from '../../userTypes'
import {
	useGetUserPersisted,
	useStampService,
	useUserPersistStore,
	useUserService
} from '../userPersistService'

const mockUser: UserService['user'] = {
	cpf: '123.456.789-00',
	fullName: 'John Doe',
	email: 'jhondo@email.com',
	password: 'password@123',
	phone: '99999999999'
}

beforeEach(() => {
	useUserPersistStore.setState({
		user: null,
		stamps: 0
	})
})

afterEach(() => {
	jest.clearAllMocks()
})

describe('useGetUserPersisted', () => {
	it('should return null when no user is set', () => {
		const { result } = renderHook(() => useGetUserPersisted())
		expect(result.current).toBeNull()
	})

	it('should return the user when a user is set', () => {
		useUserPersistStore.setState({
			user: mockUser
		})

		const { result } = renderHook(() => useGetUserPersisted())
		expect(result.current).toEqual(mockUser)
	})

	it('should remove the user correctly', () => {
		const { result } = renderHook(() => useUserService())

		useUserPersistStore.setState({
			user: mockUser
		})

		act(() => {
			result.current.removeUser()
		})

		expect(useUserPersistStore.getState().user).toBeNull()
	})

	it('should set the stamps correctly', () => {
		const { result } = renderHook(() => useStampService())

		act(() => {
			result.current.setStamps(5)
		})

		expect(useUserPersistStore.getState().stamps).toBe(5)
	})

	it('should remove the stamps correctly', () => {
		const { result } = renderHook(() => useStampService())

		act(() => {
			useUserPersistStore.setState({
				stamps: 10
			})
		})

		act(() => {
			result.current.removeStamps()
		})

		expect(useUserPersistStore.getState().stamps).toBe(0)
	})
})
