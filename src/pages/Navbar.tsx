import './Navbar.css'

interface NavButtonInput {
    text: string,
}

function NavButton( {text}: NavButtonInput ) {
    return (
    <div className="nav-button">
        <div className="nav-button-text">
            {text}
        </div>
    </div>
    );
}

export default function Navbar() {
    return (
        <nav>
            <NavButton text="About" />
            <NavButton text="Homelab" />
            <NavButton text="Write Ups" />
        </nav>
    );
}
 
