import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
   <div className='nav-bar'>
      <Link className='logo' to='/'>
         <img src={LogoS} alt="logo" />
         <img className="sub-logo" src={LogoSubtitle} alt="Hamza" />

      </Link>
      <nav>
         <NavLink exact="true" activeclassname="active" to="/" >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />  
         </NavLink>

         <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />  
         </NavLink>

         <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />  
         </NavLink>
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
             href="https://www.facebook.com/profile.php?id=100023683633385&mibextid=JRoKGi"

            >
               <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
            </a>
         </li>
      </ul>

   </div>
)

export default Sidebar