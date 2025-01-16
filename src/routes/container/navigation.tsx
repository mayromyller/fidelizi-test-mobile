import { useAuthContext } from '@/context'
import { NavigationContainer } from '@react-navigation/native'
import { AppStackRoutes } from '../app/app.stack.routes'
import { AuthStackRoutes } from '../auth/auth.stack.route'

export function NavigationRouter() {
	const { isAuthenticated } = useAuthContext()

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppStackRoutes /> : <AuthStackRoutes />}
		</NavigationContainer>
	)
}
