import {BrowserRouter ,Link,Navigate, Route ,Routes} from 'react-router-dom';
import React, {Fragment} from 'react';
import './App.css';
import Login from './components/Login';
import Register  from './components/Registration';
import Dashboard from './components/Dashboard';
import Update from './components/crud/update';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/registration' element={<Register />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/update' element={<Update />}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
