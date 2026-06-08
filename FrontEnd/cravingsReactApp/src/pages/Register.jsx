import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bgImage from "../assets/images/LoReBG.webp";

function Register() {
  return (
    <>
      <Navbar />

      <section
        className="register-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card form-card shadow-lg p-4">
          <h2 className="text-center">Create Account</h2>

          <input className="form-control mb-3" placeholder="Full Name" />

          <input className="form-control mb-3" placeholder="Email" />

          <input className="form-control mb-3" placeholder="Phone Number" />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />

          <button className="btn w-100">Register</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
