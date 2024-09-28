import React, { useState, useEffect } from "react";
import { FaBars, FaSearch, FaUser, FaSun, FaMoon, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from "react-icons/fa";
import { Link } from 'react-router-dom';
import profilePic from '../images/pic-1.jpg';

const Login = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Update theme based on state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-all duration-300`}>
      {/* Header Section */}
      <header className={`shadow sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <section className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className={`text-4xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>LearnX</Link>

          {/* Search Form */}
          <form action="search.html" method="post" className={`hidden md:flex items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg p-3 w-1/2`}>
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              maxLength="100"
              className={`flex-grow bg-transparent text-lg ${darkMode ? 'text-gray-100' : 'text-gray-800'} focus:outline-none`}
            />
            <button type="submit" className={`text-xl ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
              <FaSearch />
            </button>
          </form>

          {/* Icons for Menu, Search, User, Theme */}
          <div className="flex space-x-4 text-2xl">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            <FaSearch className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            <FaUser onClick={() => setUserDropdownOpen(!userDropdownOpen)} className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            {darkMode ? (
              <FaMoon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-gray-100" />
            ) : (
              <FaSun onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-gray-700" />
            )}
          </div>

          {/* User Dropdown */}
          {userDropdownOpen && (
            <div className={`absolute top-16 right-8 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} rounded-lg shadow-lg p-4 text-center`}>
              <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>shaikh anas</h3>
              <p className={`text-${darkMode ? 'gray-400' : 'gray-500'}`}>student</p>
              <Link to="profile.html" className={`block ${darkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 mt-3 rounded-lg`}>
                View Profile
              </Link>
              <div className="flex space-x-2 justify-center mt-2">
                <Link to="/login" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Login</Link>
                <Link to="/register" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Register</Link>
              </div>
            </div>
          )}
        </section>
      </header>

      {/* Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMenuOpen(false)}></div>
          <div className={`fixed left-0 top-0 w-80 h-full ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} shadow-lg z-50 p-6`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Menu</h3>
              <FaTimes className={`text-2xl cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} onClick={() => setMenuOpen(false)} />
            </div>

            <div className="text-center py-6">
              <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
              <h3 className={`text-xl ${darkMode ? 'text-gray-100' : 'text-gray-900'} font-semibold`}>Pratyush ji</h3>
              <p className={`text-${darkMode ? 'gray-400' : 'gray-500'}`}>student</p>
              <Link to="/profile" className={`block ${darkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 mt-3 rounded-lg w-3/4 mx-auto`}>
                View Profile
              </Link>
            </div>

            <nav className="mt-6 space-y-4">
              <Link to="/" className={`flex items-center px-6 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <FaHome className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span>Home</span>
              </Link>
              <Link to="/about" className={`flex items-center px-6 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <FaQuestion className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span>About</span>
              </Link>
              <Link to="/courses" className={`flex items-center px-6 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <FaGraduationCap className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span>Courses</span>
              </Link>
              <Link to="/teachers" className={`flex items-center px-6 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <FaChalkboardTeacher className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span>Teachers</span>
              </Link>
              <Link to="/contact" className={`flex items-center px-6 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <FaHeadset className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

       {/* Login Form */}
       <section className={`form-container ${darkMode ? 'text-white' : 'text-gray-900'} flex-grow flex justify-center items-center`}>
        <form action="" method="post" encType="multipart/form-data" className={`shadow-md p-8 rounded-lg max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Login Now</h3>

          <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            maxLength="50"
            className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`}
          />

          <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Your Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="pass"
            placeholder="Enter your password"
            required
            maxLength="20"
            className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`}
          />

          <input type="submit" value="Login Now" name="submit" className={`btn bg-green-600 text-white py-2 px-4 rounded-lg w-full ${darkMode ? 'hover:bg-green-500' : 'hover:bg-green-700'}`} />
        </form>
      </section>

      {/* Footer */}
      <footer className={`py-4 text-center ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-800 text-white'}`}>
        &copy; Copyright 2024 by <span className="font-bold">Mr.Sumit</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Login;
