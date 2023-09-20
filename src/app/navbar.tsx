'use client'
import { ReactNode } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'

import 'react-bootstrap';

import Link from 'next/link'

import {  Button, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';

import { useRouter } from 'next/navigation'


export default function Navbar() {
  const router = useRouter()
    const [open, setOpen] = useState(false);
  
    return (
      <>
      <div className="bg-purple-900 lg:bg-white md:bg-white h-28 lg:h-14 md:h-14">
        <header className="flex h-14 items-center gap-2 bg-purple-900">
          <Button variant="info" onClick={() => setOpen(!open)} className="ml-2 hover:scale-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 14 14"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Button>
          <Offcanvas show={open} onHide={() => setOpen(false)} className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="display-6"><p className="text-gray-600 font-semibold">Online Store...</p></Offcanvas.Title>
            </Offcanvas.Header>
            <Nav className="flex mt-3 flex-col justify-center items-center gap-4">
              <Nav.Item className="flex h-10 gap-2 hover:scale-125 duration-200 hover:text-pink-500 font-semibold text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-house-fill w-7 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </svg>
                <Link href='/' className="text-white text-decoration-none">Home</Link>
              </Nav.Item>
              <Nav.Item className="flex h-10 gap-2 hover:scale-125 duration-200 hover:text-pink-500 font-semibold text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-heart-fill w-7 h-6"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <Link href='/' className="text-white text-decoration-none">Favourites</Link>
              </Nav.Item>
              <Nav.Item className="flex h-10 gap-2 hover:scale-125 duration-200 hover:text-pink-500  font-semibold text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-cart-check  w-7 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <Link href='/' className="text-white text-decoration-none ">Shopping Bag</Link>
                </Nav.Item>
              <Nav.Item className="h-10 hover:scale-125 duration-200 hover:text-pink-500  font-semibold text-xl">
              <Link href='/sellerregistration' className="text-white text-decoration-none">Become a seller</Link>
              </Nav.Item>
              <Nav.Item className="flex h-10 gap-2 hover:scale-125 duration-200 hover:text-pink-500 font-semibold text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-box-arrow-in-right w-7 h-6"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
                <Link href='/' className="text-white text-decoration-none">Login</Link>
                </Nav.Item>
            </Nav>
          </Offcanvas>
          <div className="md:-ml-2 mt-3 mt-3 text-right lg:text-2xl md:text-xl lg:mt-2 sm:mt-1 text-white h-12 lg:w-48 md:w-48 w-16 sm:pl-2">
              <p>Onlinestore..</p>
            </div>
            <div className="self-center pr-4 w-3/5 hidden lg:block md:block">
              <div className="flex flex-row-reverse items-center">
                <input type="text" placeholder="Search for products,Brands and more.." className="p-2 sm:px-0 md:px-5 lg:px-5 w-full" />
                <i className="pl-2 absolute hidden lg:block md:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 pr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="ml-4 flex gap-3 p-4 -mr-14 lg:mr-4">
              <div>
                <Link href="/Favourites">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-heart-fill w-7 h-6"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                </Link>
              </div>
              <div>
                <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-cart-check  w-7 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                </Link>
              </div>
            </div>
          <Nav className="flex">
            <ul className="flex h-12 items-center">
              <Link href="/sellerregistration" className="hidden lg:block cursor-pointer">
                Become a seller
              </Link>
              <NavDropdown title="Login">
                <NavDropdown.Item>
                  <button onClick={() => router.push('/sellerlogin')}>Seller login</button></NavDropdown.Item>
                <NavDropdown.Item>Customer Login</NavDropdown.Item>
              </NavDropdown>
            </ul>
  
          </Nav>
        </header>
        <div className="self-center block lg:hidden md:hidden self-center pr-4 w-full m-2  search">
              <div className="flex flex-row-reverse items-center">
                <input type="text" placeholder="Search for products,Brands and more.." className="p-2 sm:px-0 md:px-5 lg:px-5 w-full" />
                <i className="pl-2 absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 pr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </i>
              </div>
            </div>
        </div>
      </>
    )
  
  }
  