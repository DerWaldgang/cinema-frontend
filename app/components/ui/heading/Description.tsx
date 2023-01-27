import parce from 'html-react-parser'
import { FC } from 'react'
import cn from 'classnames'
const Description: FC<{ text: string; className?: string }> = ({
	text,
	className = '',
}) => {
	return (
		<div className={cn('text-white font-light text-lg text-opacity-60', className)}>
			{parce(text)}
		</div>
	)
}

export default Description
