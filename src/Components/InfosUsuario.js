import React from 'react'
import Usuario from '../img/user.png'

export const InfosUsuario = Props => {
  return (
    <section className="info-usurario">
      <img src={Props.icone} className="img-usuario" />
      <p>
        <strong>{Props.autor}</strong>
      </p>
    </section>
  )
}
