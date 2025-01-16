export function useCalculateStamp(value: number): number {
	const minStampValue = 20
	const stamp = Math.floor(value / minStampValue)

	return stamp
}
