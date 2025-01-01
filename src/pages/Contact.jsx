// export default Contact;
import React, { useState } from "react";
import axios from "axios"; // Import Axios
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/ce1bbe2a-3b48-4c04-837d-67b3344d2787",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response status is within the 2xx range
      if (response.status >= 200 && response.status < 300) {
        toast.success(
          "Thank you for reaching out! We've received your message and will get back to you shortly."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to save data.");
      }
    } catch (error) {
      console.error("Error:", error);

      // Provide more user-friendly error messages based on the error type
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        toast.error(
          `Failed to save data: ${
            error.response.data.message || "Unknown error"
          }`
        );
      } else if (error.request) {
        // Request was made but no response was received
        toast.error(
          "No response received from the server. Please try again later."
        );
      } else {
        // Something happened in setting up the request
        toast.error("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Contact Information */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            28, Narayan Nagar Society, Althan, <br /> Surat, Gujarat 395017
          </p>
          <p className="text-gray-500">
            Phone: (+91) 8401727008, (+91) 9909983838, (+91) 9033424502
            <br /> Email: futrclo@gmail.com
          </p>
          {/* <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button> */}
        </div>
      </div>

      {/* Contact Us Form */}
      <div className="my-10 mx-auto max-w-4xl p-5 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Name */}
          <div className="col-span-1 md:col-span-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-400 rounded focus:ring-1 focus:ring-black focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1 md:col-span-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-400 rounded focus:ring-1 focus:ring-black focus:outline-none"
              required
            />
          </div>

          {/* Subject (Optional) */}
          <div className="col-span-1 md:col-span-2">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-400 rounded focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (Optional)"
              rows="5"
              className="w-full px-4 py-2 border border-gray-400 rounded focus:ring-1 focus:ring-black focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* <NewsletterBox /> */}
    </div>
  );
};

export default Contact;
