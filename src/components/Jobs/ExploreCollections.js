import React from "react";

const ExploreCollections = () => {
  const collections = [
    { label: "Easy Apply", icon: "fa-solid fa-calendar-check" },
    { label: "Remote", icon: "fa-solid fa-house-laptop" },
    { label: "Part-time", icon: "fa-solid fa-hourglass-start" },
    { label: "More", icon: "fa-solid fa-angles-right" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {collections.map((c, i) => (
        <button
          key={i}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg
             border border-gray-300 text-gray-700 text-sm
             hover:bg-gray-100 hover:border-gray-400 transition
             shadow-sm"
        >
          <i className={`${c.icon} text-blue-600 text-base`} />
          {c.label}
        </button>
      ))}
    </div>
  );
};

export default ExploreCollections;
