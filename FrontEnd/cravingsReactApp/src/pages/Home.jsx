import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestaurantCard from "../components/RestaurantCard";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";

import mangoTree from "../assets/images/MangoTree.avif";
import rajDarbar from "../assets/images/RajDarbar.webp";
import countryside from "../assets/images/Countryside.webp";
import leaf from "../assets/images/TheLeaf.jpg";
import saucer from "../assets/images/FlyingSaucer.webp";
import blinq from "../assets/images/BlinQ.webp";

const restaurants = [
  {
    image: mangoTree,
    name: "Under The Mango Tree",
    rating: 3.6,
    description:
      "Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant.",
    cuisines: ["Indian", "Chinese", "Italian"],
  },

  {
    image: rajDarbar,
    name: "Raj Darbar",
    rating: 3.0,
    description:
      "A unique Indian restaurant offering a dhaba-style family dining experience.",
    cuisines: ["Indian", "Chinese", "Italian"],
  },

  {
    image: countryside,
    name: "Countryside Culture",
    rating: 5.6,
    description:
      "A hidden gem offering lush green meadows and peaceful walking paths.",
    cuisines: ["Indian", "Chinese"],
  },

  {
    image: leaf,
    name: "The Leaf",
    rating: 5.0,
    description: "Cafe and pastry shop with a delicious range of sweet treats.",
    cuisines: ["Indian", "Chinese"],
  },

  {
    image: saucer,
    name: "Flying Saucer",
    rating: 4.6,
    description:
      "A sophisticated greenhouse cafe filled with plants and antiques.",
    cuisines: ["Indian", "Chinese"],
  },

  {
    image: blinq,
    name: "BlinQ",
    rating: 3.6,
    description: "Providing customers with good food and great memories.",
    cuisines: ["Indian", "Chinese", "Italian"],
  },
];

const stats = [
  {
    number: "2.5M+",
    title: "Successful Deliveries",
    desc: "Orders delivered with care and precision",
  },
  {
    number: "500K+",
    title: "Happy Customers",
    desc: "Satisfied users enjoying delicious food",
  },
  {
    number: "5K+",
    title: "Partner Restaurants",
    desc: "Restaurants serving amazing cuisine",
  },
  {
    number: "1K+",
    title: "Active Delivery Partners",
    desc: "Riders ensuring quick and safe delivery",
  },
];

const testimonials = [
  {
    name: "Arun J.",
    text: "The food arrived hot and fresh. The delivery was incredibly fast.",
  },

  {
    name: "Sneha P.",
    text: "Easy to use interface, wide variety of restaurants, and quick delivery.",
  },

  {
    name: "Raj Kumar",
    text: "Love the variety of restaurants available. Found my new favorite spot.",
  },
];

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="Hero-section position-relative">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="" />
            </div>

            <div className="carousel-item active">
              <img src={slide2} className="d-block w-100" alt="" />
            </div>

            <div className="carousel-item active active">
              <img src={slide3} className="d-block w-100" alt="" />
            </div>

            <div className="carousel-item">
              <img src={slide4} className="d-block w-100" alt="" />
            </div>
          </div>
        </div>

        <div className="hero-overlay position-absolute d-flex align-items-center justify-content-center text-center">
          <div className="container">
            <h1 className="fw-bold display-4">
              Your Favorite Food,
              <br />
              Delivered Fast
            </h1>

            <p className="fs-5 mt-3">
              Order from thousands of restaurants and get it delivered to your
              doorstep
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button id="sign-up" className="btn px-4 py-2">
                Sign Up
              </button>

              <button id="order-now" className="btn px-4 py-2">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="restaurant-section py-5">
        <div className="container">
          <h2 className="fw-bold">Featured Restaurants</h2>

          <p>6 restaurants available</p>

          <div className="row g-4 mt-2">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                image={restaurant.image}
                name={restaurant.name}
                rating={restaurant.rating}
                description={restaurant.description}
                cuisines={restaurant.cuisines}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="Cravings-In-Numbers py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-2">Cravings by the Numbers</h2>

          <p className="mb-5">
            See why millions trust us for their daily food delivery needs
          </p>

          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <div className="card h-100 shadow-sm p-4">
                  <h1 className="display-6 fw-bold text-main">{stat.number}</h1>

                  <h5>{stat.title}</h5>

                  <p className="text-muted">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Our Customers Say</h2>
          </div>

          <div className="row g-4">
            {testimonials.map((review, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 p-4 shadow-sm">
                  <div className="text-warning fs-4">★★★★★</div>

                  <p>{review.text}</p>

                  <h6>{review.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="member-of-us py-5 text-center">
        {" "}
        <div className="container">
          <h1 className="fw-bold">Become a Restaurant Partner</h1>

          <p>
            Grow your business with Cravings. Join thousands of restaurants
            already delivering with us.
          </p>

          <button className="btn px-4 py-2">Partner With Us</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
