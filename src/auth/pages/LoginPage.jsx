import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { userName, onInputChange } = useForm({
    userName: "",
  });

  const { login } = useContext(AuthContext);

  const onSumbitUser = (event) => {
    event.preventDefault();
    if (userName.trim().length == 0) {
      return;
    }
    const lastPath = localStorage.getItem("lastPath") || "/";

    login(userName);
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={onSumbitUser} className="cols">
        <input
          className="form-control mt-3"
          type="text"
          placeholder="userName"
          name="userName"
          autoComplete="off"
          value={userName}
          onChange={onInputChange}
        />
        <button className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
};
