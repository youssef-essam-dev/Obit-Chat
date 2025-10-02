import React from "react";

const JobCard = ({ title, company, location, time, applicants, promoted }) => {
    return (
        <div className="flex items-start justify-between hover:bg-gray-50 p-4 rounded-lg border border-gray-200 transition">
            <div className="flex cursor-pointer">
                <div className=" w-12 h-12">
                    <img
                        className=" object-cover w-12 h-12 rounded-full"
                        src="/images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
                        alt={company}
                    />
                </div>
                <div className="ml-3 space-y-1 ">
                    <h3 className="text-base text-blue-600 font-semibold flex items-center gap-1">
                        {title} <i className="fa-solid fa-angle-down text-gray-500 text-xs"></i>
                    </h3>
                    <p className="text-sm text-gray-800 font-medium">{company} · {location}</p>
                    <p className="text-xs text-gray-500">
                        {time} · {applicants} applicants {promoted && <span>· Promoted</span>}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                        <i className="fa-solid fa-circle-check text-blue-600 text-sm"></i>
                        <span>Actively reviewing applicants</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="fa-brands fa-linkedin text-blue-600 text-lg"></i>
                        <span>Viewed</span>
                    </div>
                </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition text-sm">
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
};

export default JobCard;


/*





*/