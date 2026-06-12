import { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/images/LoReBG.webp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email :", email);
    console.log("password :", password);
  };
  return (
    <>
      <div className="login-page relative flex">
        <img src={loginImage} alt="Login" className="table-img" />

        <div className="container absolute  w-md p-10 mt-15 mx-25 bg-white justify-center shado shadow rounded">
          <h1 className="text-center font-bold text-(--color-primary)">
            Welcome Back
          </h1>
          <p className="text-center font">Login to your Cravings account</p>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="font-bold">
              Email :
            </label>
            <input
              type="text"
              name="email"
              className="border grid w-full rounded-md p-2 "
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password" className="font-bold">
              Password :
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border  grid w-full rounded-md p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <div class="flex justify-between">
              <label>
                <input className="checkbox " type="checkbox" />
                Remember me
              </label>

              <Link to="/login" className="text-(--color-primary)">
                Forgot Password?
              </Link>
            </div>
            <br />
            <div className="text-center">
              <button
                type="submit"
                className="btn  w-full border-0 text-white py-2 rounded-md bg-(--color-primary)"
              >
                Login
              </button>
            </div>
          </form>
          <br />
          <div className="flex gap-3 w-full items-center justify-center">
            <hr className="border  border-olive-400 text-( --color-primary) w-20" />

            <p className="text-center flex">Don't have an account?</p>
            <hr className="border border-olive-400 text-( --color-primary) w-20" />
          </div>
          <br />
          <p className=" text-center">
            <Link to="/register" className="text-(--color-primary)">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
