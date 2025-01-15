import { NavigationContainer } from '@react-navigation/native'
import { AuthStackRoutes } from '../auth/auth.stack.route'

export function NavigationRouter() {
	return (
		<NavigationContainer>
			<AuthStackRoutes />
		</NavigationContainer>
	)
}
