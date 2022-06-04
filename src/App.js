import {BrowserRouter ,Link,Navigate, Route ,Routes} from 'react-router-dom';
import React, {Fragment} from 'react';
import './App.css';
import Login from './components/Login';
import Register  from './components/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/registration' element={<Register />}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
