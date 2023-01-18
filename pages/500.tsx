import React from 'react'

import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Error500 = () => {
	return (
		<Meta title="Page not found 500">
			<div className="flex justify-center">
				<Heading title="Error 500 - An unknown server-side error occurred " />
			</div>
		</Meta>
	)
}

export default Error500
