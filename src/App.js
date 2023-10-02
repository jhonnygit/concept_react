import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Inicio from './components/Inicio';
import Bla from './components/Bla';
import Parametros from './components/Parametros';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>          
          <Route path="/bla" element={<Bla />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users" element={<Parametros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
