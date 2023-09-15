import React, { useState } from "react"
import axios from 'axios'
import { ISearchBox } from '../../../types'
const magnifyingGlass = require('../../../img/magnifyingGlass.png')

export const BarSearch = ({ setData}: ISearchBox ) => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    const url = `http://localhost:3001/api/items?q=${value}`
    axios.get(url)
    .then((response) => {
        setData(response.data)
        setValue('')
    })
    .catch(() => {
        console.error('Error al obtener los datos')
    })
  }

  return (
    <div >
      <input
        className="input-search"
        type="text"
        placeholder="Busca tus productos aquí"
        value={value}
        onChange={handleChange}
      />
        <button className="input-btn">
          <img 
            src={magnifyingGlass} 
            alt="lupa" 
            width={25}
            onClick={handleClick}
          />
        </button>
    </div>
  )
}