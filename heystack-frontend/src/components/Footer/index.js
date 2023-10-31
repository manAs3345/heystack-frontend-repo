import NavBar from "../NavBar";
import Social from "../Social/index.js";
import './style.css';

const Footer = () => {
    return (
        <div className="footer section">
            <NavBar noCollapse={true} />
            <div className="footer-text">
                Copyright @ 2023
                Heystack Pte Ltd
            </div>
            <Social />
        </div>
    );
}

export default Footer;