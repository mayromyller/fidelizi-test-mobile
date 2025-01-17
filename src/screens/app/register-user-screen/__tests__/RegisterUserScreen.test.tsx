import { act, fireEvent, waitFor } from '@testing-library/react-native'
import React from 'react'

import { RegisterUserScreen } from '../RegisterUserScreen'

import { useSetUser } from '@/features'
import { render } from 'test-utils'

jest.mock('@/features', () => ({
	useSetUser: jest.fn()
}))

const mockNavigation = {
	navigate: jest.fn()
}

const mockRoute = {
	params: {
		totalStamps: 0,
		value: 0
	}
}

beforeEach(() => {
	jest.useFakeTimers()
})

afterEach(() => {
	jest.useRealTimers()
})

const mockedUser = {
	fullName: 'John Doe',
	email: 'john.doe@example.com',
	cpf: '12345678900'
}

describe('RegisterUserScreen', () => {
	const mockRegisterUser = jest.fn()

	beforeEach(() => {
		;(useSetUser as jest.Mock).mockReturnValue({
			registerUser: mockRegisterUser
		})
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should render the component correctly', () => {
		const { getByPlaceholderText } = render(
			<RegisterUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		expect(getByPlaceholderText(/nome completo/i)).toBeTruthy()
		expect(getByPlaceholderText(/email/i)).toBeTruthy()
		expect(getByPlaceholderText(/cpf/i)).toBeTruthy()
	})

	it('should disable the button when the form is incomplete', () => {
		const { getByTestId } = render(
			<RegisterUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		const button = getByTestId('button-register')
		expect(button.props.accessibilityState.disabled).toBeTruthy()
	})

	it('should enable the button when the form is complete', async () => {
		const { getByPlaceholderText, getByTestId } = render(
			<RegisterUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)
		act(() => {
			fireEvent.changeText(
				getByPlaceholderText(/nome completo/i),
				mockedUser.fullName
			)
			fireEvent.changeText(getByPlaceholderText(/email/i), mockedUser.email)
			fireEvent.changeText(getByPlaceholderText(/cpf/i), mockedUser.cpf)
		})

		const button = getByTestId('button-register')
		await waitFor(() =>
			expect(button.props.accessibilityState.disabled).toBeFalsy()
		)
	})

	it('should navigate to StampEarnScreen when the form is valid and the button is pressed', async () => {
		const { getByPlaceholderText, getByText } = render(
			<RegisterUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		act(() => {
			fireEvent.changeText(
				getByPlaceholderText(/nome completo/i),
				mockedUser.fullName
			)
			fireEvent.changeText(getByPlaceholderText(/email/i), mockedUser.email)
			fireEvent.changeText(getByPlaceholderText(/cpf/i), mockedUser.cpf)
		})

		const button = getByText('Processar pontos')
		act(() => {
			fireEvent.press(button)
		})

		await waitFor(() => {
			expect(mockRegisterUser).toHaveBeenCalledWith(mockedUser)
		})

		expect(mockNavigation.navigate).toHaveBeenCalledWith('StampEarnScreen', {
			totalStamps: 0,
			value: 0
		})
	})

	it('should navigate to HomeScreen when the cancel button is pressed', async () => {
		const { getByTestId } = render(
			<RegisterUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		const cancelButton = getByTestId('cancel-button')
		act(() => {
			fireEvent.press(cancelButton)
		})

		expect(mockNavigation.navigate).toHaveBeenCalledWith('HomeScreen')
	})
})
