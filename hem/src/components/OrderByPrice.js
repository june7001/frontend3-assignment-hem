import { orderBy } from "lodash";
import React from 'react'


const SortByPrice = ({ itemlist, setItemlist }) => {
  const handleSort = (event) => {
    const sortBy = event.target.value
    let sortedItemlist
    if (sortBy === 'priceAsc') {
      sortedItemlist = orderBy(itemlist, ['price'], ['asc'])
    } else if (sortBy === 'priceDesc') {
      sortedItemlist = orderBy(itemlist, ['price'], ['desc'])
    } else {
      sortedItemlist = itemlist
    }
    setItemlist(sortedItemlist)
  }

  return (
    <div className="mb-4">
      
      <div className="mt-4 relative rounded-md shadow-sm">
        <select
          id="sort"
          onChange={handleSort}
          className="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        >
            <option value="default">Sortera</option>
          <option value="priceAsc">Pris: Stigande</option>
          <option value="priceDesc">Pris: Fallande</option>
        </select>
      </div>
    </div>
  )
}

export default SortByPrice