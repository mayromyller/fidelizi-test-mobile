import { parseCurrencyToNumber } from '../parseCurrencyToNumber'

describe('parseCurrencyToNumber', () => {
	it('should return 0 for empty or undefined input', () => {
		expect(parseCurrencyToNumber('')).toBe(0)
		expect(parseCurrencyToNumber(undefined as any)).toBe(0)
	})

	it('should parse currency with comma as decimal separator', () => {
		expect(parseCurrencyToNumber('R$ 1.234,56')).toBe(1234.56)
		expect(parseCurrencyToNumber('1.234,56')).toBe(1234.56)
		expect(parseCurrencyToNumber('1234,56')).toBe(1234.56)
	})

	it('should parse currency with dot as decimal separator', () => {
		expect(parseCurrencyToNumber('R$ 1.234,56')).toBe(1234.56)
		expect(parseCurrencyToNumber('1.234,56')).toBe(1234.56)
		expect(parseCurrencyToNumber('1234.56')).toBe(1234.56)
	})

	it('should handle currency without thousand separators', () => {
		expect(parseCurrencyToNumber('R$ 1234.56')).toBe(1234.56)
		expect(parseCurrencyToNumber('1234.56')).toBe(1234.56)
		expect(parseCurrencyToNumber('1234,56')).toBe(1234.56)
	})

	it('should handle currency with only thousand separators', () => {
		expect(parseCurrencyToNumber('R$ 1.234')).toBe(1.234)
		expect(parseCurrencyToNumber('1.234')).toBe(1.234)
		expect(parseCurrencyToNumber('1,234')).toBe(1.234)
	})

	it('should handle currency with only decimal part', () => {
		expect(parseCurrencyToNumber('R$ 0.56')).toBe(0.56)
		expect(parseCurrencyToNumber('0.56')).toBe(0.56)
		expect(parseCurrencyToNumber('0,56')).toBe(0.56)
	})

	it('should handle currency with only integer part', () => {
		expect(parseCurrencyToNumber('R$ 1234')).toBe(1234)
		expect(parseCurrencyToNumber('1234')).toBe(1234)
	})

	it('should handle currency with spaces', () => {
		expect(parseCurrencyToNumber('R$ 1 234.56')).toBe(1234.56)
		expect(parseCurrencyToNumber('1 234.56')).toBe(1234.56)
		expect(parseCurrencyToNumber('1 234,56')).toBe(1234.56)
	})
})
