import React, { useState } from 'react'

import { EyeClosedIcon, EyeIcon } from '@/assets'
import { PressableBox } from '../box/box'
import { TextInput, type TextInputProps } from '../text-input/TextInput'

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput(props: PasswordInputProps) {
	const [isSecureTextEntry, setSecureTextEntry] = useState(true)

	function toggleSecureTextEntry() {
		setSecureTextEntry((prev) => !prev)
	}

	return (
		<TextInput
			secureTextEntry={isSecureTextEntry}
			{...props}
			RightComponent={
				isSecureTextEntry ? (
					<PressableBox onPress={toggleSecureTextEntry} hitSlop={10}>
						<EyeClosedIcon color="gray300" />
					</PressableBox>
				) : (
					<PressableBox onPress={toggleSecureTextEntry} hitSlop={10}>
						<EyeIcon color="gray300" />
					</PressableBox>
				)
			}
		/>
	)
}
