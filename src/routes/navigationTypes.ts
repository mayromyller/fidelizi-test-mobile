import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { AppStackParamList } from './app/app.stack.routes'
import type { AuthStackParamList } from './auth/auth.stack.route'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AuthStackParamList, AppStackParamList {}
	}
}

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
	NativeStackScreenProps<AuthStackParamList, RouteName>

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, RouteName>
