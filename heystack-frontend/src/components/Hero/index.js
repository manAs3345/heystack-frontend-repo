import Button from '../Button/index.js';
import './style.css';

const hero = () => {
    return (
        <div class="hero-image">
            <div class="hero-text">
                <h1>Heading 1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                <Button buttonText="Our Services
                " buttonColor="orange" textColor="black" url={"/services"}
                />
            </div>
        </div>
    )
}

export default hero;