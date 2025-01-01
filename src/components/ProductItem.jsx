// // import React, { useContext } from 'react'
// // import { ShopContext } from '../context/ShopContext'
// // import {Link} from 'react-router-dom'

// // const ProductItem = ({id,image,name,price}) => {

// //     const {currency} = useContext(ShopContext);

// //   return (
// //     <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
// //       <div className=' overflow-hidden'>
// //         <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
// //       </div>
// //       <p className='pt-3 pb-1 text-sm'>{name}</p>
// //       <p className=' text-sm font-medium'>{currency}{price}</p>
// //     </Link>
// //   )
// // }

// // export default ProductItem
// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { Link } from "react-router-dom";
// import "../styles/ProductItem.css";
// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);

//   return (
//     <Link
//       onClick={() => scrollTo(0, 0)}
//       className="text-gray-700 cursor-pointer"
//       to={`/product/${id}`}
//     >
//       <div className="relative overflow-hidden aspect-ratio-5-7">
//         <img
//           className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform ease-in-out"
//           src={image[0]}
//           alt={name}
//         />
//       </div>
//       <p className="pt-3 pb-1 text-sm">{name}</p>
//       <div className="flex items-center space-x-2">
//         <div className="text-sm font-medium line-through text-gray-500">
//           {currency}
//           {parseFloat(price) + 500}
//         </div>
//         <div className="text-sm font-medium text-black ">
//           {currency}
//           {price}
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductItem;
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import "../styles/ProductItem.css";

const ProductItem = ({ id, image, name, price, outOfStock }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="relative overflow-hidden aspect-ratio-5-7">
        {/* Product Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform ease-in-out"
          src={image[0]}
          alt={name}
        />

        {/* Out of Stock Badge */}
        {outOfStock && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center text-white font-semibold p-2">
            <p>Out of Stock</p>
          </div>
        )}
      </div>

      {/* Product Name */}
      <p className="pt-3 pb-1 text-sm">{name}</p>

      {/* Product Price */}
      <div className="flex items-center space-x-2">
        <div className="text-sm font-medium line-through text-gray-500">
          {currency}
          {parseFloat(price) + 500}
        </div>
        <div className="text-sm font-medium text-black">
          {currency}
          {price}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
