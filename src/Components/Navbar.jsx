import React, { useState ,useEffect} from 'react';
import {CircleSlash2, Github,Linkedin,Mail} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="fixed top-7 right-13 z-30 flex flex-col gap-0.5 justify-center items-center w-15 h-15 rounded-full transition-all duration-800 ease-out hover:bg-blue-400 hover:scale-120"
        aria-label="Toggle menu">
        <span className={`bg-black block transition-all duration-400 ease-out h-0.6 w-9 rounded-sm ${isOpen ? 'rotate-45 translate-y-2 h-1' : '-translate-y-0.5 h-0.5'}`}></span>
        <span className={`bg-black block transition-all duration-200 ease-out h-0.5 w-9 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-black block transition-all duration-400 ease-out h-0.6 w-9 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5 h-1' : 'translate-y-0.5 h-0.5'}`}></span>
      </button>

      <div
        className={`fixed inset-0 bg-blue-300 z-20 transition-transform duration-900 ease-out-in ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="w-screen flex items-center justify-center h-screen text-black">
          <nav className="flex items-center gap-10 text-2xl">
            <a target='_blank' href="https://github.com/adwickakarsh" className="transition-all rounded-xl duration-500 ease-out bg-black p-7 text-blue-300 hover:text-blue-100 hover:scale-125 hover:bg-blue-600" onClick={toggleMenu}>
              <Github size={50} strokeWidth={1.3}/>
            </a>
            <a href="https://linkedin.com/in/adwickakarsh" target='_blank' className="transition-all rounded-xl duration-500 ease-out bg-black p-7 text-blue-300 hover:text-blue-100 hover:scale-125 hover:bg-blue-600" onClick={toggleMenu}>
              <Linkedin size={50} strokeWidth={1.3} />
            </a>
            <a href="mailto:adwick0704@gmail.com" target='_blank' className="transition-all rounded-xl duration-500 ease-out bg-black p-7 text-blue-300 hover:text-blue-100 hover:scale-125 hover:bg-blue-600" onClick={toggleMenu}><Mail size={50} strokeWidth={1.3} /></a>
          </nav>
        </div>
      </div>
      <div className={`fixed w-15 h-15 flex items-center justify-center left-10 top-7 z-50 rounded-full transition-all duration-800 ease-out hover:bg-blue-400 hover:scale-120 ${isOpen ? 'rotate-135':'rotate-45'}`}
      onClick={scrollToTop}>
        <CircleSlash2 size={35} />
      </div>
      <div className='fixed h-22 w-screen backdrop-blur-[3px]'>
      </div>
    </div>
  );
};

export default Navbar;