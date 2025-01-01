import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-20 h-22" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            The name FUTR is born from the bold philosophy 'Fu*k Up The Rules,'
            embodying the spirit of rebellion and individuality. Rooted in
            aesthetic streetwear, FUTR breaks boundaries by blending culture,
            modern art, and unapologetic style. It’s more than a brand—it’s a
            movement for those who dare to redefine the future on their own
            terms.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <li>About us</li>
            </NavLink>
            <NavLink
              to="/privacy-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <li>Privacy policy</li>
            </NavLink>
            <NavLink
              to="/shipping-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <li>Shipping Policy</li>
            </NavLink>
            <NavLink
              to="/return-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <li>Return And Refund Policy</li>
            </NavLink>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>futrclo@gmail.com</li>
            <li>(+91) 9909983838</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ FUTURE - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
