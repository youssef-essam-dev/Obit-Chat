import React from "react"

const MobileMenu = () => {
    return (

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
    )
}
export default MobileMenu;