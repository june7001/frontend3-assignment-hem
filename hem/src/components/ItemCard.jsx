import React from 'react';
import { Link } from 'react-router-dom';




const ItemCard = ({ item }) => {
  const {  name, brand, room, imgLink, price } = item;
  return (
   

    <div className="item-card block w-full lg:w-1/4 md:w-1/3 sm:w-1/2 p-6  justify-between">
     <Link to={`/items/${item.id}`}>
    <div>
      {imgLink && (
        <img src={`/images/${imgLink}`} alt={name} className="w-full object-cover" />
      )}
      <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      <h3 className="text-sm font-medium text-gray-700">{brand}</h3>
      <h4 className="text-xs font-medium text-gray-600">{room}</h4>
      <h5 className="text-sm font-medium text-gray-800">{price}:-</h5>
    </div>
    </Link>
    </div>
    

    
  );
};

export default ItemCard;
