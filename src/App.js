import React from 'react'
// import { CardVideo } from './Components/CardVideo/CardVideo'
import { GlobalStyle } from './GlobalStyle'
import { Cabecalho } from './Components/Header/Header'
import { ConteudoPrincipal } from './Components/Main/Main'
import { Rodape } from './Components/Footer/Footer'

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Cabecalho />
      <ConteudoPrincipal />
      <Rodape />
    </div>
  )
}
