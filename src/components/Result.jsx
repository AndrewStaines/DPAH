import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './Navbar.css';
import axios from 'axios';

const Result = ({ inputValue }) => {
  const [p, setP] = useState('Product Not Available');
  const [p1, setP1] = useState('Product Not Available');
  const [p2, setP2] = useState('Product Not Available');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/amazon?query=${inputValue}`);
        const pr=response.data
        setP(pr.price);
      } catch (error) {
        console.error(error);
      }
    };

    

    fetchData();
  }, [inputValue]);


  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response1 = await axios.get(`http://localhost:2000/flip?query=${inputValue}`);
        const pr1=response1.data
        setP1(pr1.price);
      } catch (error) {
        console.error(error);
      }
    };

    

    fetchData1();
  }, [inputValue]);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response2 = await axios.get(`http://localhost:2000/mees?query=${inputValue}`);
        const pr2=response2.data
        setP2(pr2.price);
      } catch (error) {
        console.error(error);
      }
    };

    

    fetchData2();
  }, [inputValue]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Nav />
      <br /><br />
      <h1 className='text-4xl font-serif pr'>Prices of {inputValue}</h1><br />
      <div className='flex flex-col pr1'>
        <h2 className='text-2xl'>Amazon: {p}</h2><br />
        <h2 className='text-2xl'>Flipkart: {p1}</h2><br />
        <h2 className='text-2xl'>Meesho: {p2}</h2><br />
        <button onClick={handleRefresh} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl px-20 py-3.5 font-bold my-12 rounded-3xl text-white shadow-md shadow-black hover:shadow-xl hover:shadow-black w-fit text-center no-underline'>Search Another Product</button>
      </div>
    </>
  );
};

export default Result;