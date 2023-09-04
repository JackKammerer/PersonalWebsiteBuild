import './Home.css';
import './index.css';
import Navbar from './Navbar.tsx';
import FaceImage from "./images/KammererFaceImage.jpeg";
import { useState, useRef, useEffect } from 'react';

interface LinkInput {
    input: string,
    url: string
}

interface ListInput {
    input: string
}

function LinkListItems( { input, url }: LinkInput): JSX.Element {
    return <li> <a href={url}> {input} </a> </li>
}

function ListItems( { input }: ListInput): JSX.Element {
    return <li> {input} </li>
}


function setReference(targetRef: any, setIsVisible: any) {
    const observer = new IntersectionObserver((entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    });

    if (targetRef.current) {
        observer.observe(targetRef.current);
    }

    return () => {
        if (targetRef.current) {
            observer.unobserve(targetRef.current);
        }
    };
}


function IntroText(): JSX.Element {     
    const [isVisible, setIsVisible] = useState(true);
    const targetRef: any = useRef(null);
    
    useEffect(() => { setReference(targetRef, setIsVisible) }, []);
           
    return (
        <div ref={targetRef} className={isVisible ? "show first-text" : "hidden first-text"}>
            <h2 className="title-text"> About Me: </h2>
            <div className="intro-text">
                <p> 
                    Hi! I am Jack Kammerer, a 2nd year computer science student at Oregon State University. I have been on the Dean's List for my entire first term, and have maintained a 4.0 GPA. I am experienced in multiple programming languages and computer science tools. I have experience with web development, compiled languages, computer hardware, networking technologies, and cybersecurity. I have also built my own homelab, worked on applications in team environments, and experimented with many different languages and tools in order to make myself the best computer scientist possible.
                </p>
            </div>
        </div>
    );
} 

function FaceBlock(): JSX.Element {
    const [isVisible, setIsVisible] = useState(true);
    const targetRef: any = useRef(null);
    
    useEffect(() => setReference(targetRef, setIsVisible), []);

    return (
        <div ref={targetRef} className={isVisible ? "show face-image-div" : "hidden face-image-div"}>
            <img src={FaceImage} className="face-image"/>
        </div>
    );
}
 
function LanguagesList(): JSX.Element {    
    const [isVisible, setIsVisible] = useState(true);
    const targetRef: any = useRef(null);
    
    useEffect(() => setReference(targetRef, setIsVisible), []);

    return (
        <div ref={targetRef} className={isVisible ? "show cs-languages-text" : "hidden cs-languages-text"}>
            <h2> Here are the programming languages I am familiar with: </h2> 
            <ul>
                <LinkListItems input="C" url="https://en.cppreference.com/w/"/>     
                <LinkListItems input="C++" url="https://en.cppreference.com/w/"/>     
                <LinkListItems input="C#" url="https://learn.microsoft.com/en-us/dotnet/csharp/"/>     
                <LinkListItems input="Rust" url="https://doc.rust-lang.org/beta/"/>     
                <LinkListItems input="Python" url="https://www.python.org/"/>     
                <LinkListItems input="Javascript" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>     
                <LinkListItems input="Typescript" url="https://www.typescriptlang.org/"/>     
                <LinkListItems input="Microsoft Macro Assembly (MASM)" url="https://learn.microsoft.com/en-us/cpp/assembler/masm/microsoft-macro-assembler-reference?view=msvc-170"/>     
                <LinkListItems input="x86 Assembly" url="https://en.wikipedia.org/wiki/X86_assembly_language"/>     
            </ul>
        </div>
    );
}

function ToolsList(): JSX.Element {    
    const [isVisible, setIsVisible] = useState(true);
    const targetRef: any = useRef(null);
    
    useEffect(() => setReference(targetRef, setIsVisible), []);

    return (
        <div ref={targetRef} className={isVisible ? "show tools-text" : "hidden tools-text"}>
            <h2> Here are some tools and programs I am familiar with: </h2> 
            <ul>
                <LinkListItems input="Linux-based Operating Systems (Arch, Debian, etc.)" url="https://en.wikipedia.org/wiki/Linux"/>     
                <LinkListItems input="Unity Game Engine" url="https://unity.com/"/>     
                <LinkListItems input="Ghidra" url="https://ghidra-sre.org/" />     
                <LinkListItems input="Vim" url="https://www.vim.org/" />     
                <LinkListItems input="Vite" url="https://vitejs.dev/" />     
                <LinkListItems input="React" url="https://react.dev/" />     
                <LinkListItems input="WASM-Pack" url="https://github.com/rustwasm/wasm-pack" /> 
                <LinkListItems input="gcc/g++ and gdb" url="https://medium.com/@developerlife/gnu-gcc-g-gdb-what-are-these-terms-explained-aec45f251501" />     
                <LinkListItems input="Docker" url="https://www.docker.com/"/>     
                <LinkListItems input="Pi-Hole" url="https://pi-hole.net/" />     
                <LinkListItems input="Pi-KVM" url="https://github.com/pikvm/pikvm" />     
                <LinkListItems input="SSH and SSH Keys" url="https://www.ssh.com/academy/ssh-keys"/>     
            </ul>
        </div>
    );
}

function Accomplishments() {   
    const [isVisible, setIsVisible] = useState(true);
    const targetRef: any = useRef(null);
    
    useEffect(() => setReference(targetRef, setIsVisible), []);

    return (           
        <div ref={targetRef} className={isVisible ? "show accomplishments" : "hidden accomplishments"}>
            <h2> Accomplishments: </h2> 
            <ul>
                <ListItems input="Graduated from Clackamas Middle College, my highschool, as a valedictorian, and gave a speech to my graduating class" />     
                <ListItems input="Graduated from Clackamas Community College at the age of 18, with 126 credits, a 4.0 GPA, and an Associate of Arts Oregon Transfer Degree" />     
                <ListItems input="A student at Oregon State University's Honors College" />     
                <ListItems input="An intern in the MECOP program" />     
                <ListItems input="Built and setup a personal homelab" />     
                <ListItems input="Participated in several CTF competitions" />     
                <ListItems input="Participated in Hackathons in a team environment" />     
            </ul>
        </div>
    );
}

function Hobbies() {   
    const [isVisible, setIsVisible] = useState(true);
    const targetRef: any = useRef(null);
    
    useEffect(() => setReference(targetRef, setIsVisible), []);

    return (          
        <div ref={targetRef} className={isVisible ? "show hobbies" : "hidden hobbies"}>
            <h2> In my free time, I enjoy: </h2> 
            <ul>
                <ListItems input="Swimming" />     
                <ListItems input="Rock Climbing" />     
                <ListItems input="Lifting Weights" />     
                <ListItems input="Programming" />     
                <ListItems input="Reading" />     
                <ListItems input="Writing" />     
                <ListItems input="Playing Video Games" />     
            </ul>
        </div>
    );
}

function Content() {
    return (
        <div className="content-block-style">
            <IntroText />
            <FaceBlock />
            <LanguagesList />
            <ToolsList />
            <Accomplishments />
            <Hobbies />
            <div className="footer">
                <h2> These are some basics about me! If you want to learn more, navigate to any of the above sections. Thank you for reading! </h2>
            </div>  
        </div>
    );
}

export default function Home() {
    return (
        <>
            <Navbar /> 
            <Content />
       </>
    );
}
