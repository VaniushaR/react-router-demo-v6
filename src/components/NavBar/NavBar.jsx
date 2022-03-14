import { Link } from "react-router-dom"

const NavBar = () => {
      return (
            <div>
                  <ul>
                       <li><Link to="/">Home</Link></li> 
                       <li> <Link to="contacts">Contacts</Link></li> 
                       <li><Link to="about">About</Link></li> 
                  </ul>
            </div>

      )
}

export default NavBar