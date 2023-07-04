import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RegisterPage from './component/RegisterPage';
import Login from './component/Login';
import Home from './component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
 
  return (
    <div className='Container'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
