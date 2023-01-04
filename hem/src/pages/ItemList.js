
import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/Navbar";


function ItemList() {
  const [itemlist, setItemlist] = useState([]);

  useEffect(function() {
    async function getItems() {
      const response = await fetch("http://localhost:3001/items");
      const items = await response.json();
      setItemlist(items);
    }
    getItems();
    
    }, []);

    return (
    <div>
            <Navbar itemlist={itemlist} setItemlist={setItemlist} />
        <div className="flex flex-wrap">
            {itemlist.map(item => <ItemCard key={item.id} item={item} /> 
            )}
        </div>
        </div>
    );
}

export default ItemList;
