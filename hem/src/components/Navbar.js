import React from "react";
import OrderByPrice from "./OrderByPrice";

function Navbar({ itemlist, setItemlist }) {
    const handleFilter = async event => {
      const response = await fetch("http://localhost:3001/items");
      const items = await response.json();
      const filteredItems = items.filter(item => {
        return item.room === event.target.value;
      });
      setItemlist(filteredItems);
    };

return (
    <nav className="flex justify-center">
    <button className="mx-4  hover:font-bold focus:font-bold focus:shadow-outline" value="Vardagsrum" onClick={handleFilter}>Vardagsrum</button>
    <button className="mx-4  hover:font-bold focus:font-bold focus:shadow-outline" value="Kök" onClick={handleFilter}>Kök</button>
    <button className="mx-4  hover:font-bold focus:font-bold focus:shadow-outline" value="Sovrum" onClick={handleFilter}>Sovrum</button>
    <OrderByPrice itemlist={itemlist} setItemlist={setItemlist} />
  </nav>
);
}

export default Navbar;