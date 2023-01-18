import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logoIMG from '@/assets/images/logo.svg'

const Logo = () => {
	return (
		<Link href={'/'} className="px-layout mb-10 block">
			<Image
				src={logoIMG}
				width={247}
				height={34}
				alt={'Next Cinema'}
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
