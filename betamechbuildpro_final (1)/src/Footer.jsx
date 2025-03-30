
import React from "react";

export function FirmCard({ name, address, status }) {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h3 className="text-md font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{address}</p>
      <p className="text-sm text-indigo-600 mt-1">Durum: {status}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-xs text-gray-500 py-6 mt-12 border-t">
      MechBuild Pro Test Paneli © {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
