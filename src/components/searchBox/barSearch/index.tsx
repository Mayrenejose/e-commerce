import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ISearchBox } from '../../../types'
const magnifyingGlass = require('../../../img/magnifyingGlass.png')

export const BarSearch = ({ setData}: ISearchBox ) => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [btnDisable, setBtnDisable] = useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setValue(query)
    if(query.length >= 2) {
      setBtnDisable(false)
    }
  }
  const handleClick = () => {
    navigate(`/items?search=${value}`)
    const url = `http://localhost:3001/api/items?q=${value}`
    axios.get(url)
    .then((response) => {
        setData(response.data)
        setValue('')
    })
    .catch(() => {
        console.error('Error al obtener los datos')
    });
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

      <button className="input-btn" disabled={btnDisable}>
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