import { ISearchBox } from '../types'
import { SearchBox } from '../components/searchBox'

const ProductDetail = ({ setData }: ISearchBox) => {
  return (
    <div>
      <SearchBox setData={setData}/>
    </div>
  )
}
  
export default ProductDetail