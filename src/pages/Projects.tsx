import Navbar from "./Navbar.tsx";
import "./Writeups.css"
import { Octokit } from "octokit";
import { useState, useEffect } from 'react';

interface DivInput {
    title: string,
    info: string,
    link: string,
}

function WriteupDivs({ title, info, link }: DivInput) {
    return (
        <div>
            <h3> <a href={ link }> { title } </a> </h3>
            <p> { info } </p>
        </div>
    ); 
}

export default function Projects() {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        async function githubFetch() {
            const octokit = new Octokit({
                auth: import.meta.env.VITE_API_KEY,
            });

            const username = "JackKammerer";

            const request = await octokit.rest.repos.listForUser({username});

            const list = request.data.map((repo, count) => {
                return <WriteupDivs key= {count} title={ repo.name } info={ repo.description } link={ repo.html_url } />
            });

            setRepos(list);
        }

        githubFetch();
   }, []);

    return (
        <>
            <Navbar />
            <div className="git-content">
                <div className="repo-header">
                    <h1> Projects </h1>
                    <p> This is a link to projects that I have created, and saved to Github repositories. This is a brief demonstration of some of the work I have done. </p>
                </div>
                {repos ? (repos) : (<p> Loading... </p>)}
            </div>
        </>
    );
}

