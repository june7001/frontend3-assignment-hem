import { useState } from 'react';

function AddItem() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [room, setRoom] = useState('');
    const [imgLink, setImgLink] = useState('');
    const [price, setPrice] = useState(0);


    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const newItem = { id, name, brand, room, imgLink, price };
        console.log(newItem);

        const res = await fetch('http://localhost:3001/items', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        });

        if(res.ok) {
            setId(0);
            setName('');
            setBrand('');
            setRoom('');
            setImgLink('');
            setPrice(0);
        }
    } 

    return (
        <form className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white" onSubmit={handleSubmit}>
 




    <div className="w-full px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="id"
      >
        ID
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        type="number"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </div>





    <div className="w-full px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>






  
    <div className="w-full px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="brand"
      >
        Brand
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        type="text"
        id="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      </div>





        <div className="w-full px-3 mb-6 md:mb-0">
        <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="room"
        >   
            Room
        </label>
        <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
        />
        </div>





        <div className="w-full px-3 mb-6 md:mb-0">
        <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="imgLink" 
        > 
            Image Link
        </label>
        <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="imgLink"
            value={imgLink}
            onChange={(e) => setImgLink(e.target.value)}
        />  
        </div>




        <div className="w-full px-3 mb-6 md:mb-0">
        <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="price"
        >
            Price
        </label>
        <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value, 10))}
        />
        </div>



        
        <div className="flex justify-center">
        <button
            className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
        >
            Add Item
        </button>

      </div>

        

    
        </form>
    );
}

export default AddItem;
