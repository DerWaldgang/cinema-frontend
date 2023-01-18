import React from 'react'

import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Error404 = () => {
	return (
		<Meta title="Page not found 404">
			<div className='flex justify-center'>
				<Heading title="Error 404 - Page Not Found" />
			</div>
		</Meta>
	)
}

export default Error404
