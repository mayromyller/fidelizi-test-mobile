import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AmountSpentScreen, ContactUserScreen } from '@/screens'

type AppStackParamList = {
	AmountSpentScreen: undefined
	ContactUserScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStackRoutes() {
	return (
		<Stack.Navigator
			id={undefined}
			initialRouteName="ContactUserScreen"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="AmountSpentScreen" component={AmountSpentScreen} />
			<Stack.Screen name="ContactUserScreen" component={ContactUserScreen} />
		</Stack.Navigator>
	)
}
