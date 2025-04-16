import { Link } from 'react-router-dom';
import '../styling/navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">

            <div className="nav-left">
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxITiGZuLkhpVxvQJp2tKaPNk-zCLxvicXg&s' />
                <Link className='realmadrid' to="/"  >Real Madrid </Link>
            </div>

            <div className="links">
                <Link to="/" >Home</Link>
                <select
                    className="navbar-dropdown-club"
                    onChange={(e) => {
                        if (e.target.value) {
                            window.location.href = e.target.value;
                        }
                    }}
                >
                    <option value="">Club</option>
                    <option value="/history">History</option>
                    <option value="/Achievements">Achievements</option>
                </select>


                <select className="navbar-dropdown-equipe"
                    onChange={(e) => {
                        if (e.target.value) {
                            window.location.href = e.target.value;
                        }
                    }}
                >
                    
                    <option value=""> equipe a </option>
                       <option value="/squad">squad </option> 
                    <option value="/schedule"> schedule</option> 
                     <option value="/ranking"> ranking</option> 
                </select>
                <Link to="/Contact" >Contact</Link>
            </div>

            <div className="nav-right">
                <Link to="/shop" > shop</Link>
                <Link to="/tickets" > tickets</Link>
            </div>



        </div>

    )
}

export default Navbar;

