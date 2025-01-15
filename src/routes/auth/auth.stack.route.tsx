import { SignInScreen } from '@/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type AuthStackParamList = {
	SignInScreen: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthStackRoutes() {
	return (
		<Stack.Navigator
			id={undefined}
			initialRouteName="SignInScreen"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="SignInScreen" component={SignInScreen} />
		</Stack.Navigator>
	)
}
