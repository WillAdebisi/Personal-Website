import React, { useState, useEffect } from 'react'; import './App.css'
import proffImage from './images/proff.jpg';
import skydivingImage from './images/Skydiving.jpg';
import readingImage from './images/Reading.jpg';
import basketballImage from './images/Basketball.jpg';
import travelingImage from './images/Traveling.jpg';
function App() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [skydivingImage, readingImage, basketballImage, travelingImage];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    return(
        <div className="App">
            <header className="header">
                <h1> William Adebisi</h1>
                <p> Computer Science Student | Aspiring Developer | Basketball Enthusiast</p>
                <img src={proffImage} alt="William Adebisi"/>
            </header>

            <section className="about">
                <h2>About Me</h2>
                <p>
                    Hi, I'm William Adebisi. I'm a 21-year-old computer science student from Houston. I'm currently studying at the University of Houston. I'm passionate about technology and enjoys developing innovative solutions for various problems. I am also an Amateur Skydiver
                </p>
            </section>

            <section className="projects">
                <h2>Projects</h2>
                <ul>
                    <li>
                        <strong>Reactive Gym Website</strong> - Built a responsive website using React.js, improving responsiveness by 30%.
                    </li>
                     <li>
                        <strong>JPMorgan Virtual Experience</strong> - Created a live data feed visualization using Python and JavaScript.
                    </li>
                    <li>
                        <strong>Google Clone</strong> - Designed a Google-like front-end using HTML and CSS.
                    </li>
                    <li>
                        <strong>Tic Tac Toe</strong> - Developed an interactive game with JavaScript.
                    </li>
                </ul>
            </section>
            <section className="hobbies">
                <h2>Hobbies</h2>
                <div className="hobbies-list">
                    <span>Skydiving</span>
                    <span>Reading</span>
                    <span>Basketball</span>
                    <span>Traveling</span>
                </div>
                <div className="hobbies-slideshow">
                    <img src={skydivingImage} alt="Skydiving" />
                    <img src={readingImage} alt="Reading" />
                    <img src={basketballImage} alt="Basketball" />
                    <img src={travelingImage} alt="Traveling" />
                </div>
            </section>
            <section className="contact">
                <h2>Contact Me</h2>
                <p>
                    Feel free to reach out to me:
                    <ul>
                        <li>Email: <a href="mailto:William.adebisi03@gmail.com">William.adebisi03@gmail.com</a></li>
                        <li>LinkedIN: <a href="https://www.linkedin.com/in/willade">linkedin.com/in/willade</a></li>
                        <li>Github: <a href="https://github.com/WillAdebisi">github.com/WillAdebisi</a></li>
                    </ul>
                </p>
            </section>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} William Adebisi. All rights reserved.</p>
            </footer>

        </div>
    )

}
export default App;