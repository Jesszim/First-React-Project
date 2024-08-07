import { NavLink } from "react-router-dom";
import "./nav.css"

const Nav =()=>{
return(
    <div id="navbar">
        <div id="left">
            <h1 id="logo">🤯</h1>
    <NavLink className="link" to="/">Home</NavLink>
    <NavLink className="link" to="/comments">Comments</NavLink>
    </div>
    <div id="right">
        <button>Login</button>
        <button>Logout</button>
    </div>
    </div>
)
}
export default Nav