import react from 'react'
import icone from './img/user.png'
import { PainelDeVideos } from './style'
import { CardVideo } from '../CardVideo/CardVideo'

export const PainelVideos = () => {
  const titulo = 'Título do vídeo'
  const capa = 'https://picsum.photos/400/400?a=1'
  const autor = 'Arlindo Orlando'
  return (
    <PainelDeVideos>
      <CardVideo titulo={titulo} capa={capa} icone={icone} autor={autor} />
      <CardVideo titulo={titulo} capa={capa} icone={icone} autor={autor} />
      <CardVideo titulo={titulo} capa={capa} icone={icone} autor={autor} />
      <CardVideo titulo={titulo} capa={capa} icone={icone} autor={autor} />
      <CardVideo titulo={titulo} capa={capa} icone={icone} autor={autor} />
      <CardVideo titulo={titulo} capa={capa} icone={icone} autor={autor} />
      <CardVideo titulo={titulo} capa={capa} icone={icone} autor={autor} />
      <CardVideo titulo={titulo} capa={capa} icone={icone} autor={autor} />
    </PainelDeVideos>
  )
}
