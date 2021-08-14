// import { react } from '@babel/types'
// import Home from './Home'
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./NavBar.css";
// import Settings from './Settings'
function NavBar(props) {
    return (
        <div id="navcontainer">
            <div className="NavBar">
                <div id="row1">{/* <Link to='./Login' id='signin'>Login</Link> */}</div>
                <div id="navmenu"></div>
                <div id="row2">
                    <nav id="nav">
                        <span>

                            <Link className="navlink" to="./Home">
                                Home
                            </Link>
                        </span>
                        <span

                            onMouseOut={(e) => { (document.querySelector('.dropdown').style.display = "none") }}
                            onMouseOver={(e) => {
                                e.preventDefault()

                                document.querySelector('.dropdown').style.display = "block"
                            }}
                        >
                            <Link className="navlink" to="./history">
                                Account
                            </Link>
                            <div className='dropdown'>

                                <button
                                    className="logout"
                                    onClick={() => {
                                        localStorage.setItem("userID", []);
                                        props.setUserID([]);
                                    }}
                                >
                                    log out
                                </button>

                                <Link className="menuButton" to='/history'>Your Votes</Link>
                            </div>
                        </span>
                    </nav>
                </div>
            </div>
        </div >
    );
}

export default NavBar;
