import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { ICatalog } from './catalogs.interface'
import styles from './Catalogs.module.scss' 
import CatalogsItem from './CatalogsItem'

const Catalogs: FC<{collections: ICatalog[]}> = ({collections}) => {

    return <Meta title='Discovery'>
    <Heading title='Discovery' className={styles.heading}/>
    <Description text='In this section you can find all genres on our site' className={styles.descripton}/>
    <section className={styles.collections}>
        {collections.map(collection => <CatalogsItem key={collection._id} collection={collection}/>)}
    </section>
    </Meta>
}

export default Catalogs