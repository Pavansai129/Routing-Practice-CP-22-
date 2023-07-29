import {Link} from 'react-router-dom'
// Write your JS code here

const Header = () => (
  <nav>
    <ul>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <p>Wave</p>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
