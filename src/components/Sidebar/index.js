import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () =>  { 
   const [showNav, setShowNav] = useState(false);
return (
   <div className='nav-bar'>
      <Link className='logo' to='/'>
         <img src={LogoS} alt="logo" />
         <img className="sub-logo" src={LogoSubtitle} alt="Hamza" />

      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
         <NavLink  onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/" >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />  
         </NavLink>

         <NavLink  onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about" >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />  
         </NavLink>

         <NavLink  onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />  
         </NavLink>
         
         <NavLink  onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact" >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />  
         </NavLink>
         <FontAwesomeIcon
         onClick={() => setShowNav(false)} 
         icon={faClose}
         size='3x'
         color='#ffd700'
         className='close-icon'
         />

      </nav>
      <ul>
         <li>
            <a 
             target="_blank"
             rel="noreferrer"
             href="https://www.linkedin.com/in/hamza-sabir3357/"

            >
               <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
         </li>

         <li>
            <a 
             target="_blank"
             rel="noreferrer"
             href="https://github.com/Hamza3357"

            >
               <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
         </li>


         <li>
            <a 
             target="_blank"
             rel="noreferrer"
             href="https://join.skype.com/invite/tEP1WYxkWSy2"

            >
               <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
         </li>
         <li>
            <a 
             target="_blank"
             rel="noreferrer"
             href="https://www.facebook.com/profile.php?id=100023683633385"

            >
               <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
            </a>
         </li>
      </ul>

      <FontAwesomeIcon 
      onClick={() => setShowNav(true)}
      icon={faBars} 
      size='3x'
      color='#ffd700'
      className='hamburger-icon'
      />

   </div>
)
}

export default Sidebar