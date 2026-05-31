// ES7 me React by default imported hota h isliye err show ho skta h
// website run krne k liye dependencies use hoti h
// website develop krne k liye dev dependencies use hoti h

//  import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="abcd">My First React App</div>

      <p className="bg-succes">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis velit
        harum laborum ab minima! Nesciunt, exercitationem at atque vitae omnis
        ut eaque doloribus eius fugit?
      </p>

      <Footer />
    </>
  );
}

export default App;
