import logo from './logo.svg';
import './App.css';
import {} from 'react-bootstrap'
import Header from './Pages/Header'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/addproduct" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
