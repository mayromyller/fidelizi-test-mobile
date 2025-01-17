export function formatValueToCurrency(value: string | number): string {
	const valueToNumber = typeof value === 'string' ? Number(value) : value || 0

	return valueToNumber.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	})
}
