import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import DeleteItem from "../components/DeleteItem";

function SingleItem(params) {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getItem() {
            const response = await fetch(`http://localhost:3001/items/${id}`);
            const item = await response.json();
            setItem(item);
        }
        getItem();
    }, [id]);

    if (!item) {
        return <h1>Loading...</h1>
    }

    const { name, brand, room, imgLink, price } = item;

    return (
        <div className="flex flex-col items-center">
           
            {imgLink && (
                <img src={`/images/${imgLink}`} alt={name} className="w-full object-cover" />
            )}
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <h2 className="text-2xl font-medium text-gray-700">{brand}</h2>
            <h3 className="text-xl font-medium text-gray-600">{room}</h3>
            <h4 className="text-xl font-medium text-gray-800">{price}:-</h4>
            <DeleteItem item={item} />
        </div>
    );
}



export default SingleItem;


