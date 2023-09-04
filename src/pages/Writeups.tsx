import Navbar from "./Navbar.tsx";
import { Octokit } from "octokit";
import { useState, useEffect } from 'react';

interface DivInput {
    title: any,
    info: any,
}

function WriteupDivs({ title, info }: DivInput) {
    return (
        <div>
            <h3> { title } </h3>
            <p> { info } </p>
        </div>
    ); 
}

export default function WriteupList() {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        async function githubFetch() {
            const octokit = new Octokit({
                auth: import.meta.env.VITE_API_KEY,
            });

            const username = "JackKammerer";

            const request = await octokit.rest.repos.listForUser({username});

            const list = request.data.map((repo) => {
                return <WriteupDivs title={ repo.name } info= { repo.description } />
            });

            setRepos(list);
        }

        githubFetch();
   }, []);

    return (
        <>
            <Navbar />
            <h1> This is a future writeups section! </h1>
            {repos ? (repos) : (<p> Loading... </p>)}
        </>
    );
}

