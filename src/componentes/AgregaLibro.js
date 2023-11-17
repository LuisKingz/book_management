import React from 'react'
import FormularioDeLibro from './FormularioDeLibro';

export const AgregaLibro = () => {

    const handleOnSubmit = (libro) => {
        console.log(libro)
    }

  return (
    <>
        <FormularioDeLibro onSubmit={handleOnSubmit} />
    </>
  )
}
