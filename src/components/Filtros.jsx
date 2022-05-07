import { useState, useEffect } from 'react'

const Filtros = ({filtro,setFiltro}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form action="">
                <div className='campo'>
                    <label>Filter expenses</label>
                    <select
                        value={filtro}
                        onChange={(e)=>setFiltro(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="housing">Housing</option>
                        <option value="expenses">Other expenses</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="suscriptions">Suscriptions</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros