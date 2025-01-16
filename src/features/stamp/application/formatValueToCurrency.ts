export function formatValueToCurrency(value: string | number): string {
	const valueToNumber = typeof value === 'string' ? Number(value) : value

	return valueToNumber.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	})
}
