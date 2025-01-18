import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
	AmountSpentScreen,
	ContactUserScreen,
	HomeScreen,
	PurchaseDetailsScreen,
	RegisterUserScreen,
	StampEarnScreen
} from '@/screens'

export type AppStackParamList = {
	HomeScreen: undefined
	AmountSpentScreen: undefined
	ContactUserScreen: {
		value: number
	}
	RegisterUserScreen: {
		totalStamps: number
		value: number
	}
	StampEarnScreen: {
		totalStamps: number
		value: number
	}
	PurchaseDetailsScreen: {
		value: number
	}
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStackRoutes() {
	return (
		<Stack.Navigator
			id={undefined}
			initialRouteName="HomeScreen"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="AmountSpentScreen" component={AmountSpentScreen} />
			<Stack.Screen name="ContactUserScreen" component={ContactUserScreen} />
			<Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} />
			<Stack.Screen name="StampEarnScreen" component={StampEarnScreen} />
			<Stack.Screen
				name="PurchaseDetailsScreen"
				component={PurchaseDetailsScreen}
			/>
		</Stack.Navigator>
	)
}
