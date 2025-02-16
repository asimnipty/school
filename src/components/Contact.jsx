import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-6 h-screen text-center items-center bg-cover bg-center bg-[url('/src/assets/imgHome.jpg')]">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">Email: info@ourschool.com</p>
      <p>Phone: +123 456 7890</p>
      <div className="p-6 space-x-3 flex justify-center text-red-500 items-center">
        <a
          className=" text-4xl"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          className=" text-4xl"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          className=" text-4xl"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  );
};

export default Contact;
