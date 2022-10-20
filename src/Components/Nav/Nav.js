import { MenuEstrutura, MenuBotoes } from './style'

export const Nav = () => {
  return (
    <MenuEstrutura>
      <ul>
        <MenuBotoes>Início</MenuBotoes>
        <MenuBotoes>Em alta</MenuBotoes>
        <MenuBotoes>Inscrições</MenuBotoes>
        <hr />
        <MenuBotoes>Originais</MenuBotoes>
        <MenuBotoes>Histórico</MenuBotoes>
      </ul>
    </MenuEstrutura>
  )
}
