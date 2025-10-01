import React, { useState, useRef, useEffect, useMemo } from 'react';
import { SearchData } from '../Messaging/SearchData';
import MobileMenu from './MobileMenu';
const Navbar = ({ setActiveView }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null); // Ref for the input
    const dropdownRef = useRef(null); // Ref for the dropdown
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                inputRef.current && !inputRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            ) {
                setTimeout(() => {
                    setIsDropdownOpen(false); // Close dropdown after a slight delay
                }, 100);
            }
        };
        // Add the event listener
        document.addEventListener('mousedown', handleClickOutside);
        // Cleanup: Remove the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const filteredResults = useMemo(() => {
        if (!searchTerm.trim()) return [];
        return SearchData.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handleKeyDown = (e) => {
        if (!isDropdownOpen) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlightedIndex(prev =>
                prev < filteredResults.length - 1 ? prev + 1 : 0
            );
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlightedIndex(prev =>
                prev > 0 ? prev - 1 : filteredResults.length - 1
            );
        }

        if (e.key === "Enter") {
            e.preventDefault();
            if (highlightedIndex >= 0) {
                setSearchTerm(filteredResults[highlightedIndex]);
                setIsDropdownOpen(false);
                setHighlightedIndex(-1);
            }
        }

        if (e.key === "Escape") {
            setIsDropdownOpen(false);
            setHighlightedIndex(-1);
        }
    };

    const menuItems = [
        { icon: "fa-solid fa-house", label: "Home", view: "timeline" },
        { icon: "fa-solid fa-network-wired", label: "My Network", view: "network" },
        { icon: "fa-solid fa-briefcase", label: "Jobs", view: "jobs" },
        { icon: "fa-brands fa-rocketchat", label: "Messaging", view: "messaging" },
        { icon: "fa-solid fa-bell", label: "Notifications" },
        { icon: "fa-solid fa-user", label: "Me" }
    ];



    return (
        <nav className="bg-white shadow-md  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-around h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center ">
                        <i className="fa-brands fa-linkedin mr-3 text-blue-600 inline-block text-4xl  "></i>
                        <div className="relative">

                            <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 cursor-pointer text-gray-500"></i>
                            <input
                                type="search"
                                placeholder="Search"
                                className="w-72 pl-10 border bg-gray-100 rounded-md focus:ring-1 focus:ring-offset-0"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value); // Update search term
                                    setIsDropdownOpen(true); // Show dropdown when typing
                                    setHighlightedIndex(-1);
                                }}
                                onKeyDown={handleKeyDown}
                                ref={inputRef} // Attach ref to the input
                            />
                            {isDropdownOpen && (
                                <div ref={dropdownRef} className="absolute bg-white rounded-lg w-full mt-2 overflow-hidden shadow-lg z-50">
                                    <ul className="list-none px-2 m-1 d-">
                                        {filteredResults.map((item, index) =>
                                            <li key={index} onClick={() => {
                                                setSearchTerm(item); 
                                                setIsDropdownOpen(false);
                                                setHighlightedIndex(-1);
                                            }} className={`cursor-pointer p-2 w-full ${highlightedIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
                                                }`}>
                                                {item}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 items-center">
                        {menuItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveView(item.view)}
                                className="flex flex-col items-center px-2 py-2 text-lg no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300 bg-transparent border-none"
                                aria-label={item.label} 
                            >
                                <i className={item.icon}></i>
                                <span className="text-xs">{item.label}</span>
                            </button>
                        ))}

                    </div>

                    <div className="hidden md:flex space-x-1  items-center  ">
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg  no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300">
                                <i class="fa-solid fa-braille" aria-label="Business"></i>
                                <span className='text-xs '>For Business <i class="fa-solid fa-angle-down"></i></span>
                            </a>
                        </div>
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg  no-underline   ">
                                <i class="fa-solid fa-folder text-yellow-500" aria-label="premium" ></i>

                                <span className='text-xs text-gray-950 hover:text-gray-600'>Try premium for EGP0 </span>
                            </a>
                        </div>

                    </div>
                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <MobileMenu />
            )}
        </nav>
    );
};

export default Navbar;