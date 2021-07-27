import {link} from "react-router"
import {CgMenuRightAlt }from "react-icons/cg"
export const Menu = () => {
     return (
         <>
             <header>
                 <div className="menu-btn">
                  <button>
                    <CgMenuRightAlt/>
                  </button>
                  </div>
                  <nav>
                      <ul> 
                        <li>
                            <link to="/">Homepage</link>
                        </li>
                        <li>
                            <link to="/Projects">Projects</link>
                        </li>
                        <li>
                            <link to ="/contact-me">Contact Me</link>
                        </li>
                      </ul>
                  </nav>
             </header>
         </>
     );
 
     }
     export default Menu