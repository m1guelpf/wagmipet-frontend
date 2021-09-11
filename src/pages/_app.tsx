import { FC } from 'react'
import Head from 'next/head'
import '@/styles/tailwind.css'
import { AppProps } from 'next/app'

const meta = {
	title: 'A digital pet, on the blockchain',
	description: 'Adopt and take care of your very own $PET on the blockchain! Feed it, play with it, clean it and make sure it gets enough sleep.',
	url: 'https://ethpets.m1guelpf.me',
	image: '/images/card.jpg',
}

const App: FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>{meta.title}</title>
			<meta name="title" content={meta.title} />
			<meta name="description" content={meta.description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={meta.url} />
			<meta property="og:title" content={meta.title} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:image" content={meta.url + meta.image} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={meta.url} />
			<meta property="twitter:title" content={meta.title} />
			<meta property="twitter:description" content={meta.description} />
			<meta property="twitter:image" content={meta.url + meta.image} />
		</Head>
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
	</>
)

export default App
