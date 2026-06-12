import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestaurantCard from "../components/RestaurantCard";

import slide1 from "../assets/images/slide1.jpg";

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
      <section className="relative h-[600px]">
        <img
          src={slide1}
          alt="Food Delivery"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-5xl font-bold">
              Your Favorite Food,
              <br />
              Delivered Fast
            </h1>

            <p className="text-white text-lg mt-4">
              Order from thousands of restaurants and get it delivered to your
              doorstep
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button className="px-6 py-3 rounded-md bg-[var(--color-primary)] text-white">
                Sign Up
              </button>

              <button className="px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-[var(--color-base-100)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Featured Restaurants</h2>

          <p className="mt-2 text-gray-600">6 restaurants available</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Cravings by the Numbers</h2>

          <p className="mb-10 text-gray-600">
            See why millions trust us for their daily food delivery needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-4xl font-bold text-[var(--color-primary)]">
                  {stat.number}
                </h1>

                <h5 className="text-lg font-semibold mt-2">{stat.title}</h5>

                <p className="text-gray-600 mt-2">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[var(--color-base-100)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-yellow-500 text-2xl mb-3">★★★★★</div>

                <p className="text-gray-700">{review.text}</p>

                <h6 className="font-semibold mt-4">{review.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 text-center bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Become a Restaurant Partner</h1>

          <p className="mt-4 max-w-2xl mx-auto">
            Grow your business with Cravings. Join thousands of restaurants
            already delivering with us.
          </p>

          <button className="mt-6 px-6 py-3 rounded-md bg-white text-[var(--color-primary)] font-semibold">
            Partner With Us
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
