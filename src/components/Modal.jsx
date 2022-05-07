import React from 'react'
import { useState, useEffect } from 'react'
import Mensaje from './Mensaje '
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({ 
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto, 
  gastoEditar,
  setGastoEditar
  
  }) => {

  
  const [nombre,setNombre] = useState('')
  const [cantidad,setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje]=useState('')
  const [fecha, setFecha]=useState('')
  const [id,setId]=useState('')
  
  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  },[])

  const ocultarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault()
    if([nombre, cantidad, categoria].includes('')){
      setMensaje('All blanks must be filled')
      setTimeout(()=>{
        setMensaje('')
      },3000)
      return
    }
    guardarGasto({nombre,cantidad,categoria,id,fecha})
  }


  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          src={CerrarBtn}
          alt='cerrar Modal'
          onClick={ocultarModal} />
      </div>
      <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>{gastoEditar.nombre ? 'Edit expense info.':'Add new expense'}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        
        <div className='campo'>
          <label htmlFor="nombre">Name of the expense</label>
          <input 
            type="text"
            placeholder='Add the name of the expense'
            id='nombre'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        
        <div className='campo'>
          <label htmlFor="cantidad">Amount</label>
          <input 
            type="number"
            placeholder='Add the amount of the expense'
            id='cantidad'
            value={cantidad}
            onChange={e=>setCantidad(Number(e.target.value))} 
          />
        </div>

        <div className='campo'>
          <label htmlFor="categoria">Category</label>
          <select 
            id="categoria"
            value={categoria}
            onChange = { e => setCategoria(e.target.value)} 
            >
              <option value="">Select</option>
              <option value="savings">Savings</option>
              <option value="food">Food</option>
              <option value="housing">Housing</option>
              <option value="expenses">Other expenses</option>
              <option value="leisure">Leisure</option>
              <option value="health">Health</option>
              <option value="suscriptions">Suscriptions</option>
            </select>
        </div>
        <input 
          type="submit"
          value={gastoEditar.nombre ? 'Save the changes':'Add expense'}
        />
      </form>
    </div>
  )
}

export default Modal


