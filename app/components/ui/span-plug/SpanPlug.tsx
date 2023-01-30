import { FC } from 'react'
import cn from 'classnames'
const SpanPlug: FC<{text: string, classname?:string}> = ({text, classname}) => {

    return <div className='flex items-center justify-center mb-5'>
        <span className={cn('font-semibold opacity-50 text-white uppercase', classname)}>{text}</span>
    </div>
}

export default SpanPlug