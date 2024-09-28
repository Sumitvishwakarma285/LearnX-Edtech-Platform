import React, { useState,useEffect } from "react";
import { FaChartBar, FaBars, FaSearch, FaUser, FaSun, FaMoon, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset, FaCode, FaChartLine, FaPen, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { Link } from 'react-router-dom';
import profilePic from '../images/pic-1.jpg';
import pic1 from '../images/thumb-1.png';
import pic2 from '../images/thumb-2.png';
import pic3 from '../images/thumb-3.png';
import pic4 from '../images/thumb-4.png';
import pic5 from '../images/thumb-5.png';
import pic6 from '../images/thumb-6.png';
import pic7 from '../images/thumb-9.png';



const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-all duration-300`}>
       
      {/* Header Section */}
      <header className={`shadow sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <section className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className={`text-4xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>LearnX</Link>

           {/* Search Form */}
          <form action="/search" method="post" className={`hidden md:flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} rounded-lg p-2 w-1/2  'block' : 'hidden'}`}>
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              maxLength="100"
              className={`flex-grow bg-transparent text-${isDarkMode ? 'gray-100' : 'gray-800'} text-lg focus:outline-none`}/>
            <button type="submit">
              <FaSearch className={`text-${isDarkMode ? 'gray-100' : 'gray-800'} text-xl`} />
            </button>
          </form>

          {/* Icons for Menu, User, Theme */}
          <div className="flex items-center space-x-4 text-2xl">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className={`cursor-pointer ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`} />
            <div className="relative">
              <FaUser
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className={`cursor-pointer ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}
              />
              {/* User Dropdown */}
              {userDropdownOpen && (
  <div
    className={`absolute top-16 right-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg p-4 text-center`}
  >
    <img
      src={profilePic}
      alt="Profile"
      className="w-24 h-24 rounded-full mb-3 mx-auto"
    />
    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      Pratyush Ji
    </h3>
    <p className={`text-gray-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      Student
    </p>
    <Link
      to="/profile"
      className={`block ${isDarkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 mt-3 rounded-lg mx-auto`}
    >
      View Profile
    </Link>
    <div className="flex space-x-2 justify-center mt-2">
      <Link
        to="/login"
        className={`bg-orange-500 text-white py-2 px-4 rounded-lg ${isDarkMode ? 'hover:bg-orange-600' : 'hover:bg-orange-400'}`}
      >
        Login
      </Link>
      <Link
        to="/register"
        className={`bg-orange-500 text-white py-2 px-4 rounded-lg ${isDarkMode ? 'hover:bg-orange-600' : 'hover:bg-orange-400'}`}
      >
        Register
      </Link>
    </div>
  </div>
)}

            </div>
            <button onClick={toggleTheme} className={`text-2xl ${isDarkMode ? 'text-yellow-300' : ' text-blue-500'}`}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </section>
      </header>
      {/* Sidebar */}
      {menuOpen && (
        <>
          <div className={`fixed top-0 left-0 h-full w-80 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg z-40`}>
          <div className="flex justify-end p-4">
            <FaTimes onClick={() => setMenuOpen(false)} className={`text-2xl ${isDarkMode ? 'text-gray-100' : 'text-gray-700'} cursor-pointer`} />
          </div>
          <div className="text-center py-6">
            <img src={profilePic} className="w-24 h-24 rounded-full mb-3 mx-auto" alt="Profile" />
            <h3 className="text-xl font-semibold">Pratyush Ji</h3>
            <p className="text-gray-500">Student</p>
            <Link to="/profile" className={`block ${isDarkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'} py-2 mt-3 rounded-lg w-3/4 mx-auto text-center`}>
              View Profile
            </Link>
          </div>
          <nav className="mt-6 space-y-4">
            <Link to="/" className={`flex items-center px-6 py-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaHome className={`mr-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>Home</span>
            </Link>
            <Link to="/about" className={`flex items-center px-6 py-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaQuestion className={`mr-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>About</span>
            </Link>
            <Link to="/courses" className={`flex items-center px-6 py-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaGraduationCap className={`mr-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>Courses</span>
            </Link>
            <Link to="/teachers" className={`flex items-center px-6 py-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaChalkboardTeacher className={`mr-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span>Teachers</span>
            </Link>
            <Link to="/contact" className={`flex items-center px-6 py-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <FaHeadset className={`mr-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
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
      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 border-b pb-4">Quick Options</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
            <h3 className="text-2xl font-semibold mb-4">Likes and Comments</h3>
            <p className="text-lg text-gray-500 mb-2">Total likes: <span className="text-green-600">25</span></p>
            <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>View Likes</Link>
            <p className="text-lg text-gray-500 mt-4">Total comments: <span className="text-green-600">12</span></p>
            <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>View Comments</Link>
            <p className="text-lg text-gray-500 mt-4">Saved playlists: <span className="text-green-600">4</span></p>
            <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-700' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>View Playlists</Link>
          </div>

          {/* Card 2 */}
          <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
            <h3 className="text-2xl font-semibold mb-4">Top Categories</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaCode className="text-green-600 mr-2" />
                <span>Development</span>
              </Link>
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaChartBar className="text-green-600 mr-2" />
                <span>Business</span>
              </Link>
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaPen className="text-green-600 mr-2" />
                <span>Design</span>
              </Link>
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaChartLine className="text-green-600 mr-2" />
                <span>Marketing</span>
              </Link>
              {/* More Categories */}
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaCode className="text-green-600 mr-2" />
                <span>Science</span>
              </Link>
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaCode className="text-green-600 mr-2" />
                <span>Technology</span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
            <h3 className="text-2xl font-semibold mb-4">Popular Topics</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaHtml5 className="text-green-600 mr-2" />
                <span>HTML</span>
              </Link>
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaCss3 className="text-green-600 mr-2" />
                <span>CSS</span>
              </Link>
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaJs className="text-green-600 mr-2" />
                <span>JS</span>
              </Link>
              {/* More Topics */}
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaCode className="text-green-600 mr-2" />
                <span>React</span>
              </Link>
              <Link to="#" className={`flex items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} py-2 px-4 rounded-lg`}>
                <FaCode className="text-green-600 mr-2" />
                <span>Node.js</span>
              </Link>
            </div>
          </div>
        </div>
         {/* Our Courses Section */}
<section className="mt-12">
  <h2 className="text-3xl font-bold mb-6 border-b pb-4">Our Courses</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Course 1 */}
    <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
      <img src={pic1} alt="Introduction to Programming" className="w-full h-32 object-cover rounded-lg mb-4" />
      <h4 className="text-xl font-semibold mb-4">Introduction to Programming</h4>
      <p className="text-gray-500 mb-4">Learn the basics of programming with this beginner-friendly course.</p>
      <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-600' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>Enroll Now</Link>
    </div>

    {/* Course 2 */}
    <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
      <img src={pic2} alt="Advanced Web Development" className="w-full h-32 object-cover rounded-lg mb-4" />
      <h4 className="text-xl font-semibold mb-4">Advanced Web Development</h4>
      <p className="text-gray-500 mb-4">Take your web development skills to the next level with this advanced course.</p>
      <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-600' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>Enroll Now</Link>
    </div>

    {/* Course 3 */}
    <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
      <img src={pic3} alt="UX/UI Design Fundamentals" className="w-full h-32 object-cover rounded-lg mb-4" />
      <h4 className="text-xl font-semibold mb-4">UX/UI Design Fundamentals</h4>
      <p className="text-gray-500 mb-4">Master the principles of UX/UI design and create stunning user interfaces.</p>
      <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-600' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>Enroll Now</Link>
    </div>

    {/* Course 4 */}
    <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
      <img src={pic4} alt="Data Science Essentials" className="w-full h-32 object-cover rounded-lg mb-4" />
      <h4 className="text-xl font-semibold mb-4">Data Science Essentials</h4>
      <p className="text-gray-500 mb-4">Understand the basics of data science and analytics in this comprehensive course.</p>
      <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-600' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>Enroll Now</Link>
    </div>

    {/* Course 5 */}
    <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
      <img src={pic5} alt="Introduction to Programming" className="w-full h-32 object-cover rounded-lg mb-4" />
      <h4 className="text-xl font-semibold mb-4">Introduction to Programming</h4>
      <p className="text-gray-500 mb-4">Learn the basics of programming with this beginner-friendly course.</p>
      <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-600' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>Enroll Now</Link>
    </div>

    {/* Course 6 */}
    <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg`}>
      <img src={pic6} alt="Introduction to Programming" className="w-full h-32 object-cover rounded-lg mb-4" />
      <h4 className="text-xl font-semibold mb-4">Introduction to Programming</h4>
      <p className="text-gray-500 mb-4">Learn the basics of programming with this beginner-friendly course.</p>
      <Link to="#" className={`inline-block ${isDarkMode ? 'bg-green-600' : 'bg-green-600'} text-white py-2 px-6 rounded-lg`}>Enroll Now</Link>
    </div>
  </div>
  
  {/* View All Courses */}
  <div className="text-center mt-8">
    <Link to="/courses" className={`inline-block ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-600'} text-white py-2 px-6 rounded-lg`}>View All Courses</Link>
  </div>
</section>
        {/* Become a Tutor Card */}
<section className="mt-12">
  <h2 className="text-3xl font-bold mb-6 border-b pb-4">Become a Tutor</h2>
  <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-6 rounded-lg text-center`}>
    <img src={pic7} alt="Become a Tutor" className="w-full h-32 object-cover rounded-lg mb-4" />
    <h4 className="text-xl font-semibold mb-4">Join Our Team</h4>
    <p className="text-gray-500 mb-4">Share your expertise and help others achieve their learning goals. Apply now to become a tutor.</p>
    <Link to="/teachers" className={`inline-block ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-600'} text-white py-2 px-6 rounded-lg`}>Apply Now</Link>
  </div>
</section>
      </section>
      {/* Footer */}
<footer className="footer bg-gray-800 text-white text-center p-4">
  &copy; Copyright 2024 by <span className="text-green-500">LearnX</span> | All rights reserved!
</footer>
    </div>
  );
};

export default Home;