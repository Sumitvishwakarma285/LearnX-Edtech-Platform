import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSearch, FaUser, FaSun, FaMoon, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profilePic from '../images/pic-1.jpg';

const Teachers = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
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
      {/* Header Section */}
      <header className={`bg-${darkMode ? 'gray-800' : 'white'} shadow py-4`}>
        <section className="flex justify-between items-center max-w-6xl mx-auto px-4">
          {/* Logo */}
          <Link to="/" className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>LearnX</Link>

          {/* Search Form */}
          <form action="/search" method="post" className={`hidden md:flex items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg p-2 w-1/2 ${searchOpen ? 'block' : 'hidden'}`}>
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

          {/* Icons */}
          <div className="flex space-x-4 text-2xl">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            <FaSearch onClick={() => setSearchOpen(!searchOpen)} className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            <FaUser onClick={() => setUserDropdownOpen(!userDropdownOpen)} className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            {darkMode ? (
              <FaMoon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-gray-100" />
            ) : (
              <FaSun onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-gray-700" />
            )}
          </div>

          {/* User Dropdown */}
          {userDropdownOpen && (
            <div className={`absolute top-16 right-8 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} rounded-lg shadow-lg p-4 text-center z-50`}>
              <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
              <h3 className={`text-xl ${darkMode ? 'text-gray-100' : 'text-gray-900'} font-semibold`}>Pratyush ji</h3>
              <p className={`text-${darkMode ? 'gray-400' : 'gray-500'}`}>Student</p>
              <Link to="/profile" className={`block ${darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'} py-2 mt-3 rounded-lg`}>
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
        <>
          <div className={`fixed top-0 left-0 w-80 h-full ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg z-40`}>
            <div className="flex justify-between items-center p-4">
              <h2 className="text-2xl font-bold">Menu</h2>
              <FaTimes onClick={() => setMenuOpen(false)} className={`text-xl ${darkMode ? 'text-gray-100' : 'text-gray-700'} cursor-pointer`} />
            </div>

            <div className="text-center py-6">
              <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
              <h3 className={`text-xl ${darkMode ? 'text-gray-100' : 'text-gray-900'} font-semibold`}>Pratyush ji</h3>
              <p className={`text-${darkMode ? 'gray-400' : 'gray-500'}`}>Student</p>
              <Link to="/profile" className={`block ${darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'} py-2 mt-3 rounded-lg w-3/4 mx-auto`}>
                View Profile
              </Link>
            </div>

            <nav className="mt-6">
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

      {/* Teachers Section */}
      <section className={`teachers py-8 max-w-6xl mx-auto px-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        <h1 className="text-4xl font-bold mb-8 border-b pb-4">Expert Teachers</h1>

        {/* Search Tutors */}
        <form action="" method="post" className="flex items-center space-x-2 mb-6">
          <input
            type="text"
            name="search_box"
            placeholder="Search tutors..."
            required
            maxLength="100"
            className={`flex-grow ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'} rounded-lg p-2 focus:outline-none`}
          />
          <button type="submit" className={`text-${darkMode ? 'gray-100' : 'gray-700'}`}>
            <FaSearch />
          </button>
        </form>

        {/* Teachers Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ { name: 'Pratyush', role: 'Developer', image: require('../images/pic-2.jpg'), playlists: 4, videos: 18, likes: 1208 },
            { name: 'Pratyush', role: 'Developer', image: require('../images/pic-3.jpg'), playlists: 4, videos: 18, likes: 1208 },
            { name: 'Pratyush', role: 'Developer', image:  require('../images/pic-4.jpg'), playlists: 4, videos: 18, likes: 1208 },
            { name: 'Pratyush', role: 'Developer', image:  require('../images/pic-5.jpg'), playlists: 4, videos: 18, likes: 1208 },
            { name: 'Pratyush', role: 'Developer', image:  require('../images/pic-6.jpg'), playlists: 4, videos: 18, likes: 1208 },
            { name: 'Pratyush', role: 'Developer', image:  require('../images/pic-7.jpg'), playlists: 4, videos: 18, likes: 1208 },
            { name: 'Pratyush', role: 'Developer', image:  require('../images/pic-8.jpg'), playlists: 4, videos: 18, likes: 1208 },].map((teacher, index) => (
            <div key={index} className={`bg-${darkMode ? 'gray-800' : 'white'} shadow-md rounded-lg p-4`}>
              <div className="flex items-center mb-4">
                <img src={teacher.image} alt={teacher.name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{teacher.name}</h3>
                  <span className={`text-${darkMode ? 'gray-400' : 'gray-500'}`}>{teacher.role}</span>
                </div>
              </div>
              <p>Total playlists: <span className="font-semibold">{teacher.playlists}</span></p>
              <p>Total videos: <span className="font-semibold">{teacher.videos}</span></p>
              <p>Total likes: <span className="font-semibold">{teacher.likes}</span></p>
              <Link to="/teacherprofile" className={`block ${darkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 mt-4 text-center rounded-lg`}>View Profile</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`footer ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white text-center py-4`}>
        &copy; copyright @ 2024 by <span className="text-green-500">learnx</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Teachers;
