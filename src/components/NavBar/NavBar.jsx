import { Link } from "react-router-dom"

const NavBar = () => {
      return (
            <div>
                  <ul>
                       <li><Link to="/react-router-demo-v6/">Home</Link></li> 
                       <li> <Link to="react-router-demo-v6/contacts">Contacts</Link></li> 
                       <li><Link to="react-router-demo-v6/about">About</Link></li> 
                  </ul>
            </div>

      )
}

export default NavBar