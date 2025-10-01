import React from "react";

const ManageMyNetwork = () => {
    const networkItems = [
        { icon: "fa-people-arrows", label: "Connections", count: 74 },
        { icon: "fa-user-plus", label: "Following & Followers", count: 99 },
        { icon: "fa-user-group", label: "Groups", count: 1 },
        { icon: "fa-calendar-days", label: "Events", count: "" },
        { icon: "fa-file", label: "Pages", count: 115 },
        { icon: "fa-newspaper", label: "Newsletters", count: 20 },
    ];

    return (
        <div>
            <div className="card-container mt-2  !max-w-full !ml-0">
                <div>
                    <p className="px-4 py-2 font-bold">Manage my network</p>
                </div>
                <hr className="border-gray-500 my-2" />

                <ul className="p-2 ">
                    {networkItems.map((item, index) => (
                        <li
                            key={index}
                            className="connection-item flex items-center justify-between px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-5 h-5 flex items-center justify-center">
                                    <i className={`fa-solid ${item.icon}`}></i>
                                </span>
                                <p className="font-bold m-0">{item.label}</p>
                            </div>
                            {item.count && (
                                <span className="connection-count">{item.count}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="max-w-96 max-h-96 py-2">
                <img
                    className="w-full h-full object-cover"
                    src="./images/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
                    alt="network-banner"
                />
            </div>

            <div className="flex flex-wrap justify-center max-w-[24rem] gap-x-4 text-sm cursor-pointer">
                <p>About</p>
                <p>Accessibility</p>
                <p>Help Center</p>
                <p>Privacy & Terms</p>
                <p>Ad Choices</p>
                <p>Advertising</p>
                <p>Business Services</p>
                <p>Get the LinkedIn app</p>
                <p>
                    More <i className="fa-solid fa-arrow-right ml-1"></i>
                </p>
            </div>

            <div className="card-container-rightside flex mt-2 p-2">
                <i className="fa-brands fa-linkedin mr-3 text-blue-600 inline-block text-2xl"></i>
                <p className="text-base font-medium text-gray-600">
                    LinkedIn Corporation © 2025
                </p>
            </div>
        </div>
    );
};

export default ManageMyNetwork;
