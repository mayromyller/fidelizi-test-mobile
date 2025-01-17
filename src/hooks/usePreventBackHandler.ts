import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'

export function useBackHandler() {
	const isFocused = useIsFocused()

	useEffect(() => {
		if (!isFocused) return

		const onBackPress = () => {
			Alert.alert(
				'Sair do aplicativo',
				'Deseja sair do aplicativo?',
				[
					{
						text: 'Cancelar',
						onPress: () => {},
						style: 'cancel'
					},
					{ text: 'Sim, quero sair', onPress: () => BackHandler.exitApp() }
				],
				{ cancelable: false }
			)

			return true
		}

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			onBackPress
		)

		return () => backHandler.remove()
	}, [isFocused])
}
