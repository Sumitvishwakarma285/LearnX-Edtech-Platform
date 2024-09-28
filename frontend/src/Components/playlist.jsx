import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaUser, FaSun, FaMoon, FaTimes, FaBookmark, FaPlay, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';
import profilePic from '../images/pic-1.jpg'; 
import pic1 from '../images/thumb-1.png';

const VideoPlaylist = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-all duration-300`}>
      {/* Header */}
      <header className={`header shadow sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} py-4 px-6`}>
        <section className="flex justify-between items-center">
          <Link to="/" className={`logo text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>LearnX</Link>
          
          <form action="/search" method="post" className={`search-form flex items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg px-3 py-2 w-1/2`}>
            <input type="text" name="search_box" required placeholder="search courses..." className={`flex-grow bg-transparent text-lg ${darkMode ? 'text-gray-100' : 'text-gray-800'} focus:outline-none`} />
            <button type="submit" className="text-xl"><FaSearch className={`text-xl ${darkMode ? 'text-gray-100' : 'text-gray-600'}`} /></button>
          </form>
          
          <div className="icons flex space-x-4 text-2xl">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            <FaUser className={`cursor-pointer ${darkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            {darkMode ? (
              <FaMoon onClick={toggleDarkMode} className="cursor-pointer text-gray-100" />
            ) : (
              <FaSun onClick={toggleDarkMode} className="cursor-pointer text-gray-700" />
            )}
          </div>
        </section>
      </header>

      {/* Sidebar Menu */}
      {menuOpen && (
        <div className={`fixed top-0 left-0 h-full w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-40`}>
          <div className="flex justify-end p-4">
            <FaTimes onClick={() => setMenuOpen(false)} className={`text-2xl ${darkMode ? 'text-gray-100' : 'text-gray-700'} cursor-pointer`} />
          </div>

          <div className="text-center py-6">
            <img src={profilePic} alt="Profile" className="w-20 h-20 rounded-full mb-3 mx-auto" />
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Pratyush</h3>
            <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Student</p>
            <Link to="/profile" className={`block bg-green-500 text-white py-2 mt-3 rounded-lg mx-auto w-3/4 text-center`}>
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
      )}

      {/* Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setMenuOpen(false)} />}

      {/* Playlist Details */}
      <section className="playlist-details p-8">
        <h1 className={`heading text-3xl font-semibold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Playlist Details</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6">
            <form action="" method="post" className="save-playlist">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                <FaBookmark className="mr-2" /> Save Playlist
              </button>
            </form>
            <div className="thumb mt-4">
              <img src={pic1} alt="" className="w-full rounded-lg" />
              <span className="block text-center mt-2">10 videos</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="tutor flex items-center">
              <img src={profilePic} alt="" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">John Deo</h3>
                <span className="text-gray-500">21-10-2022</span>
              </div>
            </div>
            <div className="details mt-4">
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Complete HTML Tutorial</h3>
              <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
              <Link to="/teacherprofile" className="inline-block mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">View Profile</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Playlist Videos */}
      <section className="playlist-videos p-8">
        <h1 className={`heading text-3xl font-semibold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Playlist Videos</h1>
        <div className="box-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link className="box bg-white p-4 rounded-lg shadow-md hover:bg-gray-200" to="/watchpage">
            <FaPlay className={`text-3xl text-gray-600 mb-2`} />
            <img src={pic1} alt="" className="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Complete HTML Tutorial (Part 01)</h3>
          </Link>
          {/* Repeat for other videos */}
        </div>
      </section>

      {/* Footer */}
      <footer className={`footer text-center py-4 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
        &copy; 2022 by <span className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Mr. Web Designer</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default VideoPlaylist;
