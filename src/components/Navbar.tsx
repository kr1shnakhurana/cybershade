import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './common/Logo';

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <a
    href={href}
    className={`relative text-gray-300 hover:text-white transition-colors duration-200 group drop-shadow-[0_0_8px_rgba(252,165,165,0.3)] ${
      isActive ? 'text-white' : ''
    }`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-red-300 transform origin-left transition-transform duration-300 ${
      isActive ? 'scale-x-100' : 'scale-x-0'
    } group-hover:scale-x-100`} />
  </a>
);

const MobileNavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <a
    href={href}
    className={`block px-4 py-3 text-base relative rounded-lg ${
      isActive ? 'text-white bg-white/10' : 'text-gray-300'
    }`}
  >
    <span className="relative z-10">{children}</span>
    <span className={`absolute inset-0 bg-gradient-to-r from-pink-400/10 to-red-300/10 rounded-lg transform origin-left transition-transform duration-300 ${
      isActive ? 'scale-x-100' : 'scale-x-0'
    }`} />
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'features'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo className="hover:opacity-80 transition-opacity" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#home" isActive={activeSection === 'home'}>Home</NavLink>
              <NavLink href="#about" isActive={activeSection === 'about'}>About</NavLink>
              <NavLink href="#features" isActive={activeSection === 'features'}>Features</NavLink>
              
              <button className="relative group px-6 py-2 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-300 transition-transform group-hover:scale-105" />
                <span className="relative text-white font-bold">Play Now</span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#home" isActive={activeSection === 'home'}>Home</MobileNavLink>
            <MobileNavLink href="#about" isActive={activeSection === 'about'}>About</MobileNavLink>
            <MobileNavLink href="#features" isActive={activeSection === 'features'}>Features</MobileNavLink>
            
            <button className="w-full mt-4 relative group px-6 py-3 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-300" />
              <span className="relative text-white font-bold">Play Now</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;