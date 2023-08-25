import './Home.css'
import Navbar from './Navbar.tsx'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="title-text"> Jack Kammerer Website </div>
            <div>
                <p> 
                    Hi! I am Jack Kammerer, a 2nd year computer science student at Oregon State University. I enjoy climbing, reading, swimming, and creating programs. I have experience with Rust, C, C++, C#, Javascript, Typescript, Python, Linux based operating systems, and the Unity game engine. 
                </p>
            </div>
        </>
    );
}
