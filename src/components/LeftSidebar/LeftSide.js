import React from "react";
import './LeftSide.css'
const LeftSide = () => {

    const listItems = [
        { icon: "fa-bookmark", text: "Saved items" },
        { icon: "fa-layer-group", text: "Groups" },
        { icon: "fa-envelope", text: "Newsletters" },
        { icon: "fa-calendar", text: "Events" },
    ];

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
                {listItems.map((item, index) => (
                    <div key={index} className="list-iteem">
                        <i className={`fa-solid ${item.icon} list-icon`} aria-hidden="true"></i>
                        <p className="list-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default LeftSide;