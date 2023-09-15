import React, { useState } from "react"
import { SearchBox } from './components/searchBox'

function App() {
  const [data, setData] = useState<null | void>(null)
  console.log(data);
  
  
  return (
    <div>
      <header>
        <SearchBox setData={setData}/>
      </header>
    </div>
  )
}

export default App;
