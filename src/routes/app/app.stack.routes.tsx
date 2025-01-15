import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
	AmountSpentScreen,
	ContactUserScreen,
	RegisterUserScreen
} from '@/screens'

type AppStackParamList = {
	AmountSpentScreen: undefined
	ContactUserScreen: undefined
	RegisterUserScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStackRoutes() {
	return (
		<Stack.Navigator
			id={undefined}
			initialRouteName="RegisterUserScreen"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="AmountSpentScreen" component={AmountSpentScreen} />
			<Stack.Screen name="ContactUserScreen" component={ContactUserScreen} />
			<Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} />
		</Stack.Navigator>
	)
}
