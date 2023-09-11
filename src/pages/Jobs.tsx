import Navbar from "./Navbar.tsx";
import "./index.css";

interface JobInput {
    title: string,
    dates: string,
    description: Array<string>,
}

interface listsInput {
    array: Array<string>
} 

function AccomplishmentLists( {array}: listsInput) {
    const items = array.map((item, key) => {
       return <li key = {key}> {item} </li> 
    })

    return <ul> {items} </ul>;
}

function JobBrief( { title, dates, description }: JobInput) {
    return(
        <div className="job-divs">
            <h3> { title } </h3>
            <p> { dates } </p>
            < AccomplishmentLists array={description} />
        </div>
    );
}

export default function Jobs() {
    var mathList = ["Taught students new math concepts including algebra, trigonometry, calculus, and vector calculus, in one-on-one, hour-long sessions.", "Demonstrated learning resources students could use independently, such as Wolfram Alpha, Desmos and Khan Academy.", "Aided dozens of different students in remote and in-person settings.", "Practiced and improved math skills and ability to teach others new skills over the course of the year long employment.", "Tutored students twelve hours a week."];
    var xrList = ["Ensured the five lab assignments in the course CS 410/510: VR/AR Development were accurate, up to date, and easy to follow.", "Gained experience with the Unity game engine, Vuforia, C#, and extended reality development over the three-month period.", "Built and designed a virtual reality puzzle game using the Unity Game Engine to demonstrate the skills taught by the lab material.", "Participated in bi-weekly progress reports with my mentor.", "Worked eight hours a day, five days a week, in a remote setting."];
    var socList = ["Responsible for analyzing and responding to potential security threats.", "Used many of the cybersecurity tools offered by the Microsoft Azure Suite.", "Worked in team environments with other analysts to find the best way to solve security problems."]

    return (
        <>
            <Navbar />
            <div className="content-block paper-background">
                <div className="title-block">
                    <h1> Past Job Experience </h1>
                    <p> This is a brief personal job history.</p>
                </div>
                <JobBrief title="Math Tutor: Clackamas Community College" dates="09/21-06/22" description={mathList} />
                <JobBrief title="XR Intern: Portland State University" dates="06/21-08/21" description={xrList} />
                <JobBrief title="SOC Analyst: Oregon State University" dates="09/23-Present" description={socList}/>
            </div>
        </>
    );
}
