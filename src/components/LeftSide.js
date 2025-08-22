import React from "react";
import './LeftSide.css'
export const LeftSide = () => {
    return (
        <div>
            {/* Profile Card */}
            <div className="card-container">
                <div className="profile-header">
                    <div className="profile-image">
                        <img
                            src="./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="profile-content">
                    <h2 className="profile-name">Youssef Essam</h2>
                    <p className="profile-text mb-0">FrontEnd React Developer</p>
                    <p className="profile-text">Egypt</p>
                    <button className="profile-button">+ Experience</button>
                </div>
            </div>

            {/* Connections Card */}
            <div className="card-container mt-2 p-2">
                <div className="connection-item">
                    <p className="connection-text">
                        Connections
                        <span className="premium-text block">Grow your network</span>
                    </p>
                    <span className="connection-count text-xs ">12</span>
                </div>
                <div className="connection-item">
                    <p className="connection-text -ml-2">Invitations</p>
                    <span className="connection-count ml-10 text-xs">2</span>
                </div>
            </div>

            {/* Premium Card */}
            <div className="card-container mt-2 p-2">
                <div className="px-3">
                    <span className="premium-text pb-2">Gain exclusive tools & insights</span>
                    <p className="premium-link">Redeem Premium for EGP0</p>
                </div>
            </div>

            {/* List Card */}
            <div className="card-container mt-2 p-2">
                <div className="list-iteem">
                    <i className="fa-solid fa-bookmark list-icon"></i>
                    <p className="list-text">Saved items</p>
                </div>
                <div className="list-iteem">
                    <i className="fa-solid fa-layer-group list-icon"></i>
                    <p className="list-text">Groups</p>
                </div>
                <div className="list-iteem">
                    <i className=" fa-solid fa-envelope list-icon"></i>
                    <p className="list-text">Newsletters</p>
                </div>
                <div className="list-iteem">
                    <i className="fa-solid fa-calendar list-icon"></i>
                    <p className="list-text">Events</p>
                </div>
            </div>
        </div>
    );
};