import React from 'react';
import { Github, Twitter, Youtube, Instagram, Heart } from 'lucide-react';
import { Logo } from './common/Logo';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Youtube size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' }
  ];

  const footerLinks = [
    { title: 'Company', links: ['About', 'Careers', 'Press'] },
    { title: 'Resources', links: ['Blog', 'Newsletter', 'Help Center'] },
    { title: 'Legal', links: ['Terms', 'Privacy', 'Cookies'] }
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo className="h-10 mb-6 hover:opacity-80 transition-opacity" />
            <p className="text-gray-400 mb-6">
              Experience the future of gaming in Night City.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-red-300 transition-colors drop-shadow-[0_0_8px_rgba(252,165,165,0.3)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4 drop-shadow-[0_0_8px_rgba(252,165,165,0.3)]">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-300 transition-colors drop-shadow-[0_0_8px_rgba(252,165,165,0.3)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 drop-shadow-[0_0_8px_rgba(252,165,165,0.3)]">
            © 2024 Cybershade. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center drop-shadow-[0_0_8px_rgba(252,165,165,0.3)]">
            Made with <Heart size={16} className="text-red-300 mx-1" /> in Night City
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;