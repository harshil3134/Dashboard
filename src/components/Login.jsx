import { useState, useContext } from "react";
import Hnavbar from "./Hnavbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e, fieldname) => {
    fieldname == "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const checkUser = (e, email, password) => {
    e.preventDefault();

    const t = localStorage.getItem(email);
    const user = JSON.parse(t);

    if (!user) {
      console.log("user not found");
    }

    if (user == password) {
      login();
      localStorage.setItem('email',email)
      navigate("/dashboard");
    } else {
      console.log("incorrect password");
    }
  };

  return (
    <div className="w-full h-screen ">
      <Hnavbar />

      <div className="h-full w-full m-0 p-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  pt-40">
        <div className="h-2/3 w-1/4 bg-gray-100 mx-auto rounded-xl mt-8 ">
          <form
            className="flex flex-col items-center  text-gray-800 text-xl pt-5 w-full"
            onSubmit={(e) => checkUser(e, email, password)}
          >
            <h3 className="text-4xl font-bold font-sans mt-5">Login</h3>
            <div className="flex flex-col mt-10 w-3/4">
              <label className="my-1 text-xl ">Email</label>
              <input
                type="text"
                className="bg-gray-100 p-3 border-b-2"
                placeholder="abc@gmail.com"
                onChange={(e) => handleChange(e, "email")}
                required
              />
            </div>
            <div className="flex flex-col mt-6 w-3/4">
              <label className="my-1 ">Password</label>
              <input
                type="text"
                className="bg-gray-100 p-3 border-b-2"
                placeholder="Password"
                onChange={(e) => handleChange(e, "password")}
                required
              />
            </div>
            <button
              type="Submit"
              className="w-4/5 py-2 my-9 mx-6   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   rounded-3xl font-bold text-white "
            >
              Login
            </button>

            <Link to="/register">Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
