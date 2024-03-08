import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes} from "react-router-dom";
import SavedRecipes from './components/SavedRecipes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={ <SavedRecipes /> } />
        <Route path="/" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  </React.StrictMode>
);