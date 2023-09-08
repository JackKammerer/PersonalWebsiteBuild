import Navbar from "./Navbar.tsx";
import "./index.css";
import "./Jobs.css";

interface JobInput {
    title: string,
    dates: string,
    description: string,
}

function JobBrief( { title, dates, description }: JobInput) {
    return(
        <div>
            <h3> { title } </h3>
            <p> { dates } </p>
            <p> { description } </p>
        </div>
    );
}

export default function Jobs() {
    return (
        <>
            <Navbar />
            <div className="jobs-content">
                <div>
                    <h1> Past Job Experience: </h1>
                    <p> This is a brief personal job history. This acts as a resume. </p>
                </div>
                <JobBrief title="Math Tutor" dates="09/21-06/22" description="I worked as a math tutor" />
                <JobBrief title="XR Intern" dates="06/21-08/21" description="I worked as an intern at Portland State University" />
                <JobBrief title="SOC Analyst" dates="09/22-Present" description="I worked as a SOC Analyst at Oregon State University" />
            </div>
        </>
    );
}
