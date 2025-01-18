import React from 'react'

import { useAuthSignIn } from '@/features'
import { fireEvent, render } from 'test-utils'

import { SignInScreen } from '../SignInScreen'

jest.mock('@/features', () => ({
	useAuthSignIn: jest.fn()
}))

const mockSignIn = jest.fn()

beforeEach(() => {
	;(useAuthSignIn as jest.Mock).mockReturnValue({
		signIn: mockSignIn
	})
})

afterEach(() => {
	jest.clearAllMocks()
})

describe('SignInScreen', () => {
	it('should render the component correctly', () => {
		const { getByText, getByPlaceholderText, getByTestId } = render(
			<SignInScreen />
		)

		expect(getByPlaceholderText(/nome@email.com/i)).toBeTruthy()
		expect(getByTestId('password-input')).toBeTruthy()

		expect(getByText(/login/i)).toBeTruthy()
	})

	it('should update email and password fields correctly', () => {
		const { getByPlaceholderText, getByTestId } = render(<SignInScreen />)

		const emailInput = getByPlaceholderText(/nome@email.com/i)
		const passwordInput = getByTestId('password-input')

		fireEvent.changeText(emailInput, 'test@example.com')
		expect(emailInput.props.value).toBe('test@example.com')

		fireEvent.changeText(passwordInput, 'password123')
		expect(passwordInput.props.value).toBe('password123')
	})

	it('should call signIn function when login button is pressed', () => {
		const { getByText, getByPlaceholderText, getByTestId } = render(
			<SignInScreen />
		)

		const emailInput = getByPlaceholderText(/nome@email.com/i)
		const passwordInput = getByTestId('password-input')
		const loginButton = getByText(/login/i)

		fireEvent.changeText(emailInput, 'test@example.com')
		fireEvent.changeText(passwordInput, 'password123')

		fireEvent.press(loginButton)

		expect(mockSignIn).toHaveBeenCalledWith({
			email: 'test@example.com',
			password: 'password123'
		})
	})

	it('should toggle password visibility when the eye icon is pressed', () => {
		const { getByTestId } = render(<SignInScreen />)

		const passwordInput = getByTestId('password-input')
		const toggleButton = getByTestId('toggle-password-visibility')

		expect(passwordInput.props.secureTextEntry).toBe(true)

		fireEvent.press(toggleButton)
		expect(passwordInput.props.secureTextEntry).toBe(false)

		fireEvent.press(toggleButton)
		expect(passwordInput.props.secureTextEntry).toBe(true)
	})
})
