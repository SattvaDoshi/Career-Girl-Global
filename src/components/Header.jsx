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
      <nav className="bg-pink-200">
        <div className="mx-auto pt-2 pb-2">
          <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
            {/* Adjusted margin and width of the logo */}
            <div className="flex items-center ">
              <img src={logo} alt="CGG Logo" className="w-20 h-20 logo ml-2" />
            </div>
            {/* Navbar links */}
            <div className="hidden text-pink-600  lg:flex gap-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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
                  <Link
                    key={index}
                    to={href}
                    className="hover:underline text-lg font-medium"
                    ref={el => navItems.current[index] = el}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          ref={mobileMenuRef}
          className={`fixed z-40 w-full bg-pink-200 overflow-hidden flex flex-col lg:hidden gap-6 origin-top`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-6 font-bold tracking-wider h-screen pt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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
                  <Link key={index} to={href} className="mobile-nav-item text-pink-600">
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
