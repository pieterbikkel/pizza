import "./navbar.css"
import { Link } from "react-router-dom";
import PizzaSlice from "./assets/pizza.svg"
import Searchbar from "./components/Searchbar";

const Navbar = () => {
    return (
        <nav className="navbar side-padding">
            <div className="brand">
                <img src={PizzaSlice} alt="pizza slice"></img>
                <span className="brandname">
                    <h4>Happy</h4>
                    <h4>Food</h4>
                </span>
            </div>
            <div className="navlinks">
                <Link to="/" className="navlink"><p>Menu</p></Link>
                <Link to="/" className="navlink"><p>Delivery</p></Link>
                <Link to="/" className="navlink"><p>About us</p></Link>
                <Link to="/" className="navlink"><p>Contacts</p></Link>
            </div>
            <Searchbar/>
        </nav>
    )
}

export default Navbar;