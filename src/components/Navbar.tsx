import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-xl border-b-2 border-bc-anti/30 z-50 px-6 py-3 shadow-[0_4px_20px_rgba(255,0,0,0.15)]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <div className="group cursor-pointer">
          <span className="font-display text-2xl font-black tracking-widest text-white group-hover:text-bc-anti transition-colors duration-500 uppercase">
            Lie<span className="text-bc-anti drop-shadow-[0_0_8px_#ff0000]">be</span>
          </span>
          <div className="h-[2px] w-0 group-hover:w-full bg-bc-anti transition-all duration-500 shadow-[0_0_10px_#ff0000]"></div>
        </div>

        <div className="hidden md:flex items-center gap-10 font-display text-sm tracking-[0.2em] uppercase">
          {[
            ["Home", "#home"],
            ["Personagens", "#personagens"],
            ["Magias", "#magias"],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="relative text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              {title}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-bc-anti group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#ff0000]"></span>
            </a>
          ))}
          
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-bc-anti hover:scale-110 transition-transform"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-7 h-0.5 bg-bc-anti transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-7 h-0.5 bg-bc-anti transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-7 h-0.5 bg-bc-anti transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      <div className={`md:hidden absolute left-0 w-full bg-black/95 border-b border-bc-anti/50 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col p-6 gap-6 font-display tracking-widest text-center uppercase">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-bc-anti transition-colors">Home</a>
          <a href="#personagens" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-bc-anti transition-colors">Personagens</a>
          <a href="#magias" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-bc-anti transition-colors">Magias</a>
          
        </div>
      </div>
    </nav>
  );
}