'use client'
import { ReactNode } from 'react'

import Navbar from '/src/app/navbar.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'

import Link from 'next/link'

import { images } from './src/images'

import 'react-bootstrap';

import { Dropdown, DropdownButton, Stack, Button, Offcanvas, Nav, NavDropdown, Card } from 'react-bootstrap';

import CarouselDesign from '/src/app/carousel/page.tsx'

const obj = [
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
    image: ['https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://media.istockphoto.com/photos/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-picture-id1281304280',
    ],
  },
  {
    name: 'Jean shirt',
    image_url: 'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 450,
    delivery: 'Free Delivery',
    Rating: 4.0,
  },
  {
    name: 'Trending Jean',
    image_url: 'https://media.istockphoto.com/photos/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-picture-id1281304280',
    price: 600,
    delivery: 'Free Delivery',
    Rating: 4.8,
  },
  {
    name: 'Branded watch',
    image_url: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 250,
    delivery: 'Free Delivery',
    Rating: 4.3,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://media.istockphoto.com/photos/vintage-plates-with-silver-teaspoons-picture-id184363070',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/6463348/pexels-photo-6463348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://media.istockphoto.com/photos/modern-kitchen-microwave-oven-picture-id1148960519',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://media.istockphoto.com/photos/black-coffee-maker-with-green-led-lights-picture-id177395430',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'LJean shirt',
    image_url: 'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 450,
    delivery: 'Free Delivery',
    Rating: 4.0,
  },
  {
    name: 'Trending Jean',
    image_url: 'https://media.istockphoto.com/photos/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-picture-id1281304280',
    price: 600,
    delivery: 'Free Delivery',
    Rating: 4.8,
  },
  {
    name: 'Branded watch',
    image_url: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 250,
    delivery: 'Free Delivery',
    Rating: 4.3,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://media.istockphoto.com/photos/vintage-plates-with-silver-teaspoons-picture-id184363070',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/6463348/pexels-photo-6463348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://media.istockphoto.com/photos/modern-kitchen-microwave-oven-picture-id1148960519',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://media.istockphoto.com/photos/black-coffee-maker-with-green-led-lights-picture-id177395430',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  },
  {
    name: 'Latest white SHOE',
    image_url: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 300,
    delivery: 'Free Delivery',
    Rating: 4.5,
  }
];

export default function Main() {
  const [open, setOpen] = useState(false);

  const list = [
    {
      name: 'Appliances',
      ImageURL: "/images/Appliances.JPG",
    },
    {
      name: 'Electronics',
      ImageURL: "/images/Electronics.JPG",
    },
    {
      name: 'Fashion',
      ImageURL: "/images/Fashion.JPG",
    },
    {
      name: 'Grocery',
      ImageURL: "/images/Grocery.JPG",
    },
    {
      name: 'Furniture',
      ImageURL: "/images/Home&Furniture.JPG",
    },
    {
      name: 'Mobiles',
      ImageURL: "/images/Mobiles.JPG",
    },
    {
      name: 'Toys',
      ImageURL: "/images/Toys.JPG",
    },
    {
      name: 'Two wheelers',
      ImageURL: "/images/Twowheelers.JPG",
    }
  ];


  return (
    <>
      <marquee><i>Welcome to Online Store</i></marquee>
      <Navbar></Navbar>
      <div className="shadow-lg lg:h-32 h-28 mb-2">
        <ul className="flex gap-3 overflow-x-scroll no-scrollbar">
          {
            list.map((item,id) => (
              <li key={id}>
                <Card className="mt-2 lg:h-28 lg:w-28 w-24 h-24 hover:scale-90 duration-200 shadow-lg">
                  <a href="#">
                    <img className="lg:h-24 h-20 w-28" src={item.ImageURL} />
                  </a>

                  <Card.Text className="text-center text-xs">{item.name}</Card.Text>
                </Card>
              </li>
            ))
          }
        </ul>
      </div>
      <main>
        <CarouselDesign />
        <div className="h-14 text-center display-6">
          <marquee><i>TODAY'S OFFER</i></marquee>
        </div>
        <div className="my-3 h-72 shadow-2xl">
          <ul className="flex flex-row gap-2 overflow-x-scroll no-scrollbar ">
            {

              obj.map((item,id) => (

                <li key={id}>
                  <Card className="lg:h-72 h-68 lg:w-44 w-40  hover:scale-90 duration-200">
                    <img className="lg:h-64 h-60 lg:w-48 w-44" src={item.image_url} />
                    <Link href={{
                      pathname: '/singleitem',
                      query: {
                        name: item.name,
                        imageurl: item.image_url,
                        price: item.price,
                        Rating: item.Rating,
                        del_type: item.delivery,
                      },
                    }
                    }>

                      <Card.ImgOverlay className="h-full">
                        <div className="flex h-full text-red-600 font-semibold justify-center items-center hover:scale-150 duration-100">
                          50% OFFER
                        </div>
                      </Card.ImgOverlay>
                    </Link>

                    <Card.Text className="text-center text-xs">{item.name}</Card.Text>
                  </Card>
                </li>

              ))

            }
          </ul>
        </div>
        <div className="h-14 text-center text-bg-info display-6">
          <marquee>TODAY'S TOP SALES</marquee>
        </div>
        <div className="lg:h-72 md:h-68 h-64 mt-2 -ml-2">
          <ul className="flex flex-row gap-2 flex-wrap">
            {

              obj.map((item,id) => (
                <li key={id}>

                  <Card className="mb-2 lg:h-72 md:h-68 h-64 lg:w-44 md:w-40 w-32 hover:scale-90 duration-200">
                    <Link href={{
                      pathname: '/singleitem',
                      query: {
                        name: item.name,
                        imageurl: item.image_url,
                        price: item.price,
                        Rating: item.Rating,
                        del_type: item.delivery,
                      },
                    }
                    }>
                      <img className="lg:h-64 md:h-60 h-44 lg:w-44 md:w-40 w-36" src={item.image_url} />
                    </Link>
                    <Card.ImgOverlay className="h-7 w-full flex flex-row-reverse">
                      <div className="flex h-7 w-7 rounded-full bg-gray-300 justify-center items-center hover:scale-125 duration-200">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        
                      </div>
                    </Card.ImgOverlay>
                    <Card.Text className="text-center text-xs">{item.name}</Card.Text>
                  </Card>

                </li>
              ))

            }
          </ul>
        </div>
        <div className="flex flex-row">
          <div className=""></div>
        </div>
      </main>

    </>
  )

}