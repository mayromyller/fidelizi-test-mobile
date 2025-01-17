import React from 'react'

import { useGetUserPersisted, useStampService } from '@/features'
import { theme } from '@/theme'
import { fireEvent, render } from 'test-utils'

import { StampEarnScreen } from '../StampEarnScreen'

jest.mock('@/features', () => ({
	useGetUserPersisted: jest.fn(),
	useStampService: jest.fn()
}))

const mockNavigation = {
	navigate: jest.fn()
}

const mockRoute = {
	params: {
		totalStamps: 5,
		value: 100
	}
}

const mockSetStamps = jest.fn()

beforeEach(() => {
	;(useGetUserPersisted as jest.Mock).mockReturnValue({
		cpf: '123.456.789-00',
		fullName: 'John Doe'
	})
	;(useStampService as jest.Mock).mockReturnValue({
		setStamps: mockSetStamps,
		stamps: 0
	})
})

afterEach(() => {
	jest.clearAllMocks()
})

describe('StampEarnScreen', () => {
	it('should render the component correctly', () => {
		const { getByText, getAllByTestId } = render(
			<StampEarnScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		expect(getByText(/john doe/i)).toBeTruthy()
		expect(getByText(/123\.456\.789\-00/i)).toBeTruthy()

		const stamps = getAllByTestId(/stamp-/i)
		expect(stamps.length).toBe(11)
	})

	it('should render collected and uncollected stamps correctly', () => {
		const { getAllByTestId } = render(
			<StampEarnScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		const stamps = getAllByTestId(/stamp-/i)
		expect(stamps[0]).toHaveStyle({ backgroundColor: theme.colors.purple200 })
		expect(stamps[5]).toHaveStyle({ backgroundColor: theme.colors.white200 })
	})

	it('should render the gift as collected when all stamps are collected', () => {
		const { getByTestId } = render(
			<StampEarnScreen
				navigation={mockNavigation as any}
				route={{ params: { totalStamps: 12, value: 100 } } as any}
			/>
		)

		const gift = getByTestId('gift')
		expect(gift).toHaveStyle({ backgroundColor: theme.colors.purple200 })
	})

	it('should navigate to PurchaseDetailsScreen when "Ver detalhes da compra" button is pressed', async () => {
		const { getByText } = render(
			<StampEarnScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		const button = getByText(/ver detalhes da compra/i)
		fireEvent.press(button)

		expect(mockNavigation.navigate).toHaveBeenCalledWith(
			'PurchaseDetailsScreen',
			{
				value: 100
			}
		)
	})

	it('should navigate to HomeScreen and update stamps when "Finalizar" button is pressed', async () => {
		const { getByText } = render(
			<StampEarnScreen
				navigation={mockNavigation as any}
				route={mockRoute as any}
			/>
		)

		const button = getByText(/finalizar/i)

		fireEvent.press(button)

		expect(mockSetStamps).toHaveBeenCalledWith(mockRoute.params.totalStamps)

		expect(mockNavigation.navigate).toHaveBeenCalledWith('HomeScreen')
	})
})
