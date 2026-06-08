import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bgImage from "../assets/images/LoReBG.webp";

function Login() {
  return (
    <>
      <Navbar />

      <main>
        <section
          className="register-hero d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="card form-card shadow-lg p-4">
            <h2 className="text-center">Welcome Back</h2>

            <p className="text-center text-muted">Login to your account</p>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
            />

            <button className="btn w-100">Login</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Login;
