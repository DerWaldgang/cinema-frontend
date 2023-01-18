import { FC } from 'react'
import { IButton } from './button.interface'
import cn from 'classnames'

import styles from './Button.module.scss' 

const Buttons: FC<IButton> = ({children, className, ...rest}) => {

    return <button className={cn(styles.button, className)} {...rest}>{children}</button>
}

export default Buttons