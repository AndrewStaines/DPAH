import React, { useState } from 'react'
import img from '../assets/bg.jpg'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:4000/login', {
            method: "post",
            body: JSON.stringify({ name, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        if(result!="User Not Found"){
            alert("Welcome Back!!")
            navigate("/home")
        }
        else{
            alert("Incorrect Details :(")
        }
    }
    return (
        <> 
        <div className="w-screen h-screen flex flex-col  gap-4  bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})` }}>
          <div className='text-4xl font-serif font-semibold text-cyan-800' >
          <div className='flex  w-full h-full items-center justify-start '>
                <form className='mt-56 ml-80 border-8 rounded-xl border-sky-800 p-20'>
                    <h1 className='text-center mb-8'>Welcome Back...</h1>
                    <input type="text" value={name} placeholder='Enter Name' onChange={e => setName(e.target.value)} className='bg-[#EAF0F7] text-xl px-4  py-3 my-4 rounded-lg w-full focus:outline-none' />
                    <br />
                    <input type="password" value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} className='bg-[#EAF0F7] text-xl px-4  py-3 my-4 w-full rounded-lg focus:outline-none' />
                    <br />
                    <input type="button" value="login" className='bg-sky-800 text-xl px-20 py-3.5 font-bold my-12 rounded-3xl  text-white shadow-xl cursor-pointer hover:bg-white hover:text-cyan-800 w-96 text-center no-underline' onClick={handleOnSubmit} />
                </form>
            </div>
          </div>
          </div>
        </>
    )
}

export default Login;