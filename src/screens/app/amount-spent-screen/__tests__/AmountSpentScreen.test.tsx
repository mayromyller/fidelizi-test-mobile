import React from 'react'

import {
	parseCurrencyToNumber,
	useAuthSignOut,
	useCalculateStamp,
	useGetUserPersisted,
	useUserService
} from '@/features'
import { act, fireEvent, render } from 'test-utils'

import { AmountSpentScreen } from '../AmountSpentScreen'

jest.mock('@/features', () => ({
	useCalculateStamp: jest.fn(),
	useGetUserPersisted: jest.fn(),
	useAuthSignOut: jest.fn(() => ({ signOut: jest.fn() })),
	useUserService: jest.fn(),
	parseCurrencyToNumber: jest.fn()
}))

const mockNavigation = {
	navigate: jest.fn(),
	goBack: jest.fn()
}

beforeEach(() => {
	jest.useFakeTimers()
	;(useGetUserPersisted as jest.Mock).mockReturnValue({
		cpf: '123.456.789-00'
	})
	;(useUserService as jest.Mock).mockReturnValue({
		removeUser: jest.fn()
	})
})

afterEach(() => {
	jest.useRealTimers()
})

describe('AmountSpentScreen', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should render correctly', () => {
		render(<AmountSpentScreen navigation={{} as any} route={{} as any} />)
	})

	it('should disabled "Lançar pontos" button when value is less than 20', () => {
		const { getByTestId } = render(
			<AmountSpentScreen navigation={{} as any} route={{} as any} />
		)
		;(parseCurrencyToNumber as jest.Mock).mockReturnValue(10)

		act(() => {
			fireEvent.changeText(getByTestId('spent-input'), '10')
		})

		const button = getByTestId('button-spend')

		expect(button.props.accessibilityState.disabled).toBeTruthy()
	})

	it('should enable "Lançar pontos" button when value is greater than or equal to 20', () => {
		const { getByTestId, getByPlaceholderText } = render(
			<AmountSpentScreen navigation={{} as any} route={{} as any} />
		)
		;(parseCurrencyToNumber as jest.Mock).mockReturnValue(25)
		act(() => {
			fireEvent.changeText(getByPlaceholderText('R$ 0,00'), '25')
		})

		const button = getByTestId('button-spend')

		expect(button.props.accessibilityState.disabled).toBeFalsy()
	})

	it('should navigate to StampEarnScreen when user has CPF', () => {
		;(useCalculateStamp as jest.Mock).mockImplementation((value: number) => {
			return Math.floor(value / 20)
		})

		const { getByTestId, getByPlaceholderText } = render(
			<AmountSpentScreen navigation={mockNavigation as any} route={{} as any} />
		)
		;(parseCurrencyToNumber as jest.Mock).mockReturnValue(25)

		act(() => {
			fireEvent.changeText(getByPlaceholderText('R$ 0,00'), '25')
		})

		act(() => {
			fireEvent.press(getByTestId('button-spend'))
		})

		expect(mockNavigation.navigate).toHaveBeenCalledWith('StampEarnScreen', {
			value: 25,
			totalStamps: 1
		})
	})

	it('should navigate to ContactUserScreen when user does not have CPF', () => {
		;(useGetUserPersisted as jest.Mock).mockReturnValue({
			cpf: undefined
		})

		const { getByTestId, getByPlaceholderText } = render(
			<AmountSpentScreen navigation={mockNavigation as any} route={{} as any} />
		)
		;(parseCurrencyToNumber as jest.Mock).mockReturnValue(25)

		act(() => {
			fireEvent.changeText(getByPlaceholderText('R$ 0,00'), '25')
		})

		act(() => {
			fireEvent.press(getByTestId('button-spend'))
		})

		expect(mockNavigation.navigate).toHaveBeenCalledWith('ContactUserScreen', {
			value: 25
		})
	})

	it('should call signOut when "Desconectar" button is pressed', () => {
		const mockSignOut = jest.fn()
		;(useAuthSignOut as jest.Mock).mockReturnValue({
			signOut: mockSignOut
		})

		const { getByText } = render(
			<AmountSpentScreen navigation={{} as any} route={{} as any} />
		)

		act(() => {
			fireEvent.press(getByText('Desconectar'))
		})

		expect(mockSignOut).toHaveBeenCalled()
	})
})
