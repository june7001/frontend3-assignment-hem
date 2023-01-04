import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className= "grid justify-center ">
        
        <Link to="/items" className="text-center text-4xl">ALLA PRODUKTER >></Link>

        <Link to="/add-item" className="text-center text-4xl">LÄGG TILL EN PRODUKT >></Link>
  </div>
    );
    }

export default Home;