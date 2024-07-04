// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4 text-white">
      <div className="mb-8">
        <h2 className="text-xl font-bold">KineoIAbot</h2>
        <p className="text-sm">Agente 1</p>
      </div>
      <ul>
        <li className="mb-4"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Canales</a></li>
        <li className="mb-4"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Agentes</a></li>
        <li className="mb-4"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Bots</a></li>
        <li className="mb-4"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Mensajería</a></li>
        <li className="mb-4"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Reportes</a></li>
        <li className="mb-4"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Productos</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
