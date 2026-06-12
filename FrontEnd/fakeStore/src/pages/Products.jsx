import React from "react";

const Products = () => {
  return (
    <div className="p-10">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="border rounded-lg shadow-md p-4 flex flex-col justify-between w-75 h-100">
          <div className="h-48 flex items-center justify-center">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="Product"
              className="h-full object-contain"
            />
          </div>

          <h3 className="mt-4 text-center font-medium text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quo.
          </h3>

          <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
            Add To Cart
          </button>
        </div>
      </div>

      <div className="w-full h-50 border rounded-lg shadow-md p-4 mt-8 flex items-center gap-4 ">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          alt=""
          className="h-full object-contain"
        />

        <div>
          <h2 className="text-xl font-semibold">Product Name</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div>
          <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

// import React from "react";

// const Products = () => {
//   return (
//     <div className="p-10">
//       {/* Vertical Card */}
//       <div className="grid grid-cols-4 gap-6">
//         <div className="border rounded-lg shadow-md p-4">
//           <div className="h-48 flex items-center justify-center">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt=""
//               className="h-full object-contain"
//             />
//           </div>

//           <p className="mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>

//           <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">
//             Add To Cart
//           </button>
//         </div>
//       </div>

//       {/* Horizontal Card */}
//       <div className="w-full h-52 border rounded-lg shadow-md p-4 mt-8 flex items-center gap-4">
//         <img
//           src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//           alt=""
//           className="h-full object-contain"
//         />

//         <div>
//           <h2 className="text-xl font-semibold">Product Title</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
