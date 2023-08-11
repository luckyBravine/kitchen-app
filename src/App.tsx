import {FaSearch} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';

function App() {

  return (
   <section className="bg-slate-100 relative">
    <div className="flex flex-row">
      <div className="top-[-110vh] overflow-hidden ml-[-12rem] p-4 relative h-[70rem] w-[70rem] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex justify-center items-center">
        <div className="bg-white rounded-full h-[52rem] w-[52rem]"></div>
      </div>
      <div className='flex-col flex w-[30rem] relative'>
        <div className='flex justify-center items-center relative h-[14vh] w-[30rem]'>
          <FaSearch className="text-xl mr-4" />
          <GiHamburgerMenu className="text-xl" />
        </div>
        <div className='flex mx-auto mt-2 bg-gray-200 h-[30rem] w-[20rem] rounded-lg'></div>
      </div>
    </div>
   </section>
  )
}

export default App
