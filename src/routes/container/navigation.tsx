import { NavigationContainer } from '@react-navigation/native'
import { AppStackRoutes } from '../app/app.stack.routes'
import { AuthStackRoutes } from '../auth/auth.stack.route'

export function NavigationRouter() {
	return (
		<NavigationContainer>
			<AppStackRoutes />
		</NavigationContainer>
	)
}
