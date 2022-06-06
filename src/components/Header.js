import "./header.css";
import Ping from '../images/logo.svg';

function Header() {
    return (
        <header>
            <img src={Ping} alt="ping"></img>
            <h1>We are launching <span>soon!</span></h1>
            <p>Subscribe and get notified</p>
        </header>
    );
}

export default Header;
