"use client"

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-blue py-4 lg:border-blg:border-blue">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-20 w-20 mr-2" />
    
        </div>

        {/* Navigation Links */}
        <nav className={`hidden lg:flex ${menuOpen ? 'flex-col' : 'space-x-2'}`}>
          <a href="/master" className="hover:text-gray-400">Master</a>
          <a href="/committee" className="hover:text-gray-400">Committee</a>
          <a href="/players" className="hover:text-gray-400">Players</a>
          <a href="/ladies" className="hover:text-gray-400">Ladies</a>
          <a href="/life-member" className="hover:text-gray-400">Life Member</a>
          <a href="/trustee" className="hover:text-gray-400">Trustee</a>
          <a href="/elves" className="hover:text-gray-400">Elves</a>
          <a href="/coaches" className="hover:text-gray-400">Coaches</a>
          <a href="/patrons" className="hover:text-gray-400">Patrons</a>
          <a href="/juniors" className="hover:text-gray-400">Juniors</a>
          <a href="/junior-parent" className="hover:text-gray-400">Junior Parent</a>
          <a href="/dinner-invites" className="hover:text-gray-400">Dinner Invites</a>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue focus:outline-none focus:blue"
          >
            <svg
              fill="#0A0068"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Hamburger Menu Content */}
      {menuOpen && (
        <div className="lg:hidden mt-4">
          <a href="/master" className="block py-2">Master</a>
          <a href="/committee" className="block py-2">Committee</a>
          <a href="/players" className="block py-2">Players</a>
          <a href="/ladies" className="block py-2">Ladies</a>
          <a href="/life-member" className="block py-2">Life Member</a>
          <a href="/trustee" className="block py-2">Trustee</a>
          <a href="/elves" className="block py-2">Elves</a>
          <a href="/coaches" className="block py-2">Coaches</a>
          <a href="/patrons" className="block py-2">Patrons</a>
          <a href="/juniors" className="block py-2">Juniors</a>
          <a href="/junior-parent" className="block py-2">Junior Parent</a>
          <a href="/dinner-invites" className="block py-2">Dinner Invites</a>
        </div>
      )}
    </header>
  );
};

export default Header;
