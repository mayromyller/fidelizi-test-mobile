export function parseCurrencyToNumber(currency: string): number {
	if (currency) {
		const sanitized = currency.replace(/R\$|\s/g, '')

		const hasCommaAsDecimal = sanitized.includes(',')

		if (hasCommaAsDecimal) {
			const noThousandSeparators = sanitized.replace(/\./g, '')
			const normalized = noThousandSeparators.replace(',', '.')
			return Number.parseFloat(normalized)
		}

		const noThousandSeparators = sanitized.replace(/,/g, '')
		return Number.parseFloat(noThousandSeparators)
	}

	return 0
}
