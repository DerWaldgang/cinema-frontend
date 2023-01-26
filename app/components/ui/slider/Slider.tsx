import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import { useSlider } from '@/hooks/useSlider'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { isNext, isPrev, isSlideIn, handleArrowClick, index } = useSlider(
		slides.length
	)
	return (
		<div className={styles.slider}>
			{isPrev && (
				<SlideArrow
					variant="left"
					clickHanlder={() => handleArrowClick('prev')}
				/>
			)}
			<CSSTransition
				in={isSlideIn}
				classNames="slide-animation"
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
            
			{isNext && (
				<SlideArrow
					variant="right"
					clickHanlder={() => handleArrowClick('next')}
				/>
			)}
		</div>
	)
}

export default Slider
