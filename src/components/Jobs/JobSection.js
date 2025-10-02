import React from "react";
import JobCard from "./JobCard";

const JobSection = ({ sectionTitle, sectionSubtitle, jobs ,extraContent }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
            <h4 className="font-bold">{sectionTitle}</h4>
            {sectionSubtitle && <span>{sectionSubtitle}</span>}
            {extraContent && <div className="my-3">{extraContent}</div>}

            {jobs.map((job, i) => (
                <React.Fragment key={i}>
                    <JobCard {...job} />
                    {i !== jobs.length - 1 && <hr className="border-gray-300 my-2" />}
                </React.Fragment>
            ))}

            <div className='flex item-center justify-center max-auto hover:bg-gray-100 p-2  rounded-lg'>
                <p className='font-bold text-lg px-2'> Show all </p>
                <spa> <i class="fa-solid fa-arrow-right"></i> </spa>
            </div>
        </div>
    );
};

export default JobSection;
