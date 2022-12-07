import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div>
            <h2>Error 404</h2>
            <strong>Esta página no existe</strong>
            <Link to="/home">Volver al inicio</Link>
        </div>
    )
}