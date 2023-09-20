'use client'

import { Button } from 'react-bootstrap'

import { useRouter } from 'next/navigation'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Sellerlogin()
{
  const router = useRouter();
    return(
        <div  className="h-screen flex justify-center items-center bg-black">
           <div className="lg:border-2 lg:border-white md:border-2 md:border-white h-72 lg:w-2/7 sm:p-1 transperant flex flex-col p-3 rounded-xl text-white lg:hover:scale-125 duration-300">
             <form className="self-center">
             <label className="text-xl">Username</label><br/>
             <input type="text" required placeholder="Enter your name" className="text-black mt-1 rounded-xl focus:bg-gray-300  p-2 mb-2" /><br/>
             <label className="text-xl">Password</label><br/>
             <input required type="password" placeholder="Password" className="text-black mt-1 rounded-xl p-2 mb-2 focus:bg-gray-300 "/>
             <br/>
             <Button variant="primary" onClick={() => router.push('/')} type="button" className=" ml-16 border-2  self-center px-3 mt-3">Login</Button>
             </form>
             <p className="text-center mt-2">Don't have an account?<a href="/sellerregistration">Register here</a> </p>
           </div>
        </div>
    )
}