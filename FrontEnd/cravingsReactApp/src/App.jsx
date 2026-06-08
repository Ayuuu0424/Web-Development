import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const App = () => {
//   return (
//     <>
//       <div className="bg-red-500 text-amber-800 p-3.25">App</div>

//       <button className="bg-blue-400 p-3 border border-blue-800">submit</button>

//     </>
//   );
// };

// export default App;
