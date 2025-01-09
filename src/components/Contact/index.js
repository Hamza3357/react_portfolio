import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

const Contact = () => {
    const position = [33.6747, 72.9509]
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            
        }, 3000);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'default_service',
            'hamza007',
            refForm.current,
            'OftnyRNzgi08LOKb_'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to sent the message, please try again')
            }
        )
    }
 
 return (
    <>
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>Feel free to reach out! I'm here to discuss exciting front-end development projects, collaborate on innovative solutions, and explore opportunities to enhance user experiences. Let's connect and turn your ideas into engaging digital realities.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                        <textarea placeholder="Message" name="message" required >
                        </textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>

            </div>
        </div>
        <div className="info-map">
          M. Hamza Sabir
            <br />
            +92313-1553357
            <br />
            Islamabad, Pakistan
            <br />
            <span>hamzasabir3357@gmailcom</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Hamza lives here, come over for a cup of tea
                </Popup>
            </Marker>
        </MapContainer>
</div>

    </div>
    <Loader type="pacman" />
    </>
)
 }

export default Contact;