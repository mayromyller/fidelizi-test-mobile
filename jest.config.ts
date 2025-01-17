import type { Config } from 'jest'

const config: Config = {
	verbose: true,
	preset: 'jest-expo',
	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)'
	],
	collectCoverageFrom: [
		'src/{components,screens,features}/**/*.{js,jsx,ts,tsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
		'!index'
	],
	setupFilesAfterEnv: ['<rootDir>/src/test/jest-setup.ts']
}

export default config
