// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import img from '../assets/bg.jpg'
import { useNavigate } from 'react-router-dom';

const  Main = ({ onInputChange })=>{
    const [pname,setPname] = useState('')
    const navigate = useNavigate();
    const handleOnSubmit= async(e)=>{
        onInputChange(pname);
        // navigate('/result')
    }
    return (
        <>
        <Nav/>
        <br /><br /><br />
        <div className='flex-column mx-auto shadow-2xl w-5/12 h-96 text-center item-center justify-center'>
            <h1 className='text-4xl font-serif'>DETAILS</h1><br /><br />
            <input type="text" value={pname} placeholder='Enter Product Name' onChange={e => setPname(e.target.value)} className='bg-[#EAF0F7] border-4 border-purple-500 text-xl px-4  py-3 my-4 w-9/12 rounded-lg focus:outline-none' />       
            <input type="button" value="Search" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl px-20 py-3.5 font-bold my-12 rounded-3xl text-white shadow-md shadow-black hover:shadow-xl hover:shadow-black w-5/12 text-center no-underline' onClick={handleOnSubmit} />
        </div>
        </> 
      );
}

export default Main
