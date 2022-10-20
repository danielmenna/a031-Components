import React from 'react'
import { InfosUsuarios } from '../InfosUsuario/InfosUsuario'
import { SecaoVideo, CapaVideo, TextoTitulo } from './style'

export const CardVideo = Props => {
  function reproduzVideo() {
    alert('O vídeo está sendo reproduzido')
  }

  return (
    <SecaoVideo onClick={reproduzVideo}>
      <CapaVideo src={Props.capa} alt="" />
      <TextoTitulo>{Props.titulo}</TextoTitulo>
      <InfosUsuarios icone={Props.icone} autor={Props.autor} />
    </SecaoVideo>
  )
}
