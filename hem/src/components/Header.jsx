import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="flex items-center justify-center h-16">
        <Link to="/" >
      <img src="/logo.png" alt="Logo" className="h-8" />
      </Link>
            </header>
    );
}

export default Header;