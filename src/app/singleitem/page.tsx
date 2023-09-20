'use client'
import React from "react"

import { Carousel } from 'react-bootstrap'

import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'src/app/navbar.tsx'

import { useSearchParams } from "next/navigation";


export default function single() {
    const value = useSearchParams();
    return (
        <div>
            <Navbar />
            <div className="flex gap-1 lg:flex-row flex-col">
                <div className="self-center m-4 flex flex-col gap-4 lg:h-1/4 lg:w-2/5 h-1/2 w-2/3 border-2 border-black p-3">
                    <div>
                    <Carousel interval={5000} variant="dark">
                            <Carousel.Item>
                                <img
                                    style={{ maxHeight: '100vh' }}
                                    className='d-block w-100' src={value.get("imageurl")} />
                            </Carousel.Item>
                            
                    </Carousel>
                    </div>
                    <div>Store name here....</div>
                    <div className="flex gap-2 justify-evenly">
                        <Button>Add to cart</Button>
                        <Button>Buy now</Button>
                    </div>
                </div>
                <div className="m-4">
                    <div className="h1">
                        {value.get("name")}
                    </div>
                    <div className="h2">
                        &#8377; {value.get("price")}
                    </div>
                    <div className="h3">
                        {value.get("Rating")}
                    </div>
                    <div className="h4">
                        {value.get("del_type")}
                    </div>

                </div>
            </div>
        </div>
    )
}