// import logo from './logo.svg';
import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import img from '../assets/bg.jpg'

function Contact() {
    return (
        <>
        <Nav/>
        <div className='flex-column text-center item-center justify-center'>
            <h1 className='mt-12 text-4xl'>Contact Us</h1><br />
            <p className='shadow-2xl shadow-zinc-500 w-fit p-12 text-xl mx-auto'>
                If you have any querries or suggestions for our site you can contact us by the following ways<br/><br/>
                <strong>Instagram:</strong> @info_center<br/><br/>
                <strong>Querry Mail:</strong> querrysupport@infocenter.in<br/><br/>
                <strong>Technical Mail:</strong> techsupport@infocenter.in<br/><br/>
                <strong>Linkedin:</strong> https://www.linkedin.com/info_center<br/><br/>
               Thank You for using our website!!
            </p>
        </div>
        </> 
      );
}

export default Contact
