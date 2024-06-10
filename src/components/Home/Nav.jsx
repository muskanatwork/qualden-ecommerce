import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <Link to='/'>
                <img className='logo' src="https://i.ytimg.com/vi/PhYXIuG0jZY/maxresdefault.jpg" alt="" />
            </Link>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/product'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
