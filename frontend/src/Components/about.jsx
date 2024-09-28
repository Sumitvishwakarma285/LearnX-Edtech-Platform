import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaUser, FaSun, FaMoon, FaTimes, FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, FaBriefcase, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import profilePic from '../images/pic-1.jpg';
import aboutImg from '../images/about-img.svg';
import pic2 from '../images/pic-2.jpg';
import pic3 from '../images/pic-3.jpg';
import pic4 from '../images/pic-4.jpg';
import pic5 from '../images/pic-5.jpg';
import pic6 from '../images/pic-6.jpg';
import pic7 from '../images/pic-7.jpg';

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to system preference if no theme is saved
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to the body
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
        {/* Header */}
        <header className={`shadow-md p-4 sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center">
            <Link to="/home" className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LearnX</Link>

            {/* Search Form */}
            <form className={`relative ${searchOpen ? 'block' : 'hidden'} md:flex items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg p-3 w-1/2`}>
              <input
                type="text"
                placeholder="courses..."
                maxLength="100"
                className={`flex-grow bg-transparent ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-lg focus:outline-none`}
              />
              <button type="submit">
                <FaSearch className={`text-xl ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`} />
              </button>
            </form>

            {/* Icons for Menu, Search, User, Theme */}
            <div className="flex items-center space-x-4 text-2xl">
              <FaBars onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
              <FaUser onClick={() => setUserDropdownOpen(!userDropdownOpen)} className="cursor-pointer" />
              {isDarkMode ? (
                <FaSun onClick={toggleTheme} className="cursor-pointer text-yellow-300" />
              ) : (
                <FaMoon onClick={toggleTheme} className="cursor-pointer text-blue-700" />
              )}
            </div>

            {/* User Dropdown */}
            {userDropdownOpen && (
              <div className={`absolute top-16 right-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-4 text-center`}>
                <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pratyush Ji</h3>
                <p className={`text-gray-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Student</p>
                <Link to="/profile" className={`block bg-green-600 text-white py-2 mt-3 rounded-lg mx-auto`}>
                  View Profile
                </Link>
                <div className="flex space-x-2 justify-center mt-2">
                  <Link to="/login" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Login</Link>
                  <Link to="/register" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Register</Link>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Sidebar */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMenuOpen(false)}></div>
            <div className={`fixed left-0 top-0 w-80 h-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-50 p-6`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Menu</h3>
                <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
              </div>

              <div className="text-center py-6">
                <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
                <h3 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Pratyush Ji</h3>
                <p className={`text-gray-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Student</p>
                <Link to="/profile" className={`block bg-green-600 text-white py-2 mt-3 rounded-lg w-3/4 mx-auto`}>
                  View Profile
                </Link>
              </div>

              <nav className="mt-6 space-y-4">
                <Link to="/" className={`flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <FaGraduationCap className="mr-3 text-green-600" />
                  <span>Home</span>
                </Link>
                <Link to="/about" className={`flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <FaSun className="mr-3 text-green-600" />
                  <span>About</span>
                </Link>
                <Link to="/courses" className={`flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <FaGraduationCap className="mr-3 text-green-600" />
                  <span>Courses</span>
                </Link>
                <Link to="/teachers" className={`flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <FaChalkboardTeacher className="mr-3 text-green-600" />
                  <span>Teachers</span>
                </Link>
                <Link to="/contact" className={`flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <FaBriefcase className="mr-3 text-green-600" />
                  <span>Contact Us</span>
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* About Section */}
        <section className="about p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="image">
              <img src={aboutImg} alt="About Us" className="w-full h-auto" />
            </div>

            <div className="content">
              <h3 className="text-3xl font-semibold">Why Choose Us?</h3>
              <p className={`text-white dark:text-gray-800 mt-4`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis
                fuga. Iure perferendis accusamus voluptatum? Tenetur explicabo reprehenderit
                consequatur ab beatae ipsa libero, eaque quaerat asperiores, quibusdam
                optio? Tempora, reiciendis.
              </p>
              <Link to="/courses" className={`inline-block ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} text-white px-4 py-2 rounded-md mt-4`}>
                Our Courses
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="box flex items-center space-x-4">
              <FaGraduationCap className={`text-3xl ${isDarkMode ? 'text-blue-500' : 'text-blue-500'}`} />
              <div>
                <h3 className="text-xl font-semibold">+10k</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Online Courses</p>
              </div>
            </div>

            <div className="box flex items-center space-x-4">
              <FaUserGraduate className={`text-3xl ${isDarkMode ? 'text-blue-500' : 'text-blue-500'}`} />
              <div>
                <h3 className="text-xl font-semibold">+40k</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Brilliant Students</p>
              </div>
            </div>

            <div className="box flex items-center space-x-4">
              <FaChalkboardTeacher className={`text-3xl ${isDarkMode ? 'text-blue-500' : 'text-blue-500'}`} />
              <div>
                <h3 className="text-xl font-semibold">+2k</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Expert Tutors</p>
              </div>
            </div>

            <div className="box flex items-center space-x-4">
              <FaBriefcase className={`text-3xl ${isDarkMode ? 'text-blue-500' : 'text-blue-500'}`} />
              <div>
                <h3 className="text-xl font-semibold">100%</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Job Placement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className={`reviews p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h1 className="text-3xl font-semibold mb-8">Student's Reviews</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[pic2, pic3, pic4, pic5, pic6, pic7].map((pic, index) => (
              <div key={index} className={`box ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-4 shadow-md`}>
                <p className={`text-gray-600 ${isDarkMode ? 'text-white' : 'text-gray-600'} mb-4`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                  suscipit a.
                </p>
                <div className="student flex items-center space-x-4">
                  <img src={pic} alt={`Student ${index + 1}`} className="w-10 h-10 rounded-full" />
                  <div>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</h3>
                    <div className="stars flex space-x-1 text-yellow-500">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={`footer ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white text-center p-4`}>
          &copy; Copyright 2024 by <span className="text-blue-500">LearnX</span> | All rights reserved!
        </footer>
      </div>
    </div>
  );
};

export default About;
