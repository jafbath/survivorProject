import { Link } from "react-router-dom";

const Header = (props) => {
  return (
      <nav className='nav'>
          <Link to="/">
              <div>Survivor Fantasy League</div>
          </Link>
      </nav>
  );
}

export default Header;