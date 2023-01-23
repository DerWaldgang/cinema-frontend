import { FC } from 'react'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import styles from './Select.module.scss'
import { IOptions, ISelect } from './select.interface'

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({
	placeholder,
	error,
	options,
	isLoading,
	isMulti,
	field,
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOptions, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOptions[]).map((item: IOptions) => item.value)
				: (newValue as IOptions).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value?.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value[0])
		} else {
			return isMulti ? [] : ''
		}
	}

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					placeholder=""
					options={options}
					isMulti={isMulti}
					value={getValue()}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}

export default Select
