import { useState } from 'react'
import Mensaje from './Mensaje '

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto}) => {

    const [mensaje,setMensaje]=useState('')

    const handlePresupuesto = (e)=>{
        e.preventDefault()
        if(!(presupuesto) || (presupuesto)<0){
            setMensaje('Not a valid budget')
            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)

        console.log(presupuesto)
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form 
        onSubmit={handlePresupuesto}
        className='formulario'
        action="">
            <div className='campo'>
                <label htmlFor="">Define your budget</label>
                <input 
                type="number"
                className='nuevo-presupuesto'
                placeholder='Add your budget E.g.: $3000' 
                value={presupuesto}
                onChange={(e)=>setPresupuesto(Number(e.target.value))}
                />  
            </div>
            <input 
            value='Add'
            type="submit" />
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje> }
        </form>
    </div>
  )
}

export default NuevoPresupuesto