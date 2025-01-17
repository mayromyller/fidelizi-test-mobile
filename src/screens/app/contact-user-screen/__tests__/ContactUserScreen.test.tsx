import {
	formatValueToCurrency,
	useCalculateStamp,
	useSetPhone
} from '@/features'
import React from 'react'
import { act, fireEvent, render } from 'test-utils'
import { ContactUserScreen } from '../ContactUserScreen'

jest.mock('@/features', () => ({
	formatValueToCurrency: jest.fn((value) => `R$ ${value},00`),
	useCalculateStamp: jest.fn(),
	useSetPhone: jest.fn()
}))

const mockNavigation = {
	navigate: jest.fn()
}

const mockRoute = {
	params: {
		value: 100
	}
}

beforeEach(() => {
	jest.clearAllMocks()
	;(useCalculateStamp as jest.Mock).mockReturnValue(5)
	;(useSetPhone as jest.Mock).mockReturnValue({ setPhone: jest.fn() })
})

describe('ContactUserScreen', () => {
	it('should render correctly with initial state', () => {
		render(
			<ContactUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)
	})

	it('should display singular "Selo" when totalStamps is 1', () => {
		const stampValue = 1
		const mockRoute = {
			params: {
				value: 20
			}
		}
		const valueFormatted = formatValueToCurrency(mockRoute.params.value)
		;(useCalculateStamp as jest.Mock).mockReturnValue(stampValue)

		const { getByText } = render(
			<ContactUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)
		expect(getByText(`${stampValue} Selo (${valueFormatted})`)).toBeTruthy()
	})

	it('should display "Selos" when totalStamps is greater than 1', () => {
		const stampValue = 8
		const mockRoute = {
			params: {
				value: 160
			}
		}
		const valueFormatted = formatValueToCurrency(mockRoute.params.value)
		;(useCalculateStamp as jest.Mock).mockReturnValue(stampValue)

		const { getByText } = render(
			<ContactUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		expect(getByText(`${stampValue} Selos (${valueFormatted})`)).toBeTruthy()
	})

	it('should navigate to RegisterUserScreen with correct params when phone is provided', () => {
		const mockSetPhone = jest.fn()
		;(useSetPhone as jest.Mock).mockReturnValue({ setPhone: mockSetPhone })

		const { getByPlaceholderText, getByTestId } = render(
			<ContactUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		const button = getByTestId('button-next')

		act(() => {
			fireEvent.changeText(
				getByPlaceholderText('(99) 99999-9999'),
				'11999999999'
			)
		})

		act(() => {
			fireEvent.press(button)
		})

		expect(mockSetPhone).toHaveBeenCalledWith('11999999999')
		expect(mockNavigation.navigate).toHaveBeenCalledWith('RegisterUserScreen', {
			totalStamps: 5,
			value: 100
		})
	})

	it('should navigate to RegisterUserScreen without setting phone when no phone is provided', () => {
		const mockSetPhone = jest.fn()
		;(useSetPhone as jest.Mock).mockReturnValue({ setPhone: mockSetPhone })

		const { getByTestId } = render(
			<ContactUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		act(() => {
			fireEvent.press(getByTestId('button-next'))
		})

		expect(mockSetPhone).not.toHaveBeenCalled()
		expect(mockNavigation.navigate).toHaveBeenCalledWith('RegisterUserScreen', {
			totalStamps: 5,
			value: 100
		})
	})

	it('should navigate to HomeScreen when cancel button is pressed', () => {
		const { getByTestId } = render(
			<ContactUserScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		act(() => {
			fireEvent.press(getByTestId('pressable-box'))
		})

		expect(mockNavigation.navigate).toHaveBeenCalledWith('HomeScreen')
	})
})
