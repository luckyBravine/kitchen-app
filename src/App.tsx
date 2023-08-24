import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChatLeft, BsMic } from "react-icons/bs";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { VscThumbsup, VscThumbsdown } from "react-icons/vsc";
import { LiaCocktailSolid } from "react-icons/lia";
import { PiForkKnife } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import {BsFillPlayFill, BsBorderStyle} from 'react-icons/bs'


import chicken from "../src/assets/chicken.png";
import pasta from "../src/assets/pasta.png";
import spagheti from "../src/assets/spagheti.png";
import steak from "../src/assets/steak.png";
// import Circle from "./Components/Circle";

import { gsap } from "gsap";

import "./App.css";
import { useState, useRef, useEffect, MutableRefObject } from "react";

function App() {
  const imageList: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const imageSlide: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const chefList: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  type StateType = {
    isActive1: boolean,
    isActive2: boolean,
    isActive3: boolean,
    isActive4: boolean,
  }

  const [state, setState] = useState<StateType>({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  });

  useEffect(() => {
    gsap.to(chefList.current?.children[0], 0, {
      opacity: 1,
    });
    gsap.to(imageSlide.current?.children[0], 0,{
      backgroundColor: '#E2E8F0',
    })
  }, []);

  const fadeOut = (index:number, duration:number) => {
    gsap.to(chefList.current?.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index:number, duration:number) => {
    gsap.to(chefList.current?.children[index], duration, {
      opacity: 1,
      delay: 0.5,
    });
  };

  const nextSlide = () => {
    if (imageSlide.current?.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      gsap.to(imageSlide.current?.children[0], 1,{
        backgroundColor: 'transparent',
      })
      gsap.to(imageSlide.current?.children[1], 1,{
        backgroundColor: '#E2E8F0',
      })
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageSlide.current?.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      gsap.to(imageSlide.current?.children[1], 1,{
        backgroundColor: 'transparent',
      })
      gsap.to(imageSlide.current?.children[2], 1,{
        backgroundColor: '#E2E8F0',
      })
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageSlide.current?.children[2].classList.contains("active")) {
      setState({ isActive3: false, isActive4: true });
      gsap.to(imageSlide.current?.children[2], 1,{
        backgroundColor: 'transparent',
      })
      gsap.to(imageSlide.current?.children[3], 1,{
        backgroundColor: '#E2E8F0',
      })
      //content transition
      fadeOut(2, 1);
      fadeIn(3, 1);
    }else if (imageSlide.current?.children[3].classList.contains("active")) {
      setState({ isActive1: true, isActive4: false });
      gsap.to(imageSlide.current?.children[3], 1,{
        backgroundColor: 'transparent',
      })
      gsap.to(imageSlide.current?.children[0], 1,{
        backgroundColor: '#E2E8F0',
      })
      //content transition
      fadeOut(3, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageSlide.current?.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive4: true });
      gsap.to(imageSlide.current?.children[0], 1,{
        backgroundColor: 'transparent',
      })
      gsap.to(imageSlide.current?.children[3], 1,{
        backgroundColor: '#E2E8F0',
      })
      //content transtion
      fadeOut(0, 1);
      fadeIn(3, 1);
    } else if (imageSlide.current?.children[1].classList.contains("active")) {
      setState({  isActive2: false, isActive1: true });
      gsap.to(imageSlide.current?.children[1], 1,{
        backgroundColor: 'transparent',
      })
      gsap.to(imageSlide.current?.children[0], 1,{
        backgroundColor: '#E2E8F0',
      })
      
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageSlide.current?.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      gsap.to(imageSlide.current?.children[2], 1,{
        backgroundColor: 'transparent',
      })
      gsap.to(imageSlide.current?.children[1], 1,{
        backgroundColor: '#E2E8F0',
      })
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    } else if (imageSlide.current?.children[3].classList.contains("active")) {
      setState({ isActive3: true, isActive4: false });
      gsap.to(imageSlide.current?.children[3], 1,{
        backgroundColor: 'transparent',
      })
      gsap.to(imageSlide.current?.children[2], 1,{
        backgroundColor: '#E2E8F0',
      })
      //content transtion
      fadeOut(3, 1);
      fadeIn(2, 1);
    }
  };

  const imageContent = [
    {
      firstName: "Spagheti &",
      lastName: "Meatballs",
      image: spagheti,
    },
    {
      firstName: "Chicken",
      lastName: "Fillet",
      image: chicken,
    },
    {
      firstName: "Pasta",
      lastName: "Pak Adin",
      image: pasta,
    },
    {
      firstName: "Steak",
      lastName: "Fillet",
      image: steak,
    },
  ];
  const chefContent = [
    {
      rating: 4.5,
      icon: <AiFillStar />,
      name: "Chef Feny",
      meal: "Spagheti & Meatballs",
      description: `A true culinary artist who paints the plate with vibrant flavors and textures, this chef's spaghetti and meatballs is a masterpiece that leaves you wanting more.`,
      likes: 45,
      dislikes: 0,
      bgColor: '#228B22'
    },
    {
      rating: 5.3,
      icon: <AiFillStar />,
      name: "Chef Ali",
      meal: "Chicken Fillet",
      description: `When it comes to chicken fillet, Chef Ali is a true maestro. His dishes are a perfect symphony of flavors, textures, and presentation, leaving a lasting impression that's hard to forget`,
      likes: 68,
      dislikes: 0,
      bgColor: '#7851A9'
    },
    {
      rating: 5.5,
      icon: <AiFillStar />,
      name: "Chef Kadzo",
      meal: "Pasta Pak Adin",
      description: `Eating pasta from this chef is like taking a trip to Italy with each forkful. The way they capture the essence of Italian cuisine is truly remarkable.`,
      likes: 105,
      dislikes: 0,
      bgColor: '#FFFF00'
    },
    {
      rating: 4.8,
      icon: <AiFillStar />,
      name: "Chef Wafula",
      meal: "Steak Fillet",
      description: `A culinary virtuoso with a fillet as their masterpiece. This chef's attention to detail and dedication to perfection are truly remarkable.`,
      likes: 54,
      dislikes: 0,
      bgColor: '#FFDB58'
    },
  ];

  return (
    <section className="bg-slate-100 relative w-full overflow-hidden">
      <div className="grid grid-cols-3 w-[100vw] justify-center mx-auto gap-1 overflow-hidden">
        <div
          className="flex flex-col col-span-2 relative min-w-[100%] mx-auto"
          ref={(el) => {
            imageList.current = el;
          }}
        >
          <div id="circle1" className="top-[-120vh] ml-[-16rem] p-4 relative h-[70rem] w-[70rem] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex justify-center items-center">
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
        </div>
          {/* <Circle images={imageContent} /> */}
          <div className="flex items-center mx-auto relative top-[-105vh]">
            <AiOutlineLeft
              className="text-2xl font-black"
              onClick={prevSlide}
            />
            <div
              className="flex mx-auto px-2"
              ref={(el) => {
                imageSlide.current = el;
              }}
            >
              <div
                className={`${state.isActive1 ? "active" : ""} flex-col hover:bg-stone-200 justify-center w-[100px] items-center p-1 mx-6 rounded-md`}
              >
                <img src={imageContent[0].image} alt="" className="w-18 h-20" />
                <h4 className="font-normal font-roboto text-md mx-auto text-center ">
                  {imageContent[0].firstName} <br /> {imageContent[0].lastName}
                </h4>
              </div>
              <div
                className={`${state.isActive2 ? "active" : ""} flex-col hover:bg-stone-200 justify-center w-[100px] items-center p-1 mx-6 rounded-md`}
              >
                <img
                  src={imageContent[1].image}
                  alt=""
                  className="w-18 h-20 object-cover"
                />
                <h4 className="font-normal font-roboto text-md mx-auto text-center ">
                  {imageContent[1].firstName} <br /> {imageContent[1].lastName}
                </h4>
              </div>
              <div
                className={`${state.isActive3 ? "active" : ""} flex-col hover:bg-stone-200 justify-center w-[100px] items-center p-1 mx-6 rounded-md`}
              >
                <img
                  src={imageContent[2].image}
                  alt=""
                  className="w-18 h-20 object-cover"
                />
                <h4 className="font-normal font-roboto text-md mx-auto text-center ">
                  {imageContent[2].firstName} <br /> {imageContent[2].lastName}
                </h4>
              </div>
              <div
                className={`${state.isActive4 ? "active" : ""} flex-col hover:bg-stone-200 justify-center w-[100px] items-center p-1 mx-6 rounded-md`}
              >
                <img
                  src={imageContent[3].image}
                  alt=""
                  className="w-18 h-20 object-cover"
                />
                <h4 className="font-normal font-roboto text-md mx-auto text-center ">
                  {imageContent[3].firstName} <br /> {imageContent[3].lastName}
                </h4>
              </div>
            </div>
            <AiOutlineRight
              className=" text-2xl font-black "
              onClick={nextSlide}
            />
          </div>
          <div className="flex justify-center items-center mx-auto relative top-[-101vh]">
            <div className="p-2 hover:bg-stone-300 rounded-lg flex justify-center items-center mx-[2.5rem]">
              <PiForkKnife className="text-2xl font-semibold" />
            </div>
            <div className="p-2 hover:bg-stone-300 rounded-lg flex justify-center items-center mx-[2.5rem]">
              <LiaCocktailSolid className="text-2xl font-semibold" />
            </div>
            <div className="p-2 hover:bg-stone-300 rounded-lg flex justify-center items-center mx-[2.5rem]">
              <BsChatLeft className="text-2xl font-semibold" />
            </div>
            <div className="p-2 hover:bg-stone-300 rounded-lg flex justify-center items-center mx-[2.5rem]">
              <GoPerson className="text-2xl font-semibold" />
            </div>
            <div className="p-3 hover:bg-stone-300 rounded-full bg-white flex justify-center items-center mx-[2.5rem]">
              <BsMic className="text-2xl font-semibold" />
            </div>
          </div>
        </div>
        <div className="flex-col flex mx-auto relative min-w-[100%]">
          <div className="flex justify-center items-center relative h-[12vh]">
            <FaSearch className="text-xl mr-4" />
            <GiHamburgerMenu className="text-xl" />
          </div>
          <div className="flex flex-col mx-auto mt-2 bg-gray-200 h-[30rem] w-[20rem] rounded-lg">
            <div className="flex text-center mx-auto mt-5">
              <h5 className="text-md mr-4 font-semibold">Overview</h5>
              <h5 className="text-md text-gray-700 ml-4">Ingredients</h5>
            </div>
            <div
              className="flex relative w-[20rem] mx-auto"
              ref={(el) => {
                chefList.current = el;
              }}
            >
              <div className={`${state.isActive1 ? "active" : "opacity-0"} absolute`}>
                <div className="w-12 mt-6 ml-6 pl-4 h-16 flex flex-col justify-center bg-green-800 rounded-lg">
                  <h2 className="text-4xl font-black">
                    {chefContent[0].rating}
                  </h2>
                  <AiFillStar />
                </div>
                <div className="flex flex-col mx-auto justify-center px-6 mt-4">
                  <h3 className="text-xl font-bold">{chefContent[0].name}</h3>
                  <span className="text-xs py-1 text-slate-400">
                    {chefContent[0].meal}
                  </span>
                  <p className="text-base font-roboto font-normal mt-1 leading-tight">
                    {chefContent[0].description}
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="p-2 bg-slate-300 mr-3 rounded-lg flex items-center">
                      <VscThumbsup className="mr-2" />
                      <span> {chefContent[0].likes} likes</span>
                    </div>
                    <div className="p-2 bg-slate-300 ml-3 rounded-lg flex items-center">
                      <VscThumbsdown className="mr-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${state.isActive2 ? "active" : "opacity-0"} absolute`}>
                <div className="w-12 mt-6 ml-6 pl-4 h-16 flex flex-col justify-center bg-purple-800 rounded-lg">
                  <h2 className="text-4xl font-black">
                    {chefContent[1].rating}
                  </h2>
                  <AiFillStar />
                </div>
                <div className="flex flex-col mx-auto justify-center px-6 mt-4">
                  <h3 className="text-xl font-bold">{chefContent[1].name}</h3>
                  <span className="text-xs py-1 text-slate-400">
                    {chefContent[1].meal}
                  </span>
                  <p className="text-base font-roboto font-normal mt-1 leading-tight">
                    {chefContent[1].description}
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="p-2 bg-slate-300 mr-3 rounded-lg flex items-center">
                      <VscThumbsup className="mr-2" />
                      <span> {chefContent[1].likes} likes</span>
                    </div>
                    <div className="p-2 bg-slate-300 ml-3 rounded-lg flex items-center">
                      <VscThumbsdown className="mr-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${state.isActive3 ? "active" : "opacity-0"} absolute`}>
                <div className="w-12 mt-6 ml-6 pl-4 h-16 flex flex-col justify-center bg-yellow-800 rounded-lg">
                  <h2 className="text-4xl font-black">
                    {chefContent[2].rating}
                  </h2>
                  <AiFillStar />
                </div>
                <div className="flex flex-col mx-auto justify-center px-6 mt-4">
                  <h3 className="text-xl font-bold">{chefContent[2].name}</h3>
                  <span className="text-xs py-1 text-slate-400">
                    {chefContent[2].meal}
                  </span>
                  <p className="text-base font-roboto font-normal mt-1 leading-tight">
                    {chefContent[2].description}
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="p-2 bg-slate-300 mr-3 rounded-lg flex items-center">
                      <VscThumbsup className="mr-2" />
                      <span> {chefContent[2].likes} likes</span>
                    </div>
                    <div className="p-2 bg-slate-300 ml-3 rounded-lg flex items-center">
                      <VscThumbsdown className="mr-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${state.isActive4 ? "active" : "opacity-0"} absolute`}>
                <div className="w-12 mt-6 ml-6 pl-4 h-16 flex flex-col justify-center bg-gray-800 rounded-lg">
                  <h2 className="text-4xl font-black">
                    {chefContent[3].rating}
                  </h2>
                  <AiFillStar />
                </div>
                <div className="flex flex-col mx-auto justify-center px-6 mt-4">
                  <h3 className="text-xl font-bold">{chefContent[3].name}</h3>
                  <span className="text-xs py-1 text-slate-400">
                    {chefContent[3].meal}
                  </span>
                  <p className="text-base font-roboto font-normal mt-1 leading-tight">
                    {chefContent[3].description}
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="p-2 bg-slate-300 mr-3 rounded-lg flex items-center">
                      <VscThumbsup className="mr-2" />
                      <span> {chefContent[3].likes} likes</span>
                    </div>
                    <div className="p-2 bg-slate-300 ml-3 rounded-lg flex items-center">
                      <VscThumbsdown className="mr-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
