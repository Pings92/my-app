import React from 'react'
import ClickSayHello
 from './ClickSayHello'

const Search = ({searchStr, searchhandler}) => {

  return (
    <>
      <input 
        type= "text"
        placeholder = "Chercher .."
        value={searchStr}
        onChange={searchhandler} />
    </>
  )
}

export default Search
