import Image from 'next/image'
import { FC } from 'react'
import { ICatalog } from './catalogs.interface'

const CatalogsImage: FC<{collection: ICatalog}> = ({collection: {image, title}}) => {

    return <Image alt={title} draggable={false} src={image} width={100} height={80} className='h-full w-full'/> 
}

export default CatalogsImage