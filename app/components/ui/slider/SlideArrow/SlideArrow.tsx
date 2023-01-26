import { FC } from 'react'
import cn from 'classnames'
import styles from './SlideArrow.module.scss'
import MaterialIcon from '../../icon/MaterialIcon'

interface ISlideArrow {
    variant: 'left' | 'right' 
    clickHanlder: () => void

}

const SlideArrow: FC<ISlideArrow> = ({variant, clickHanlder}) => {

    const isLeft = variant === 'left'
    const isRight = variant === 'right'

	return <button onClick={clickHanlder} className={cn(styles.arrow, {
        [styles.left]: isLeft,
        [styles.right]: isRight,
        
    })}>
        <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'}/>
    </button>
}

export default SlideArrow
