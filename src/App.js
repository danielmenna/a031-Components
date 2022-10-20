import React from 'react'
// import { CardVideo } from './Components/CardVideo/CardVideo'
import icone from './img/user.png'
import { GlobalStyle } from './GlobalStyle'
import { Cabecalho } from './Components/Header/Header'
import { ConteudoPrincipal } from './Components/Main/Main'
import { Rodape } from './Components/Footer/Footer'
import { Nav } from './Components/Nav/Nav'

export default function App() {
  const titulo = 'Título do vídeo'
  const capa = 'https://picsum.photos/400/400?a=1'
  const autor = 'Arlindo Orlando'
  return (
    <div>
      <GlobalStyle />
      <Cabecalho />
      <ConteudoPrincipal
        titulo={titulo}
        capa={capa}
        icone={icone}
        autor={autor}
      />
      <Rodape />
    </div>
  )
}
