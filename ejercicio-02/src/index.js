import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// Crear un componente Person que acepte props name, surname y age, y nos muestre dichos datos dentro de etiquetas span.
// Utilizar al menos el mismo componente 3 veces con props que tengan valores diferentes.
// Crea el componente Person de forma funcional y con classes