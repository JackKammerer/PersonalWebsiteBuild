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

interface LogoLinkInput {
    image: string,
    link: string
}

function LogoLinks ( {image, link}: LogoLinkInput ){
    return (
        <div className="logo-div">
            <a href={link}> <img className="logo-img" src={image} /> </a>
        </div>
    );
}

export default function Navbar() {
    return (
        <nav>
            <NavButton text="About" />
            <NavButton text="Homelab" />
            <NavButton text="Projects" />
            <NavButton text="Jobs" />
            <div className="socials-links">
                <LogoLinks image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" link="https://github.com/JackKammerer/" />
                <LogoLinks image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" link="https://www.linkedin.com/in/jack-kammerer" />
                <LogoLinks image="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI" link="mailto:jackkammerer16@gmail.com" />
                <LogoLinks image="https://www.edigitalagency.com.au/wp-content/uploads/twitter-logo-black-png.png" link="https://twitter.com/jackkammerer2" />
            </div>
        </nav>
    );
}
 
