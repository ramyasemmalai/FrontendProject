'use client'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import Link from 'next/link'

import { useRouter } from 'next/navigation'

export default function Register() {
    const router=useRouter();
    return (
        <>
            <div className="lg:h-screen md:h-screen flex justify-center items-center">
                <form className="lg:border-2 lg:border-black md:border-2 md:border-black p-3 flex gap-2 flex-col">
                    <div>
                        <h4>Register here to sell your product</h4>
                    </div>
                    <div>
                        <label>Mobile No</label><br/>
                        <div className='flex lg:flex-row md:flex-row flex-col gap-2 lg:gap-0 md:gap-0'>
                        <input type="number" name="number" placeholder="Enter your Number" className="p-2 border-black border-2 rounded-xl mr-2" required="" />
                        <Button className="w-1/2 ">Generate OTP</Button>
                        </div>
                    </div>
                    <div>
                        <label>Enter OTP</label><br/>
                        <input type="number" name="number" placeholder='Enter OTP' className="p-2 border-black border-2 rounded-xl"/>
                    </div>
                    <div>
                        <label>Email</label><br/>
                        <input type="email" name="email" placeholder="Enter your Email" className="p-2 border-black border-2 rounded-xl"/><br/>
                    </div>
                    
                    <div className="self-center mt-3">
                        <Button onClick={() => router.push('/')}>Create Account</Button>
                    </div>
                    <div className="self-center">
                        Already have an Account?<Link href="/sellerlogin">Login</Link>
                    </div>
                </form>
            </div>
        </>
    )
}