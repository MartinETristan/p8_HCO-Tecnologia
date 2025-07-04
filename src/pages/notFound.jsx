import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Página no encontrada</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Regresar al inicio
      </Link>
    </div>
  );
}

export default NotFound;