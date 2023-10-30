import { useNavigate } from "react-router-dom";
import './style.css';

const Button = ({ buttonText, buttonColor, url, textColor }) => {
    const navigate = useNavigate();

    return (
        <button style={{background: buttonColor}} className="heystack-button" onClick={() => navigate(url)}>
            <p style={{color: textColor}}>
                {buttonText}
            </p>
        </button>
    );
}

export default Button;