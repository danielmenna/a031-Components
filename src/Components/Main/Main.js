import { DivPrincipal } from './style'
import { Nav } from '../Nav/Nav'
import { PainelVideos } from '../PainelDeVideo/PainelDeVideo'

export const ConteudoPrincipal = () => {
  return (
    <DivPrincipal>
      <Nav />
      <PainelVideos />
    </DivPrincipal>
  )
}
