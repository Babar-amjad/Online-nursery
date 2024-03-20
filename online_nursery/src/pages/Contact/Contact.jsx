import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    address: '',
    city: '',
    country: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5500/register";
      const { data: res } = await axios.post(url, data);
      console.log(data);

      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="bg-black text-white px-2 sm:px-32 h-screen pt-24">
    <form className="max-w-md mx-auto " onSubmit={handleSubmit}>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="firstname" value={data.firstname} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 0 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="floating_firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="lastname" value={data.lastname} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 0 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="floating_lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="email" name="email" value={data.email} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 0 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      </div>
   
      <div className="relative z-0 w-full mb-5 group">
        <input type="password" name="password" value={data.password} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 0 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="address" value={data.address} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 0 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="floating_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="city" value={data.city} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 0 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="country" value={data.country} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 0 appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
        <label htmlFor="floating_country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
      </div>
     
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    </div>
  );
};

export default Contact;
