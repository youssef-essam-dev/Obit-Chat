import React, { useState } from 'react';
import { HomeIcon, UserIcon, CogIcon, MailIcon, QuestionMarkCircleIcon, LogoutIcon, ChatIcon } from '@heroicons/react/solid';
import './Sidebar.css'
export const Sidebar = () => {
    /* const [menuOpen, setMenuOpen] = useState(false); */

    return (
        <div>
            <button class="btn btn-outline-dark m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
             <LogoutIcon className="me-2 fs-5 icon-size" />
            </button>

            <div class="offcanvas offcanvas-start  " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                 
                    <div>
                        <ul className="p-0">
                            <li className="d-flex align-items-center mb-3 ">
                                <HomeIcon className="me-2 fs-5 icon-size " />
                                <span className="fs-6">Home</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <UserIcon className="me-2 fs-5 icon-size" />
                                <span className="fs-6">Profile</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <ChatIcon className="me-2 fs-5 icon-size" />
                                <span className="fs-6">Chat</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <CogIcon className="me-2 fs-5 icon-size" />
                                <span className="fs-6">Settings</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <MailIcon className="me-2 fs-5 icon-size" />
                                <span className="fs-6">Messages</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <QuestionMarkCircleIcon className="me-2 fs-5 icon-size" />
                                <span className="fs-6">Help</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <LogoutIcon className="me-2 fs-5 icon-size" />
                                <span className="fs-6">Logout</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    );
};

/*   <div className="w-64 font-bold  bg-gradient-to-r from-lightTransparent via-lightTransparent to-lightTransparent backdrop-blur-md text-black">
            { //Desktop Sidebar }
            <div className='hidden md:flex  '>
            <ul className='p-0' >
                    <li className="Sidebar_li  group  ">
                        <HomeIcon className="h-5 w-5 mr-2  " />
                        <span className="Sidebar_span  ">Home</span>
                    </li>
                    <li className="Sidebar_li  group  ">
                        <UserIcon className="h-5 w-5 mr-2" />
                        <span className="Sidebar_span">Profile</span>
                    </li>
                    <li className="Sidebar_li  group  ">
                        <ChatIcon className="h-5 w-5 mr-2" />
                        <span className="Sidebar_span">Chat</span>
                    </li>
                    <li className="Sidebar_li   group  ">
                        <CogIcon className="h-5 w-5 mr-2" />
                        <span className="Sidebar_span">Settings</span>
                    </li>
                    <li className="Sidebar_li group  ">
                        <MailIcon className="h-5 w-5 mr-2" />
                        <span className="Sidebar_span">Messages</span>
                    </li>
                    <li className="Sidebar_li group  ">
                        <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                        <span className="Sidebar_span">Help</span>
                    </li>
                    <li className="Sidebar_li group  ">
                        <LogoutIcon className="h-5 w-5 mr-2" />
                        <span className="Sidebar_span">Logout</span>
                    </li>
                </ul>
            </div>

            { //Hamburger Button for Mobile }
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden relative w-10 h-10 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full flex items-center justify-center hover:bg-gradient-to-l focus:outline-none transition-all duration-300 z-50"
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 text-white transition-all duration-300 ${menuOpen ? "rotate-45" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </div>
            </button>

            { // Mobile Sidebar (when menu is open) }
            {menuOpen && (
                <div className="md:hidden fixed inset-0 rounded-tl-3xl  bg-white w-screen h-screen  ">
                    <div className="relative    p-4">
                        <ul>
                            <li className="Sidebar_li group ">
                                <HomeIcon className="h-5 w-5 mr-2" />
                                <span className="SidebarOnMobile_span">Home</span>
                            </li>
                            <li className="Sidebar_li group">
                                <UserIcon className="h-5 w-5 mr-2" />
                                <span className="SidebarOnMobile_span">Profile</span>
                            </li>
                            <li className="Sidebar_li group">
                                <ChatIcon className="h-5 w-5 mr-2" />
                                <span className="SidebarOnMobile_span">Chat</span>
                            </li>
                            <li className="Sidebar_li group">
                                <CogIcon className="h-5 w-5 mr-2" />
                                <span className="SidebarOnMobile_span">Settings</span>
                            </li>
                            <li className="Sidebar_li group">
                                <MailIcon className="h-5 w-5 mr-2" />
                                <span className="SidebarOnMobile_span">Messages</span>
                            </li>
                            <li className="Sidebar_li group">
                                <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                                <span className="SidebarOnMobile_span">Help</span>
                            </li>
                            <li className="Sidebar_li group">
                                <LogoutIcon className="h-5 w-5 mr-2" />
                                <span className="SidebarOnMobile_span">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div> */