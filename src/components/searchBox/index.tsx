import React from "react"
import '../../main.css'
import { BarSearch } from './barSearch'
import { ISearchBox } from '../../types'
const image = require('../../img/ecommerce.png')

export const SearchBox = ({ setData }: ISearchBox) => {
  return (
    <div className="box-main">
      <div>
      <img 
        className="img-logo"
        src={image} 
        alt="ecommerce"
        width={46} 
      />
      </div>
      <BarSearch setData={setData}/>
      <div>
      </div>
    </div>
  )
}