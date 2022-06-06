import "./footer.css";
import { ReactComponent as Facebook } from '../images/facebook-f-brands.svg';
import { ReactComponent as Twitter } from '../images/twitter-brands.svg';
import { ReactComponent as Instagram } from '../images/instagram-brands.svg';

function Footer() {
    return (
        <footer>
            <div className="logos">
                <div className="logo">
                    <Facebook id="facebook" height="20" width="20"  />
                    <a target="_blank" rel="noreferrer" href="http://facebook.com">facebook</a>
                </div>
                <div className="logo">
                    <Twitter id="twitter" height="20" width="20" />
                    <a target="_blank" rel="noreferrer" href="http://twitter.com">twitter</a>
                </div>
                <div className="logo">
                    <Instagram id="instagram" height="20" width="20" />
                    <a target="_blank" rel="noreferrer" href="http://instagram.com">instagram</a>
                </div>
            </div>
            <p>&copy; Copyright Ping. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
