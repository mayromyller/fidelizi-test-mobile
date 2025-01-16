import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
	AmountSpentScreen,
	ContactUserScreen,
	RegisterUserScreen,
	StampEarnScreen
} from '@/screens'

export type AppStackParamList = {
	AmountSpentScreen: undefined
	ContactUserScreen: {
		value: number
	}
	RegisterUserScreen: {
		totalStamps: number
	}
	StampEarnScreen: {
		totalStamps: number
	}
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
			<Stack.Screen name="ContactUserScreen" component={ContactUserScreen} />
			<Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} />
			<Stack.Screen name="StampEarnScreen" component={StampEarnScreen} />
		</Stack.Navigator>
	)
}
