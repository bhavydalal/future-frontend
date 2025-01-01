import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, buyNow, user } =
    useContext(ShopContext);
  const [productData, setProductData] = useState(null); // Start with null instead of false
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description"); // State to track active tab

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  const handleBuyNow = () => {
    window.scrollTo(0, 0);
    const token = localStorage.getItem("token"); // Check token in localStorage
    if (!token) {
      toast.error("You have to login first"); // Show toast error
      navigate("/login"); // Redirect to login page
      return;
    }
    buyNow(productData._id, size); // Proceed with buyNow functionality
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*----------- Product Data-------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*---------- Product Images------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-medium line-through text-gray-400">
              {currency}
              {parseFloat(productData.price) + 500}
            </div>
            <div className="text-3xl font-medium text-black">
              {currency}
              {productData.price}
            </div>
          </div>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description
              .split("\n") // Split the description by newlines
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br /> {/* Insert a line break after each line */}
                </React.Fragment>
              ))}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                  disabled={productData.outOfStock} // Disable buttons if out of stock
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            disabled={productData.outOfStock} // Disable Add to Cart if out of stock
            className={`border px-8 py-3 me-3 text-sm font-medium rounded-sm ${
              productData.outOfStock ? "bg-gray-300 cursor-not-allowed" : ""
            }`}
          >
            ADD TO CART
          </button>
          <button
            onClick={handleBuyNow}
            disabled={productData.outOfStock} // Disable Buy Now if out of stock
            className={`bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ${
              productData.outOfStock ? "bg-gray-300 cursor-not-allowed" : ""
            }`}
          >
            BUY NOW
          </button>
          {/* -------- Out of Stock Message -------- */}
          {productData.outOfStock && (
            <div className="inline-block bg-red-100 text-red-600 font-semibold p-2 rounded-lg mt-4 md:px-8 px-4">
              <p>Sorry, this product is currently out of stock.</p>
            </div>
          )}

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 3 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className="mt-20">
        {/* Tab Navigation */}
        <div className="flex">
          <p
            className={`border px-5 py-3 text-sm cursor-pointer ${
              activeTab === "description" ? "bg-gray-200 font-bold" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </p>
          <p
            className={`border px-5 py-3 text-sm cursor-pointer ${
              activeTab === "sizeChart" ? "bg-gray-200 font-bold" : ""
            }`}
            onClick={() => setActiveTab("sizeChart")}
          >
            Size Chart
          </p>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              Please note the following care instructions for your product to
              maintain its quality:
              <br />
              <br />
              <strong>Do Not Iron On The Print:</strong> To preserve the
              integrity and longevity of the print, avoid ironing directly on
              the printed area. Iron the fabric carefully, ensuring the design
              remains undisturbed.
              <br />
              <br />
              <strong>Reverse Wash Only:</strong> For best results, turn the
              garment inside out before washing. This helps protect the print
              and ensures the fabric stays in great condition after multiple
              washes.
            </p>
          </div>
        )}

        {activeTab === "sizeChart" && (
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <h3 className="font-semibold text-lg">Size Chart</h3>
            <img
              src={assets.size_chart}
              alt="Size Chart"
              className="mt-4 max-w-full h-auto md:w-1/2" // Set width to 50% for medium and larger screens
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>

      {/* --------- display related products ---------- */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        productId={productId}
      />
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
};

export default Product;
