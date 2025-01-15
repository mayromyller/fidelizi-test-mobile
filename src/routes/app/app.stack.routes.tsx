import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AmountSpentScreen } from '@/screens'

type AppStackParamList = {
	AmountSpentScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStackRoutes() {
	return (
		<Stack.Navigator
			id={undefined}
			initialRouteName="AmountSpentScreen"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="AmountSpentScreen" component={AmountSpentScreen} />
		</Stack.Navigator>
	)
}
