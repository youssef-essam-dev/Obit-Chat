// components/SuggestionCard.jsx
import React from "react";

export default function SuggestionCard({ id, name, title, mutual, img }) {
  return (
    <div
            className="card-container border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center text-center"
            key={id}
          >
            <div className="w-20 h-20 mb-3">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="font-semibold text-sm">{name}</h2>
            <p className="text-xs text-gray-500">{title}</p>
            <p className="text-xs text-gray-400 mt-2">{mutual}</p>  
            <button
              className="mt-3 border-2 border-blue-500 text-blue-500 px-3 py-1 rounded-lg bg-transparent hover:border-sky-500 hover:bg-blue-50 hover:text-sky-600 transition"
              aria-label={`Send connection request to ${name}`}
            >
              + Connect
            </button>
          </div>
  );
}


