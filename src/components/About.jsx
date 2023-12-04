// import logo from './logo.svg';
import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import img from '../assets/bg.jpg'

function About() {
    return (
        <>
        <Nav/>
        <div className='flex-column text-center item-center justify-center'>
            <h1 className='mt-12 text-4xl'>About Us</h1><br />
            <p className='shadow-2xl shadow-zinc-500 w-fit p-12 text-xl mx-auto'>This is a website created to provide the users the overview of a product in various E-commerse sites.<br/><br/>
                By knowing the price of a product in various platforms, you can be aware of the price variation in<br/><br/>
                multiple E-commerce sites. You just have to type in the name of the product and receive full details<br/><br/>
                about the product. The website gets real-time data from the E-commerce websites. So the prices are <br/><br/>
                up-to date.The user-friendly interface helps easy navigation through the site. This not just saves<br/><br/>
                your money it also saves time. You can compare the price of the product in various sites. This site<br/><br/>
                was created by students of Kongu Enginnering College, with a team of 5 members.
            </p>
        </div>
        </> 
      );
}

export default About
