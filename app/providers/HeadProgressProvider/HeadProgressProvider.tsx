import NextNProgress from 'nextjs-progressbar'

import { ACCENT_COLOR } from '@/config/constants.config'
import Head from 'next/head'
import FavIcons from './FavIcons'

type Props = {
	children: React.ReactNode
}

const HeadProgressProvider = ({ children }: Props) => {

	return (
		<>
			<NextNProgress
				color={ACCENT_COLOR}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
            <Head>
                <meta charSet='UTF-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5.0'/>
                <FavIcons />

                <meta name='theme-color' content={'#18181E'}/>
                <meta name='msapplication-navbutton-color'  content={'#18181E'}/>
                <meta name='apple-mobile-web-app-status-bar-style'  content={'#18181E'}/>
            </Head>
			{children}
		</>
	)
}

export default HeadProgressProvider
