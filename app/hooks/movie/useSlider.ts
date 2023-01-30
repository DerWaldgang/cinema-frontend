import { useState } from 'react'

export const useSlider = (length: number) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isSlideIn, setIsSlideIn] = useState(true)

	const isExistNext = currentIndex + 1 < length
	const isExistPrev = currentIndex ? currentIndex - 1 < length : false

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
		setIsSlideIn(false)

		setTimeout(() => {
			setCurrentIndex(newIndex)
			setIsSlideIn(true)
		}, 300)
	}

    return {isSlideIn, index: currentIndex, handleArrowClick, isNext: isExistNext, isPrev: isExistPrev}
}
