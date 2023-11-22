import { Link, useNavigate } from "react-router-dom";
import { Navlink } from "./Navlink";

export const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <Navlink text="Marvel" path="marvel" />
          <Navlink text="DC" path="dc" />
          <Navlink text="Search" path="search" />
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Laura</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
