import './style.css';

const Button = ({ buttonText, buttonColor, url, textColor }) => {
    return (
        <button style={{background: buttonColor}} className="heystack-button">
            <p style={{color: textColor}}>
                {buttonText}
            </p>
        </button>
    );
}

export default Button;