import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            
        }, 3000);
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                       letterClass={letterClass}
                      strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                      idx={15}
                    />
                </h1>
                <p>

                Welcome to my professional journey! I'm an ambitious Software Engineer and ReactJS Front-end Developer seeking opportunities with established IT companies. With a passion for the latest technologies, I thrive on tackling diverse and challenging projects. Let's connect and create something extraordinary together!                </p>
                <p>
                    I'm quitely confident, naturally curious, and perpetually working on improving my chops one design problem at a time
                </p>
                <p>
                My expertise lies in building scalable and maintainable software applications. While my foundation encompasses a range of technologies, I have a particular interest and hands-on experience in working with React.js, a powerful JavaScript library for building user interfaces.                </p>

            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>

            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}
export default About;