import React from 'react'
import { InfosUsuario, ImgUsuario } from './style'

export const InfosUsuarios = Props => {
  return (
    <InfosUsuario>
      <ImgUsuario src={Props.icone} />
      <p>
        <strong>{Props.autor}</strong>
      </p>
    </InfosUsuario>
  )
}
