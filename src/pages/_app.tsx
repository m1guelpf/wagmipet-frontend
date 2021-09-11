import '@/styles/tailwind.css'
import { FC } from 'react'
import { AppProps } from 'next/app'

const App: FC<AppProps> = ({ Component, pageProps }) => (
	<div className="flex items-center justify-center min-h-screen">
		<Component {...pageProps} />
		<div className="absolute bottom-4">
			<p className="text-xl">
				Created by{' '}
				<a className="underline" href="https://twitter.com/m1guelpf" target="_blank" rel="noreferrer">
					Miguel Piedrafita
				</a>
			</p>
		</div>
	</div>
)

export default App
