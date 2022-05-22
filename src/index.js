import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Indice, { Produto, Categoria } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './componentes/header.js'
import { Footer } from './componentes/footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Indice />} />
        <Route path=":categoriaProject" element={<Categoria />} />
        <Route path=":categoriaProject/:idProject" element={<Produto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
