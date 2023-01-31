import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logoIMG from '@/assets/images/software-cinema.png'

const Logo = () => {
	return (
		<Link href={'/'} className="px-5 mb-10 block">
			<Image
				src={logoIMG}
				width={100}
				height={50}
				alt={'Next Cinema'}
				draggable={false}
				className='w-full h-11'
			/>
		</Link>
	)
}

export default Logo
