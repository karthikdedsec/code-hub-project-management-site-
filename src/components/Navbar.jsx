import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//styles & images
import "./Navbar.css";
import Temple from "../assets/temple.svg";

function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>The codeHub</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            {!isPending && (
              <button onClick={logout} className="btn">
                Logout
              </button>
            )}
            {isPending && (
              <button disabled className="btn">
                Logging out..
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
export default Navbar;
