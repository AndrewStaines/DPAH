// import logo from './logo.svg';
import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import img from '../assets/bg.mp4'
import amz from '../assets/amz.jpg'
import flp from '../assets/flp.jpg'
import myn from '../assets/Meesho.jpg'
import ins from '../assets/ins.png'
import g from '../assets/g.png'
import './Navbar.css'

function Home() {
    return (
        <div id='scroll' >
        <Nav/>
        <div>
          <div className="absolute top-0 left-0 bg-black over"></div>
          <video src={img} autoPlay loop muted className='w-full h-full'></video>
          <div className='absolute h-full w-full top-0 flex flex-col justify-center text-white align-center' >
            <h1 className='text-8xl mx-auto'>INFO CENTER</h1>
            <p className='text-xl mx-auto'>Collect your product's full details from one place</p>
            </div>
        </div>
        <h1 className='text-4xl text-center mt-24'>About Site</h1>
        <br /><br />
        <div className='flex flex-row text-center items-start mt-12 gap-48 justify-items-start det'>
            <p className='shadow-2xl shadow-zinc-500 w-fit px-24 py-12 text-xl'><strong>Features:</strong><br/><br/>
                All kind of products<br/><br/>
                Price Comparision<br/><br/>
                User Friendly<br/><br/>
            </p>
            <p className='shadow-2xl shadow-zinc-500 w-fit px-24 py-12 text-xl'><strong>Steps for Using:</strong><br/><br/>
                Search your product<br/><br/>
                Compare the price in various sites<br/><br/>
                Purchase your product at low cost<br/><br/>
            </p>
        </div>
        <br /><br />
        <div className="mt-12">
        <Link className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl px-20 py-3.5 font-bold rounded-3xl  text-white shadow-xl cursor-pointer text-center no-underline btt" to='/comp'>Compare →</Link>
        </div>
        <h1 className='text-4xl text-center mt-24'>Popular E-commerce Sites</h1>
        <div className="flex flex-row mt-12">
            <p className='mt-48 text-xl ml-24'>"<a href="https://www.amazon.in/" className='text-sky-500'>Amazon.com</a> , Inc. (/ˈæməzɒn/ AM-ə-zon, UK also /ˈæməzən/ AM-ə-zən) is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It has been often referred to as "one of the most influential economic and cultural forces in the world", and is often regarded as one of the world's most valuable brands. It is considered to be one of the Big Five American technology companies, alongside Alphabet (parent company of Google), Apple, Meta and Microsoft."</p><br />
            <img src={amz} alt="amazon" className='ml-auto border-2 border-purple-500 rounded-full'/>
        </div>
        <div className="flex flex-row mt-24">
        <img src={flp} alt="amazon" className='border-2 border-purple-500 rounded-full'/>
            <p className='mt-32 text-xl ml-24'>"<a href="https://www.flipkart.com/" className='text-sky-500'>Flipkart</a> Private Limited is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company. The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.

The service competes primarily with Amazon India and domestic rival Snapdeal. As of March 2017, Flipkart held a 39.5% market share in the Indian e-commerce industry. Flipkart has a dominant position in the apparel segment, bolstered by its acquisition of Myntra, and was described as being "neck and neck" with Amazon in the sale of electronics and mobile phones."</p><br />
        </div>
        <div className="flex flex-row mt-12">
            <p className='mt-48 text-xl ml-8'>"<a href="https://www.meesho.com/" className='text-sky-500'>Meesho</a> is an online shopping platform owned by the Indian company Fashnear Technologies Private Limited. It is an online marketplace that facilitates trade between suppliers, resellers and customers, with heavy reliance of external social media platforms such as Facebook and Instagram. Meesho had 209,000 users and 1.2 million orders per month in February 2019 and 563,000 users and 3.1 million orders per month in March 2020. It saw big growth during 2021 and 2022. Meesho's monthly transacting user count rose 26 times during 2020–2022. Globally, Meesho mobile app was among the top most downloaded apps in 2021."</p><br />
            <img src={myn} alt="amazon" className='ml-auto border-2 border-purple-500 rounded-full'/>
        </div>
        <br /><br /><br /><br />
        <div className='w-full h-80 bg-gradient-to-r from-violet-800 to-fuchsia-800 flex flex-row gap-12'>
            <div className="flex flex-col ml-12 mt-12">
            <h1 className='text-white text-4xl  font-mono'>INFO CENTER</h1>
            <br />
            <p className='text-white'>The mission of this website is to enable the users get their products at low cost from the best e-commerce site. <br />
            Currently the prices of the products are taken from Amazon, Flipkart, Meesho. In future we will update the prices <br /> of few more e-commerce sites. <br />
            Than you for visiting the website... Happy Shopping!!</p>
            </div>
            <div className="h-64 mt-12 bg-white w-1"></div>
            <div className="flex flex-col ml-12 mt-12">
            <h1 className='text-white text-4xl  font-mono'>Contact Us: <div className="flex mt-4 gap-4 flex-row">
            <img src={ins} alt="" className='h-12 w-12' />
            <img src={g} alt="" className='h-12 w-12' />
            </div> </h1>
            <br />
            <p className='text-white'> <strong>Instagram:</strong> @info_center<br/><br/>
                <strong>Querry Mail:</strong> querrysupport@infocenter.in<br/><br/>
                <strong>Technical Mail:</strong> techsupport@infocenter.in<br/><br/></p>
            </div>
        </div>
        </div> 
      );
}

export default Home
