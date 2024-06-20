import { useState } from "react";
import {
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import logo from './images/your-logo.png'; // Adjust the path as needed


function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav className="bg-gradient-to-r from-pink-200 to-purple-200">
        <div className=" mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">

            <div className="flex items-center gap-16 my-8">
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-pink-500 items-center "
                >                
                  <span className="md:text-2xl text-lg">Carrer Girl Global</span>
                </a>
              </div>

              <div className="hidden lg:flex gap-8 ">
                <a href="#" className="hover:underline text-lg">Home</a>
                <a href="#" className="hover:underline text-lg">Benefits</a>
                <a href="#" className="hover:underline text-lg">Our Classes</a>
                <a href="#" className="hover:underline text-lg">Contact Us</a>
              </div>
            </div>

            <div className=" xs:flex items-center flex md:gap-10 gap-2">
            <button className="rounded-full border-solid border-2 py-2 px-4 md:px-8 text-white bg-pink-500 hover:bg-pink-600">
  Get Started
</button>


              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gradient-to-r from-pink-200 to-purple-200 overflow-hidden 
            flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
            }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;