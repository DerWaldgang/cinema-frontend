import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

import { IInputFieldProps } from '../input-fields/input-field.interface'

export interface IOptions {
	value: string
	label: string
}

export interface ISelect extends IInputFieldProps {
	options: Options<IOptions>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
