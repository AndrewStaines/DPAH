// import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/bg.jpg'

function Landing() {
    return (
        <div className="w-screen h-screen flex flex-col  gap-4  bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})` }}>
          <div className='text-8xl font-serif font-semibold mx-auto text-white' >
            <h1 className='mt-72 ml-20'>INFO</h1>
            <h2 className=''>CENTER</h2>
          </div>
          <div className="flex flex-row gap-12 mx-auto mt-8">
                        <Link className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl px-20 py-3.5 font-bold my-12 rounded-3xl  text-white shadow-xl cursor-pointer w-96 text-center no-underline" to='/signup'>Signup</Link>
                        <Link className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl px-20 py-3.5 font-bold my-12 rounded-3xl  text-white shadow-xl cursor-pointer w-96 text-center no-underline" to='/login'>Login</Link>
                        </div>
        </div>
      );
}

export default Landing
