import React, { useState } from 'react';
import './MyNetwork.css';
import SuggestionCard from './SuggestionCard';

  const initialSuggestions = [
    { id: 1, name: "Youssef Essam", title: "FrontEnd React Developer", mutual: "Ahmed and 7 other mutual connections", img: "/images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg" },
    { id: 2, name: "Sara Ali", title: "UI/UX Designer", mutual: "3 mutual connections", img: "/images/07daf287389c4d4dd422c3aa920e9c98.jpg" },
    { id: 3, name: "Omar Khaled", title: "Full Stack Developer", mutual: "2 mutual connections", img: "/images/8ac73fdd4f919ba196550e4d67209f48.jpg" },
    { id: 4, name: "Mona Hassan", title: "Product Manager", mutual: "5 mutual connections", img: "/images/3513d41a68ee48dbeff0ff391aa2c495.jpg" },
    { id: 5, name: "Ali Ibrahim", title: "Software Engineer", mutual: "7 mutual connections", img: "/images/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png" },
    { id: 6, name: "Layla Mohamed", title: "Data Scientist", mutual: "4 mutual connections", img: "/images/07daf287389c4d4dd422c3aa920e9c98.jpg" },
    { id: 7, name: "Karim Adel", title: "Mobile App Developer", mutual: "1 mutual connection", img: "/images/8ac73fdd4f919ba196550e4d67209f48.jpg" },
    { id: 8, name: "Huda Farouk", title: "Business Analyst", mutual: "6 mutual connections", img: "/images/3513d41a68ee48dbeff0ff391aa2c495.jpg" },
    { id: 9, name: "Mostafa Nabil", title: "DevOps Engineer", mutual: "2 mutual connections", img: "/images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg" },
    { id: 10, name: "Nour El-Sherif", title: "Cloud Architect", mutual: "8 mutual connections", img: "/images/07daf287389c4d4dd422c3aa920e9c98.jpg" },
    { id: 11, name: "Amr Yassin", title: "Blockchain Developer", mutual: "3 mutual connections", img: "/images/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png" },
    { id: 12, name: "Rana Saeed", title: "Cloud Architect", mutual: "5 mutual connections", img: "/images/8ac73fdd4f919ba196550e4d67209f48.jpg" },
    { id: 13, name: "Mahmoud Saleh", title: "Security Engineer", mutual: "1 mutual connection", img: "/images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg" },
    { id: 14, name: "Aya Mostafa", title: "AI Researcher", mutual: "8 mutual connections", img: "/images/07daf287389c4d4dd422c3aa920e9c98.jpg" },
    { id: 15, name: "Hany Nabil", title: "Business Analyst", mutual: "2 mutual connections", img: "/images/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png" }
  ];
const MyNetwork = () => {
 const [suggestions, setSuggestions] = useState(initialSuggestions.slice(0, 6)); // start with 6
  const [visibleCount, setVisibleCount] = useState(6);
  const [expanded, setExpanded] = useState(false);


  const loadMore = () =>{
    const nextCount = Math.min(initialSuggestions.length , visibleCount+ 6 )
    setSuggestions(initialSuggestions.slice(0, nextCount))
    setVisibleCount(nextCount)
    setExpanded(true)
  }

    const showLess = () => {
    const lessCount = 6;
    setSuggestions(initialSuggestions.slice(0, lessCount));
    setVisibleCount(lessCount);
    setExpanded(false);
  };
  

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h1 className="text-xl font-semibold mb-3">People you may know</h1>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            suggestions.map((sug) => (
                  <li key={sug.id}>
              <SuggestionCard {...sug} />
            </li>
            ))
        }
      </div>

      <div className="mt-3 text-center">
          {!expanded && visibleCount < initialSuggestions.length && (
            <button
              onClick={loadMore}
              className="btn-reset px-4 py-2 border rounded-full text-sm hover:bg-sky-50"
              aria-label="Show more suggestions"
            >
              Show more
            </button>
          )}

          {expanded && (
            <button
              onClick={showLess}
              className="btn-reset px-4 py-2 border rounded-full text-sm hover:bg-sky-50"
              aria-label="Show less suggestions"
            >
              Show less
            </button>
          )}
        </div>

      
    </div>
  );
};

export default MyNetwork;
