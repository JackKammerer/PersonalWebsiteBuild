import Navbar from "./Navbar.tsx"
import "./index.css"

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="content-block">
                <h1>404: Page Not Found</h1>
                <div className="title-block"> 
                    <p> Click on one of the buttons on the navbar above to navigate to a valid page! </p>    
                </div>
            </div>
        </>
    )
}
