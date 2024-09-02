import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from './images/your-logo.png';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const app = useRef(null);
  const navItems = useRef([]);
  const mobileMenuRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate nav items
      gsap.from(navItems.current, {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });

      // Animate logo
      gsap.from(".logo", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
      });

      // Animate button
      gsap.from(".get-started-btn", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

    }, app);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        height: toggleMenu ? "auto" : 0,
        duration: 0.5,
        ease: "power3.inOut"
      });

      if (toggleMenu) {
        gsap.from(".mobile-nav-item", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out"
        });
      }
    }
  }, [toggleMenu]);

  return (
    <div ref={app} className="app">
      <nav className="bg-pink-300">
        <div className="mx-auto pt-4 pb-2">
          <div className="flex mx-auto justify-between w-5/6 ">
          <div className="flex items-center space-x-4">
                <img src={logo} alt="CGG Logo" className="w-48 h-25" />
              </div>
            <div className="flex items-center gap-16 ">
             
              <div className="hidden lg:flex gap-8 ">
                {["Home", "Free-Resources", "Blog", "About Us"].map((item, index) => {
                  let href;
                  switch (item) {
                    case "Home":
                      href = "/";
                      break;
                    case "Free-Resources":
                      href = "/resources";
                      break;
                    case "Blog":
                      href = "/blog";
                      break;
                    case "About Us":
                      href = "/about-us";
                      break;
                    default:
                      href = "#";
                  }
                  return (
                    <Link key={index} to={href} className="hover:underline text-lg" ref={el => navItems.current[index] = el}>{item}</Link>
                  );
                })}
              </div>
            </div>

            <div className="xs:flex items-center flex md:gap-10 gap-2">

              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={mobileMenuRef}
          className={`fixed z-40 w-full bg-gradient-to-r from-pink-200 to-purple-200 overflow-hidden 
            flex flex-col lg:hidden gap-12 origin-top `}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider h-screen pt-4">
              {["Home", "Free-Resources", "Blog", "About Us"].map((item, index) => {
                let href;
                switch (item) {
                  case "Home":
                    href = "/";
                    break;
                  case "Free-Resources":
                    href = "/resources";
                    break;
                  case "Blog":
                    href = "/blog";
                    break;
                  case "About Us":
                    href = "/about-us";
                    break;
                  default:
                    href = "#";
                }
                return (
                  <Link key={index} to={href} className="mobile-nav-item">
                    <button onClick={() => setToggleMenu(!toggleMenu)}>
                      {item}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;

<header className="flex items-center justify-between px-6 ">

  <nav className="hidden md:flex space-x-8 text-gray-700">
    <a href="#" className="hover:text-pink-600 transition duration-300">Home</a>
    <a href="#" className="hover:text-pink-600 transition duration-300">Free Resources</a>
    <a href="#" className="hover:text-pink-600 transition duration-300">Blog</a>
    <a href="#" className="hover:text-pink-600 transition duration-300">About Us</a>
  </nav>
</header>
