import type { Theme } from '@/theme'

export type IconType = {
	color: keyof Theme['colors']
	width?: number
	height?: number
}
