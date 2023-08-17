import {FaSearch} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsChatLeft, BsMic } from 'react-icons/bs';
import {AiFillStar, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import {VscThumbsup, VscThumbsdown} from "react-icons/vsc";
import {LiaCocktailSolid} from "react-icons/lia"
import {PiForkKnife} from "react-icons/pi"
import {GoPerson} from "react-icons/go"
// import {BsFillPlayFill, BsBorderStyle} from 'react-icons/bs'

// import Twe enOne from 'rc-tween-one'

import chicken from "../src/assets/chicken.png"
import pasta from "../src/assets/pasta.png"
import spagheti from "../src/assets/spagheti.png"
import steak from "../src/assets/steak.png"
import Circle from './Components/Circle';
import './App.css';
// import { useState } from 'react';

function App() {
  // const element1:HTMLElement | number | null = document.getElementById("circle1");
  // const element2 = document.getElementById("circle2");
  // const path = element1 - element2;

//   const pi = 3.14159;
//   const circle1 = pi * 29.63 * 29.63
//   const circle2 = pi * 22 * 22
//   const path = circle1 - circle2
//  console.log(path)

  // const [change, setChange] = useState();
  const imageContent =[
    {
      firstName: 'Spagheti &',
      lastName: 'Meatballs',
      image: spagheti,
    },
    {
      firstName: 'Chicken',
      lastName: 'Filley',
      image: chicken,
    },
    {
      firstName: 'Pasta',
      lastName: 'Pak Adin',
      image: pasta,
    },
    {
      firstName: 'Steak',
      lastName: 'Filley',
      image: steak,
    }
  ];

  const chefContent = [
    {
      rating: 4.5,
      icon: <AiFillStar />,
      name: 'Chef Feny',
      meal: 'Spagheti & Meatballs',
      description: `A true culinary artist who paints the plate with vibrant flavors and textures, this chef's spaghetti and meatballs is a masterpiece that leaves you wanting more.`,
      likes: 45,
      dislikes: 0,
    },
    {
      rating: 5.0,
      icon: <AiFillStar />,
      name: 'Chef Feny',
      meal: 'Spagheti & Meatballs',
      description: `A true culinary artist who paints the plate with vibrant flavors and textures, this chef's spaghetti and meatballs is a masterpiece that leaves you wanting more.`,
      likes: 45,
      dislikes: 0,
    },
    {
      rating: 4.5,
      icon: <AiFillStar />,
      name: 'Chef Feny',
      meal: 'Spagheti & Meatballs',
      description: `A true culinary artist who paints the plate with vibrant flavors and textures, this chef's spaghetti and meatballs is a masterpiece that leaves you wanting more.`,
      likes: 45,
      dislikes: 0,
    },
    {
      rating: 4.5,
      icon: <AiFillStar />,
      name: 'Chef Feny',
      meal: 'Spagheti & Meatballs',
      description: `A true culinary artist who paints the plate with vibrant flavors and textures, this chef's spaghetti and meatballs is a masterpiece that leaves you wanting more.`,
      likes: 45,
      dislikes: 0,
    }
  ]

  return (
   <section className="bg-slate-100 relative w-full">
    <div className="grid grid-cols-2 w-[100vw] justify-center mx-auto gap-1">
      <div className='flex flex-col w-[70%] relative bg-purple-800'>
        {/* <div id="circle1" className="top-[-118vh] ml-[-14rem] p-4 relative h-[70rem] w-[70rem] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex justify-center items-center">
          <div id="circle2" className="bg-slate-100 rounded-full h-[52rem] w-[52rem]">
              <div className='absolute flex justify-center items-center mb-0 ml-[8rem] top-[120vh]'>
                <img src={spagheti} alt="" className='top-[122vh]' />
                <div className='' >
                  <span className='mb-2 font-roboto'>#1 Most loved dish</span><br />
                  <h1 className='text-7xl font-thin font-roboto'>Spagheti &</h1>
                  <h1 className='text-8xl font-black font-roboto mt-2'>MeatBalls</h1>
                </div>
              </div>
            
          </div>
          <div className='absolute flex justify-center items-center mb-0 mr-[-32rem] top-[174vh]'>
            <div className='flex justify-center items-center mr-6'>
              <BsFillPlayFill className="mr-2 text-xl" />
              <span>Play Video</span>
            </div>
            <div className='flex justify-center items-center ml-6'>
              <BsBorderStyle className="mr-2 text-xl" />
              <span>Order Food</span>
            </div>
          </div>
        </div> */}
        <Circle />
        <div className='flex items-center mx-auto relative'>
          <AiOutlineLeft className="text-2xl font-black"/>
          <div className='flex mx-auto px-2'>
            <div className='flex-col hover:bg-stone-200 bg-slate-200 justify-center w-[100px] items-center p-1 mx-6 rounded-md'>
              <img src={imageContent[0].image} alt="" className='w-18 h-20' />
              <h4 className='font-normal font-roboto text-md mx-auto text-center '>
                {imageContent[0].firstName} <br /> {imageContent[0].lastName}
              </h4>
            </div>
            <div className='flex-col hover:bg-stone-200 active:bg-slate-200 justify-center w-[100px] items-center p-1 mx-6 rounded-md'>
              <img src={imageContent[1].image} alt="" className='w-18 h-20 object-cover' />
              <h4 className='font-normal font-roboto text-md mx-auto text-center '>
                {imageContent[1].firstName} <br /> {imageContent[1].lastName}
              </h4>
            </div>
            <div className='flex-col hover:bg-stone-200 active:bg-slate-200 justify-center w-[100px] items-center p-1 mx-6 rounded-md'>
              <img src={imageContent[2].image} alt="" className='w-18 h-20 object-cover' />
              <h4 className='font-normal font-roboto text-md mx-auto text-center '>
                {imageContent[2].firstName} <br /> {imageContent[2].lastName}
              </h4>
            </div>
            <div className='flex-col hover:bg-stone-200 active:bg-slate-200 justify-center w-[100px] items-center p-1 mx-6 rounded-md'>
              <img src={imageContent[3].image} alt="" className='w-18 h-20 object-cover' />
              <h4 className='font-normal font-roboto text-md mx-auto text-center '>
                {imageContent[3].firstName} <br /> {imageContent[3].lastName} 
              </h4>
            </div>
          </div>
          <AiOutlineRight className=" text-2xl font-black "/>
        </div>
        <div className='flex justify-center items-center mx-auto my-8 relative'>
          <div className='p-2 hover:bg-stone-300 rounded-lg flex justify-center items-center mx-[2.5rem]'><PiForkKnife className="text-2xl font-semibold"/></div>
          <div className='p-2 hover:bg-stone-300 rounded-lg flex justify-center items-center mx-[2.5rem]'><LiaCocktailSolid className="text-2xl font-semibold"/></div>
          <div className='p-2 hover:bg-stone-300 rounded-lg flex justify-center items-center mx-[2.5rem]'><BsChatLeft className="text-2xl font-semibold"/></div>
          <div className='p-2 hover:bg-stone-300 rounded-lg flex justify-center items-center mx-[2.5rem]'><GoPerson className="text-2xl font-semibold"/></div>
          <div className='p-3 hover:bg-stone-300 rounded-full bg-white flex justify-center items-center mx-[2.5rem]'><BsMic className="text-2xl font-semibold"/></div>
        </div>
      </div>
      <div className='flex-col flex mx-auto w-[30%] relative bg-black'>
        <div className='flex justify-center items-center relative h-[14vh] w-[30rem]'>
          <FaSearch className="text-xl mr-4" />
          <GiHamburgerMenu className="text-xl" />
        </div>
        <div className='flex flex-col mx-auto mt-2 bg-gray-200 h-[30rem] w-[20rem] rounded-lg'>
          <div className='flex text-center mx-auto mt-5'>
            <h5 className='text-md mr-4 font-semibold'>Overview</h5>
            <h5 className='text-md text-gray-700 ml-4'>Ingredients</h5>
          </div>
          <div className='w-12 mt-6 ml-6 pl-4 h-16 flex flex-col justify-center bg-green-800 rounded-lg'>
            <h2 className='text-4xl font-black'>
              {chefContent[0].rating}
            </h2>
            <AiFillStar />
          </div>
          <div className='flex flex-col mx-auto justify-center px-6 mt-4'>
            <h3 className='text-xl font-bold'>
              {chefContent[0].name}
            </h3>
            <span className='text-xs py-1 text-slate-400'>
              {chefContent[0].meal}
            </span>
            <p className='text-base font-roboto font-normal mt-1 leading-tight'>
              {chefContent[0].description}
            </p>
            <div className='flex items-center mt-4'>
              <div className='p-2 bg-slate-300 mr-3 rounded-lg flex items-center'>
                <VscThumbsup className="mr-2" />
                <span> {chefContent[0].likes} likes</span>
              </div>
              <div className='p-2 bg-slate-300 ml-3 rounded-lg flex items-center'>
                <VscThumbsdown className="mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default App
