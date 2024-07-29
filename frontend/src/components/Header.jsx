import { Link } from "react-router-dom";

const Header = (props) => {
    return (
      <nav className='nav'>
        <Link to="/">
          <div className="title-text">
            <span>Fantasy League</span>
          </div>
        </Link>
      </nav>
    );
  }

export default Header;