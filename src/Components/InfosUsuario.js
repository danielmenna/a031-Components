import React from 'react'
import Usuario from '../img/user.png'

export const InfosUsuario = () => {
  return (
    <section className="info-usurario">
      <img src={Usuario} className="img-usuario" />
      <p>
        <strong>Arlindo Orlando</strong>
      </p>
    </section>
  )
}
