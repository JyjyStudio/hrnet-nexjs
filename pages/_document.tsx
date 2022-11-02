import { Html, Head, Main, NextScript } from 'next/document'
		
export default function Document() {
  return (
    <Html lang='fr'>
      	<Head>
	  		<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
			<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap" rel="stylesheet"/>
	  	</Head>
		<body>
			<Main />
			<NextScript />
		</body>
    </Html>
  )
}