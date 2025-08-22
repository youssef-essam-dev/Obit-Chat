import React, { useState, useRef, useEffect } from 'react';
import { SearchData } from './SearchData';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState(SearchData);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null); // Ref for the input
    const dropdownRef = useRef(null); // Ref for the dropdown

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


    const filteredResults = () => {
        const filteredData = SearchData.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filteredData;
    }

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
                                }}
                                ref={inputRef} // Attach ref to the input
                            />
                            {isDropdownOpen && (
                                <div ref={dropdownRef} className="absolute bg-white rounded-lg w-full mt-2 overflow-hidden shadow-lg z-50">
                                    <ul className="list-none px-2 m-1 d-">
                                        {filteredResults().map((item, index) =>
                                            <li key={index} className="cursor-pointer p-2 hover:bg-gray-100 w-full ">
                                                {item}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1  items-center  ">
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2 text-lg no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300">
                                <i className="fa-solid fa-house mb-1"></i>
                                <span className='text-xs'>Home</span>
                            </a>
                        </div>    <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg  no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300">
                                <i className="fa-solid fa-network-wired mb-1"></i>
                                <span className='text-xs'> My Network</span>
                            </a>
                        </div>
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg  no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300">
                                <i className="fa-solid fa-briefcase mb-1"></i>
                                <span className='text-xs'>Jobs</span>
                            </a>
                        </div>
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300">
                                <i className="fa-brands fa-rocketchat mb-1"></i>
                                <span className='text-xs'>Messaging</span>
                            </a>
                        </div>
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg  no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300">
                                <i className="fa-solid fa-bell mb-1"></i>
                                <span className='text-xs'>Notifications</span>
                            </a>
                        </div>
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg  no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300">
                                <i className="fa-solid fa-user mb-1"></i>
                                <span className='text-xs'>Me <i class="fa-solid fa-angle-down"></i></span>
                            </a>
                        </div>

                    </div>
                    <div className="hidden md:flex space-x-1  items-center  ">
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg  no-underline text-gray-950 hover:text-gray-600 transition-colors duration-300">
                                <i class="fa-solid fa-braille"></i>
                                <span className='text-xs '>For Business <i class="fa-solid fa-angle-down"></i></span>
                            </a>
                        </div>
                        <div className="">
                            <a href="/" className="flex flex-col items-center px-2 py-2  text-lg  no-underline   ">
                            <i class="fa-solid fa-folder text-yellow-500"></i>
                            
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
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </a>
                        <a href="/about" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                            About
                        </a>
                        <a href="/services" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                            Services
                        </a>
                        <a href="/contact" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;