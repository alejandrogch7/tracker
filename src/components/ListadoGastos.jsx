import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados }) => {
  return (
    <div className='listado-gastos contenedor'>
      

      {filtro ? (
        <>
          <h2>{gastos.length ? 'Expenses' : 'There is no expenses on the list yet'}</h2>
          {gastosFiltrados.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>

      ) : (
        
        <>
        {gastos.map(gasto => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
          />
        ))}
        </>
      )
      }
    </div>
  )
}

export default ListadoGastos