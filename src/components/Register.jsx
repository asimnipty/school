import React from "react";
import regImg from "../assets/reg.jpeg";

const Register = () => {
  return (
    <div className="p-6 h-screen text-center bg-cover bg-center bg-[url('/src/assets/imgHome.jpg')]">
      <h1 className="text-4xl font-bold">Register for reunion</h1>
      <p className="mt-4 text-lg">Registration comming soon... stay tuned</p>
      <div className=" pt-4 w-full text-center">
        <img className=" size-[150px] rounded-full mx-auto" src={regImg} alt="img" />
      </div>
    </div>
  );
};

export default Register;
