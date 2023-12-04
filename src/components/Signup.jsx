import React, { useState } from 'react'
import img from '../assets/bg.jpg'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        if (password != confirmpassword) {
            alert("Password is not same")
            return
        }
        e.preventDefault();
        let result = await fetch(
            'http://localhost:4000/register', {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        if(result){
            alert("Successfully Registered")
            navigate("/home")
        }
        console.log(result)
    }
    return (
        <>
            <div className="w-screen h-screen flex flex-col  gap-4  bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})` }}>
          <div className='text-4xl font-serif font-semibold text-white' >
          <div className='flex  w-full h-full items-center justify-start '>
                <form className='mt-36 mx-auto rounded-xl bg-[#cbc3e399] font-serif shadow-2xl  shadow-black p-20'>
                    <h1 className='text-center mb-8'>Welcome To The Info Center...</h1>
                    <input type="text" value={name} placeholder='Enter Name' onChange={e => setName(e.target.value)} className='bg-[#EAF0F7] text-black border-4 border-fuchsia-500 text-xl px-4  py-3 my-4 w-full rounded-lg focus:outline-none' />
                    <br />
                    <input type="text" value={email} placeholder='Enter Email' onChange={e => setEmail(e.target.value)} className='bg-[#EAF0F7] text-black border-4 border-fuchsia-500 text-xl px-4  py-3 my-4 w-full rounded-lg focus:outline-none' />
                    <br />
                    <input type="password" value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} className='bg-[#EAF0F7] text-black border-4 border-fuchsia-500 text-xl px-4  py-3 my-4 w-full rounded-lg focus:outline-none' />
                    <br />
                    <input type="password" value={confirmpassword} placeholder='Enter Password' onChange={e => setConfirmpassword(e.target.value)} className='bg-[#EAF0F7] text-black border-4 border-fuchsia-500 text-xl px-4  py-3 my-4 w-full rounded-lg focus:outline-none' />
                    <br />
                    <input type="button" value="Register" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl px-20 py-3.5 my-12 rounded-3xl  text-white shadow-lg hover:shadow-xl hover:shadow-black cursor-pointer w-full text-center no-underline' onClick={handleOnSubmit} />
                </form>
            </div>
          </div>
          </div>
        </>
    )
}

export default Signup