import { ISearchBox } from '../types'
import { SearchBox } from '../components/searchBox'

const InitialView = ({ setData }: ISearchBox) => {
  return (
    <div>
      <SearchBox setData={setData}/>
    </div>
  )
}

export default InitialView