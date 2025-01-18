export function formatValueToCurrency(value: string | number): string {
	const valueToNumber =
		typeof value === 'string' ? Number(value.replace(',', '.')) : value || 0

	if (Number.isNaN(valueToNumber)) {
		return 'R$ 0,00'
	}

	return valueToNumber.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	})
}
