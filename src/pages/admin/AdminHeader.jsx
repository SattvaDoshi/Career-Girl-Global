import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../components/images/your-logo.png';
import toast from "react-hot-toast";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const app = useRef(null);
  const navItems = useRef([]);
  const mobileMenuRef = useRef(null);
  const logoutBtnRef = useRef(null);

  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('authToken');
    toast.success("User Logged Out Successfully")
    window.location.reload(); 
    setIsAuthenticated(false);
    navigate('/login', { replace: true });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(navItems.current, {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(".logo", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(logoutBtnRef.current, {
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
        <div className="mx-auto pb-2">
          <div className="flex mx-auto justify-between items-center w-5/6">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="CGG Logo" className="w-28 h-15" />
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex gap-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {["Home", "Internships", "Users", "Contact-Us","Blog"].map((item, index) => {
                  let href;
                  switch (item) {
                    case "Home":
                      href = "/";
                      break;
                    case "Internships":
                      href = "/admin/internship-details";
                      break;
                    case "Users":
                      href = "/admin/user-details";
                      break;
                    case "Contact-Us":
                      href = "/admin/contact-form";
                      break;
                    case "Blog":
                      href = "/admin/blogging";
                      break;
                    default:
                      href = "#";
                  }
                  return (
                    <Link key={index} to={href} className="hover:underline text-lg" ref={el => navItems.current[index] = el}>{item}</Link>
                  );
                })}
              </div>
              <button
                onClick={handleLogout}
                ref={logoutBtnRef}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </div>

            <div className="lg:hidden flex gap-3 items-center">
            <button
                onClick={handleLogout}
                ref={logoutBtnRef}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Logout
              </button>
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={mobileMenuRef}
          className={`fixed z-40 w-full bg-pink-300 overflow-hidden flex flex-col lg:hidden gap-12 origin-top`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider h-screen pt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {["Home", "Internships", "Users", "Contact-Us", "Blog"].map((item, index) => {
                  let href;
                  switch (item) {
                    case "Home":
                      href = "/";
                      break;
                    case "Internships":
                      href = "/admin/internship-details";
                      break;
                    case "Users":
                      href = "/admin/user-details";
                      break;
                    case "Contact-Us":
                      href = "/admin/contact-form";
                      break;
                    case "Blog":
                      href = "/admin/blogging";
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