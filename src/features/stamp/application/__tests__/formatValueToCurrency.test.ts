import { formatValueToCurrency } from '../formatValueToCurrency'

function normalizeString(str: string): string {
	return str.replace(/\u00A0/g, ' ').trim()
}

describe('formatValueToCurrency', () => {
	it('should format a string number to BRL currency', () => {
		const value = '1234.56'
		const formattedValue = formatValueToCurrency(value)
		expect(normalizeString(formattedValue)).toBe('R$ 1.234,56')
	})

	it('should format a number to BRL currency', () => {
		const value = 1234.56
		const formattedValue = formatValueToCurrency(value)
		expect(normalizeString(formattedValue)).toBe('R$ 1.234,56')
	})

	it('should return R$ 0,00 for invalid string input', () => {
		const value = 'invalid'
		const formattedValue = formatValueToCurrency(value)
		expect(normalizeString(formattedValue)).toBe('R$ 0,00')
	})

	it('should return R$ 0,00 for null input', () => {
		const value = null
		const formattedValue = formatValueToCurrency(value)
		expect(normalizeString(formattedValue)).toBe('R$ 0,00')
	})

	it('should return R$ 0,00 for undefined input', () => {
		const value = undefined
		const formattedValue = formatValueToCurrency(value)
		expect(normalizeString(formattedValue)).toBe('R$ 0,00')
	})
})
