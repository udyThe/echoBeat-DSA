import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () =>{
return (
    <>
        <div id="navigation_bar">
            <nav>
                <div className="logo">
                    <img id="logo-1" src="Screenshot 2024-03-30 at 7.38.58 PM.png" alt="" />
                </div>
                <ul>
                    <li className="item"><NavLink to="#Home">Home</NavLink></li>
                    <li className="item"><NavLink to="#About">About</NavLink></li>
                    <li className="item"><NavLink to="#contact us">Contact us</NavLink></li>
                    <li className="item"><NavLink to="#login">Login</NavLink></li>
                    <li className="item"><NavLink to="#register">Register</NavLink></li>
                </ul>
                <div id="icon-bar">
                    <button className="btn-1">BOOK NOW</button>
                    <i className="fa-solid fa-house"></i>
                    <NavLink to="index.html">
                        <i className="fa-solid fa-user"></i>
                    </NavLink>
                </div>
            </nav>
        </div>
    </>
)
};
