import React from 'react'

import { act, fireEvent, render } from 'test-utils'

import { useStampService } from '@/features'
import { HomeScreen } from '../HomeScreen'

jest.mock('@/features', () => ({
	useStampService: jest.fn()
}))

const mockNavigation = {
	navigate: jest.fn()
}

describe('HomeScreen', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should render correctly when stamps are less than 12', () => {
		;(useStampService as jest.Mock).mockReturnValue({
			stamps: 5,
			removeStamps: jest.fn()
		})

		const { getByText } = render(
			<HomeScreen navigation={{} as any} route={{} as any} />
		)

		expect(
			getByText('Você ainda não possui pontos suficientes para resgatar.')
		).toBeTruthy()
		expect(getByText('Pontos conquistados: 5')).toBeTruthy()
	})

	it('should render correctly when stamps are greater than or equal to 12', () => {
		;(useStampService as jest.Mock).mockReturnValue({
			stamps: 15,
			removeStamps: jest.fn()
		})

		const { getByText } = render(
			<HomeScreen navigation={{} as any} route={{} as any} />
		)

		expect(
			getByText('Você já possui pontos suficientes para resgatar 1 presente')
		).toBeTruthy()
	})

	it('should show the "Regatar pontos" when stamps are less than 12', () => {
		;(useStampService as jest.Mock).mockReturnValue({
			stamps: 15,
			removeStamps: jest.fn()
		})

		const { getByText } = render(
			<HomeScreen navigation={{} as any} route={{} as any} />
		)

		expect(getByText('Regatar pontos')).toBeTruthy()
	})

	it('should call removeStamps when "Regatar pontos" button is pressed', () => {
		const mockRemoveStamps = jest.fn()
		;(useStampService as jest.Mock).mockReturnValue({
			stamps: 12,
			removeStamps: mockRemoveStamps
		})

		const { getByText } = render(
			<HomeScreen navigation={{} as any} route={{} as any} />
		)

		act(() => {
			fireEvent.press(getByText('Regatar pontos'))
		})

		expect(mockRemoveStamps).toHaveBeenCalled()
	})

	it('should navigate to AmountSpentScreen when "Lançar pontos" button is pressed', () => {
		;(useStampService as jest.Mock).mockReturnValue({
			stamps: 5,
			removeStamps: jest.fn()
		})

		const { getByText } = render(
			<HomeScreen navigation={mockNavigation as any} route={{} as any} />
		)

		act(() => {
			fireEvent.press(getByText('Lançar pontos'))
		})

		expect(mockNavigation.navigate).toHaveBeenCalledWith('AmountSpentScreen')
	})
})
