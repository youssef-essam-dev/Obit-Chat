import React from "react";
import JobSection from "./JobSection";
import ExploreCollections from "./ExploreCollections";

const Jobs = () => {
    const topPicks = [
        { title: "Frontend React Dev", company: "Tocaan", location: "Egypt (Remote)", time: "1mo ago", applicants: "100+" },
        { title: "Backend Engineer", company: "Darsel", location: "Remote", time: "3mo ago", applicants: "50+", promoted: true },
    ];

    const exploreJobs = [
        { title: "UI Designer", company: "Figma", location: "Remote", time: "2w ago", applicants: "80+" },
        { title: "Fullstack Dev", company: "Stripe", location: "Global Remote", time: "1w ago", applicants: "200+" },
    ];

    const hiringNetwork = [
        { title: "Software Engineer", company: "Microsoft", location: "Egypt", time: "5d ago", applicants: "500+" },
    ];

    return (
        <div>
            <JobSection
                sectionTitle="Top job picks for you"
                sectionSubtitle="Based on your profile, preferences, and activity"
                jobs={topPicks}
            />

            <JobSection
                sectionTitle="Explore with job collections"
                extraContent={<ExploreCollections />}
                jobs={exploreJobs}
            />

            <JobSection
                sectionTitle="Hiring in your network"
                jobs={hiringNetwork}
            />
        </div>
    );
};

export default Jobs;
