import { DivPrincipal } from './style'
import { Nav } from '../Nav/Nav'
import { PainelVideos } from '../PainelDeVideo/PainelDeVideo'

export const ConteudoPrincipal = Props => {
  return (
    <DivPrincipal>
      <Nav />
      <PainelVideos
        titulo={Props.titulo}
        capa={Props.capa}
        icone={Props.icone}
        autor={Props.autor}
      />
    </DivPrincipal>
  )
}
