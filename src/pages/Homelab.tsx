import Navbar from "./Navbar.tsx";
import './index.css';
import piKVMImage from './images/PiKVMImage.jpg';
import atxImage from './images/ATXBoard.jpg';
import piHole from './images/PiHole.jpg';
import homeServer from './images/HomeServerTrimmed.jpg';
import servicesImage from './images/servicesImage.png';

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


function Specs() {
    return (
        <div className="specs">
            <h2> Specifications </h2>
            <ul>
                <li>
                    <h3> Services and Storage Server </h3>
                    <ul>
                        <li> Intel i7-2600K CPU </li>
                        <li> P8Z68-V Pro Motherboard </li>
                        <li> Nvidia GTX 1060 GPU </li> 
                        <li> Two 4TB Seagate Barracuda HDDs </li>
                        <li> Samsung 970 EVO 1TB SSD </li> 
                    </ul>
                </li>
                <li> 
                    <h3> Two Raspberry Pi's </h3>
                    <ul> 
                        <li> One runs PiHole </li>
                        <li> The other runs PiKVM </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

function Services() {
    return (
        <div className="services">
            <h2> Services </h2>
            <ul>
                <li>
                    <h3> Docker </h3>
                    <ul>
                        <LinkListItems input="Nextcloud" url="https://nextcloud.com/" /> 
                        <LinkListItems input="Vaultwarden" url="https://github.com/dani-garcia/vaultwarden" /> 
                        <LinkListItems input="Portainer" url="https://www.portainer.io/" /> 
                        <LinkListItems input="Heimdall" url="https://heimdall.site/" /> 
                        <LinkListItems input="Nginx Proxy Manager" url="https://nginxproxymanager.com/" /> 
                    </ul>
                </li>
                <li>
                    <h3> Raspberry Pi ("Bare Metal") </h3>
                    <ul>
                        <LinkListItems input="PiKVM" url="https://github.com/pikvm/pikvm" /> 
                        <LinkListItems input="Pi-Hole" url="https://pi-hole.net/" /> 
                    </ul>
                </li>
                <li>
                    <h3> Virtual Machines </h3>
                    <ul>
                        <LinkListItems input="Kali Linux" url="https://www.kali.org/" /> 
                    </ul>
                </li>
            </ul> 
            <img className="div-images" src={servicesImage} />
        </div>
    );
}

function FuturePlans() {
    return (
        <div className="future-plans">
            <h2> Future Plans </h2>
            <ul>
                <li> Implement AI tools (which is why my server has a graphics card) </li>
                <li> Create a better storage backup system </li>
                <li> Implement and build more virtual machines, for testing and experimentation </li>
            </ul>
        </div>
    );
}

interface ImageDivInput {
    title: string,
    image: string,
    classHeader: string,
    text: string
}

function ReactImages( {title, image, classHeader, text }: ImageDivInput) {
    return (
      <div className={classHeader + "-div photo-divs"}>
          <h2> {title} </h2>
          <img src={image} className={classHeader + "-image homelab-images"}/>
          <p className="bold"> {title}: </p>
          <p>{text} </p>
      </div>
    );
}

export default function Homelab() {
    let title1 = "PiKVM Setup";
    let text1 = "PiKVM assembled with RPi4, CSI-HDMI bridge and using USB inputs/outputs." 
    let title2 = "ATX Board";
    let text2 = "Breadboard attached to PiKVM and ATX motherboard pins. Allows PiKVM to turn on server.";
    let title3 = "Home Server Setup";
    let text3 = "This is an overview of the homeserver, which is connected to the PiKVM.";
    let title4 = "PiHole Setup";
    let text4 = "This is the PiHole, responsible for local DNS and AdBlock. This works over Wifi.";

    return (
        <>
            <Navbar />
            <div className="content-block homelab-back-image">
                <div className="title-block">
                    <h1> My Homelab </h1>
                    <p> This is a brief discussion of my homelab setup, including how it works, the services it runs, and my plans for the future. </p> 
                </div>
                <Specs />
                <Services />
                <ReactImages title={title1} image={piKVMImage} classHeader="pikvm" text={text1} />
                <ReactImages title={title2} image={atxImage} classHeader="atx" text={text2} />
                <ReactImages title={title3} image={homeServer} classHeader="server" text={text3} />
                <ReactImages title={title4} image={piHole} classHeader="pihole" text={text4} />
                <FuturePlans />
            </div>
        </>
    );
}
