import React from "react";

function DeleteItem({ item, setItemlist }) {
  const handleDelete = async () => {
    if (item) {
      const response = await fetch(`http://localhost:3001/items/${item.id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setItemlist(data);
    }
  };

  return (
    <div>
      <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteItem;