import React from 'react'
import { InfosUsuario } from '../Components/InfosUsuario'

export const CardVideo = Props => {
  function reproduzVideo() {
    alert('O vídeo está sendo reproduzido')
  }

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={Props.capa} alt="" />
      <h4>{Props.titulo}</h4>
      <InfosUsuario icone={Props.icone} autor={Props.autor} />
    </div>
  )
}
