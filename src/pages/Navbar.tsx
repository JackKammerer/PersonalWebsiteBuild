import './Navbar.css'

interface NavButtonInput {
    text: string,
}

function NavButton( {text}: NavButtonInput ) {
    const redirect = (info: string) => { window.location.href = (info === "About") ? "/" : info.toLowerCase().replace(/\s/g, ""); }

    return (
        <div className="nav-button" onClick={() => redirect(text)}>
            <p className="nav-button-text"> 
                {text}
            </p>
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
 
