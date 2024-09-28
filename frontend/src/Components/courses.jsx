import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaUser, FaSun, FaMoon, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';

import profilePic from '../images/pic-1.jpg';
import pic1 from '../images/thumb-1.png';
import pic2 from '../images/thumb-2.png';
import pic3 from '../images/thumb-3.png';

const CourseCard = ({ imgSrc, tutorImg, tutorName, date, title, link, darkMode }) => (
  <div className={`shadow-md rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
    <div className="flex items-center p-4">
      <img src={tutorImg} alt="Tutor" className="w-12 h-12 rounded-full" />
      <div className="ml-4">
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tutorName}</h3>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{date}</span>
      </div>
    </div>
    <div className="relative">
      <img src={imgSrc} alt="Course Thumbnail" className="w-full h-48 object-cover" />
      <span className="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">10 videos</span>
    </div>
    <div className="p-4">
      <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <Link to={link} className={`inline-block mt-2 py-2 px-4 rounded ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} hover:bg-blue-700`}>
        View Playlist
      </Link>
    </div>
  </div>
);

const Courses = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Toggle theme (light/dark)
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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Header */}
      <header className={`shadow-md p-4 sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center">
          <Link to="/home" className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>LearnX</Link>

          {/* Search Form */}
          <form className={`relative ${searchOpen ? 'block' : 'hidden'} md:flex items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg p-3 w-1/2`}>
            <input
              type="text"
              placeholder="courses..."
              maxLength="100"
              className={`flex-grow bg-transparent text-${darkMode ? 'white' : 'gray-800'} text-lg focus:outline-none`}
            />
            <button type="submit">
              <FaSearch className={`text-${darkMode ? 'white' : 'gray-700'} text-xl`} />
            </button>
          </form>

          {/* Icons for Menu, Search, User, Theme */}
          <div className="flex items-center space-x-4 text-2xl">
            <FaBars onClick={() => setMenuOpen(true)} className={`cursor-pointer ${darkMode ? 'text-white' : 'text-gray-700'}`} />
            <FaSearch onClick={() => setSearchOpen(!searchOpen)} className={`cursor-pointer ${darkMode ? 'text-white' : 'text-gray-700'}`} />
            <FaUser onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`cursor-pointer ${darkMode ? 'text-white' : 'text-gray-700'}`} />
            {darkMode ? (
              <FaMoon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-white" />
            ) : (
              <FaSun onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-gray-700" />
            )}
          </div>
        </div>

        {/* Profile Dropdown */}
        {isDropdownOpen && (
          <div className={`absolute top-16 right-8 rounded-lg shadow-lg p-4 text-center ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pratyush Ji</h3>
            <p className={`text-gray-500 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Student</p>
            <Link to="/profile" className="block bg-green-600 text-white py-2 mt-3 rounded-lg">
              View Profile
            </Link>
            <div className="flex space-x-2 justify-center mt-2">
              <Link to="/login" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Login</Link>
              <Link to="/register" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Register</Link>
            </div>
          </div>
        )}
      </header>

      {/* Sidebar */}
      {menuOpen && (
        <>
          <div className={`fixed top-0 left-0 h-full w-80 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg z-40`}>
            <div className="flex justify-end p-4">
              <FaTimes onClick={() => setMenuOpen(false)} className={`text-2xl ${darkMode ? 'text-gray-100' : 'text-gray-700'} cursor-pointer`} />
            </div>
            <div className="text-center py-6">
              <img src={profilePic} className="w-24 h-24 rounded-full mb-3 mx-auto" alt="Profile" />
              <h3 className="text-xl font-semibold">Pratyush Ji</h3>
              <p className="text-gray-500">Student</p>
              <Link to="/profile" className={`block ${darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'} py-2 mt-3 rounded-lg w-3/4 mx-auto text-center`}>
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
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setMenuOpen(false)}
          />
        </>
      )}

      {/* Courses Section */}
      <section className="p-8">
        <h1 className={`text-3xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Our Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CourseCard
            imgSrc={pic1}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete HTML Tutorial"
            link="/videoplaylist"
            darkMode={darkMode}
          />
          <CourseCard
            imgSrc={pic2}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete CSS Tutorial"
           link="/videoplaylist"
            darkMode={darkMode}
          />
          <CourseCard
            imgSrc={pic3}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete JS Tutorial"
           link="/videoplaylist"
            darkMode={darkMode}
          />
                    <CourseCard
            imgSrc={pic1}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete HTML Tutorial"
            link="/videoplaylist"
            darkMode={darkMode}
          />
          <CourseCard
            imgSrc={pic1}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete HTML Tutorial"
            link="/videoplaylist"
            darkMode={darkMode}
          />
          <CourseCard
            imgSrc={pic1}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete HTML Tutorial"
            link="/videoplaylist"
            darkMode={darkMode}
          />
          <CourseCard
            imgSrc={pic1}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete HTML Tutorial"
            link="/videoplaylist"
            darkMode={darkMode}
          />
          <CourseCard
            imgSrc={pic1}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete HTML Tutorial"
            link="/videoplaylist"
            darkMode={darkMode}
          />
          <CourseCard
            imgSrc={pic1}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete HTML Tutorial"
            link="/videoplaylist"
            darkMode={darkMode}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-800 text-white text-center p-4">
        &copy; Copyright 2024 by <span className="text-green-500">LearnX</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Courses;
