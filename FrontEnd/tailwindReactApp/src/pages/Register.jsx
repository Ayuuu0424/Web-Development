import { use, useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../assets/images/LoReBG.webp";

function Register() {
  const [fullName, setfullname] = useState("");
  const [email, setUEmail] = useState("");
  const [number, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("fullname :", fullName);
    console.log("email :", email);
    console.log("number :", number);
    console.log("password :", password);
  };
  return (
    <>
      <div className="register-page relative flex justify-end">
        <img src={registerImage} alt="register" className="table-img" />

        <div className="container absolute  w-md p-10 mt-15 mx-25 bg-white justify-center shado shadow rounded">
          <h1 className="text-center font-bold text-(--color-primary)">
            Create Account
          </h1>
          <p class="text-center font">
            Join us as a Customer, Restaurant, or Rider
          </p>

          <br />

          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label class="font-bold">Register as:</label>
              <div class="flex gap-3 mt-1">
                <div>
                  <input type="radio" name="role" /> Customer
                </div>
                <div>
                  <input type="radio" name="role" /> Restaurant
                </div>
                <div>
                  <input type="radio" name="role" /> Rider
                </div>
              </div>
            </div>

            <input
              type="text"
              name="fullName"
              className="border grid w-full rounded-md p-2"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setfullname(e.target.value)}
            />
            <br />

            <input
              type="text"
              name="email"
              className="border  grid w-full rounded-md p-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
              type="number"
              name="number"
              className="border  grid w-full rounded-md p-2"
              placeholder="Enter your phone number"
              value={number}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <br />

            <input
              type="password"
              name="password"
              className="border  grid w-full rounded-md p-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <input
              type="password"
              name="password"
              className="border  grid w-full rounded-md p-2"
              placeholder="Confirm your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <div class="">
              <input type="checkbox" className="checkbox" /> I agree to the
              <span class="text-(--color-primary)"> terms and conditions</span>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn  w-full border-0 text-white py-2 rounded-md bg-(--color-primary)"
              >
                Register
              </button>
            </div>
          </form>

          <p className=" text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-(--color-primary)">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
