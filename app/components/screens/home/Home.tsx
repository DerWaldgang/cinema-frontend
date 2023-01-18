import { FC } from 'react'



import { IHome } from './home.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { toastr } from 'react-redux-toastr'

const Home: FC = () => {
	return (
		<Meta title='Watch movies online NextJS'
		description='Watch MovieApp movies and streams rigth to your browser.'>
			<Heading title='Watch movies online.' className='text-gray-300 mb-8 text-xl'/>


			<button onClick={() => toastr.success('auth', 'Success')} className='text-white'>toast</button>

		</Meta>
	)
}

export default Home
