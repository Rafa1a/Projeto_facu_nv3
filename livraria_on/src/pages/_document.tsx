import { Html, Head, Main, NextScript } from 'next/document'
import { Menu } from './menu'
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      
      <body>
      <Menu />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
 