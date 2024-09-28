import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaUser, FaSun, FaMoon, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import profilePic from '../images/pic-1.jpg';
import contactImg from '../images/contact-img.svg';

const Contact = () => {
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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} ${menuOpen ? 'blur-background' : ''} transition-all duration-300`}>
      {/* Sidebar Menu */}
      {menuOpen && (
        <div className={`fixed top-0 left-0 h-full w-80 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} shadow-lg z-40`}>
          <div className="flex justify-end p-4">
            <FaTimes onClick={() => setMenuOpen(false)} className={`text-2xl ${darkMode ? 'text-gray-100' : 'text-gray-700'} cursor-pointer`} />
          </div>

          <div className="text-center py-6">
            <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
            <h3 className="text-xl font-semibold">{darkMode ? 'Shaikh Anas' : 'Pratyush ji'}</h3>
            <p className={`text-${darkMode ? 'gray-400' : 'gray-500'}`}>Student</p>
            <Link to="/profile" className={`block ${darkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 mt-3 rounded-lg w-3/4 mx-auto text-center`}>
              View Profile
            </Link>
          </div>

          <nav className="mt-6 space-y-4">
            <Link to="/" className={`flex items-center px-6 py-3 hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaHome className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>Home</span>
            </Link>
            <Link to="/about" className={`flex items-center px-6 py-3 hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaQuestion className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>About</span>
            </Link>
            <Link to="/courses" className={`flex items-center px-6 py-3 hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaGraduationCap className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>Courses</span>
            </Link>
            <Link to="/teachers" className={`flex items-center px-6 py-3 hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaChalkboardTeacher className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>Teachers</span>
            </Link>
            <Link to="/contact" className={`flex items-center px-6 py-3 hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaHeadset className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>Contact Us</span>
            </Link>
          </nav>
        </div>
      )}

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header Section */}
      <header className={`shadow sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <section className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className={`text-4xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>LearnX</Link>

          {/* Search Form */}
          <form action="search.html" method="post" className={`flex items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg p-3 w-1/2`}>
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              maxLength="100"
              className={`flex-grow bg-transparent text-${darkMode ? 'gray-100' : 'gray-800'} text-lg focus:outline-none`}
            />
            <button type="submit">
              <FaSearch className={`text-${darkMode ? 'gray-100' : 'gray-700'} text-xl`} />
            </button>
          </form>

          {/* Icons for Menu, User, Theme */}
          <div className="flex space-x-4 text-2xl">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            <FaUser onClick={() => setUserDropdownOpen(!userDropdownOpen)} className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            {darkMode ? (
              <FaMoon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-gray-100" />
            ) : (
              <FaSun onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-gray-700" />
            )}
          </div>

          {/* User Dropdown */}
          {userDropdownOpen && (
            <div className={`absolute top-20 right-8 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} rounded-lg shadow-lg p-4 text-center z-50`}>
              <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Shaikh Anas</h3>
              <p className={`text-${darkMode ? 'gray-400' : 'gray-500'}`}>Student</p>
              <Link to="/profile" className={`block ${darkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 mt-3 rounded-lg`}>
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

      {/* Contact Section */}
      <section className="contact p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="image">
            <img src={contactImg} alt="Contact Us" className="w-full h-auto" />
          </div>

          <form action="" method="post" className="space-y-4">
            <h3 className="text-3xl font-semibold">Get in Touch</h3>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              maxLength="50"
              className={`block w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}`}
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              maxLength="50"
              className={`block w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}`}
            />
            <input
              type="number"
              placeholder="Enter your number"
              name="number"
              required
              maxLength="50"
              className={`block w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}`}
            />
            <textarea
              name="msg"
              className={`block w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}`}
              placeholder="Enter your message"
              required
              maxLength="1000"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className={`inline-block ${darkMode ? 'bg-blue-700' : 'bg-blue-500'} text-white px-4 py-2 rounded-md`}
              name="submit"
            />
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className={`box ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} p-4 shadow-md text-center`}>
            <FaPhone className={`text-3xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mb-3`} />
            <h3 className="text-xl font-semibold">Phone Number</h3>
            <a href="tel:1234567890" className={`block ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>123-456-7890</a>
            <a href="tel:1112223333" className={`block ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>111-222-3333</a>
          </div>

          <div className={`box ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} p-4 shadow-md text-center`}>
            <FaEnvelope className={`text-3xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mb-3`} />
            <h3 className="text-xl font-semibold">Email Address</h3>
            <a href="mailto:shaikhanas@gmail.com" className={`block ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>vsumit@gmail.com</a>
            <a href="mailto:anasbhai@gmail.com" className={`block ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>sumit@gmail.com</a>
          </div>

          <div className={`box ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} p-4 shadow-md text-center`}>
            <FaMapMarkerAlt className={`text-3xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mb-3`} />
            <h3 className="text-xl font-semibold">Office Address</h3>
            <a href="#" className={`block ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>Flat No. 1, A-1 Building, Jogeshwari, Mumbai, India - 400104</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`footer ${darkMode ? 'bg-gray-800' : 'bg-gray-800'} text-white text-center p-4`}>
        &copy; 2022 by <span className="text-blue-500">Mr. Web Designer</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Contact;
