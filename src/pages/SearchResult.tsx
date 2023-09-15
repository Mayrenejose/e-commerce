import { ISearchResult } from '../types'
import { SearchBox } from '../components/searchBox'
import { ListProducts } from '../components/listProducts'

const SearchResult = ({ data, setData }: ISearchResult) => {
    return (
      <>
        <div>
          <SearchBox setData={setData}/>
        </div>

        <div>
          <ListProducts data={data}/>
        </div>
      </>
  )
}
export default SearchResult