import { forwardRef } from 'react'
import { IInputField } from './input-field.interface'
import cn from 'classnames'

import styles from './InputField.module.scss'

const InputField = forwardRef<HTMLInputElement, IInputField>(({placeholder, error, type = 'text', style, ...rest}, ref) => {

	return <div className={cn(styles.common , styles.input)} style={style}>
        <label>
            <span>{placeholder}</span>
            <input type={type} ref={ref} {...rest}/>
        </label>
        {error && <div className={styles.error}>{error.message}</div>}
    </div>
})

// InputField.displayName = 'InputField'

export default InputField
