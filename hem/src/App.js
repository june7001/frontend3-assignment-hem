import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import ItemList from './pages/ItemList';
import Header from './components/Header';
import SingleItem from './pages/SingleItem';



function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:id" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
