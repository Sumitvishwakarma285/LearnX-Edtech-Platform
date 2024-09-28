import React, { useState, useEffect } from 'react';
import { FaBars, FaSearch, FaUser, FaSun, FaMoon, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profilePic from '../images/pic-1.jpg';

const Register = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [credenditals, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
  const handleSubmit = async(e)=>{
  e.preventDefault();
  const response = await fetch("http://localhost:4000/api/creatuser",{
      method:"POST",
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credenditals.name,email:credenditals.email,password:credenditals.password,location:credenditals.geolocation})
  });
  const json =await response.json()
  console.log(json);
  
  if(!json.success){
    alert("enter valid credintials");
  }
  }
  const onChange=(event)=>{
      setcredentials({...credenditals,[event.target.name]:event.target.value})
  }
  
  

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
      {/* Header */}
      <header className={`shadow-lg sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <section className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/home" className={`text-4xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>LearnX</Link>

          {/* Search Form */}
          <form  action="search.html" method="post" className={`hidden md:flex items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg p-3 w-1/2`}>
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
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Pratyush ji</h3>
              <p className={`text-${darkMode ? 'gray-400' : 'gray-500'}`}>student</p>
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

      {/* Register Form */}
      <section className="form-container flex-grow flex justify-center items-center">
        <form onSubmit={handleSubmit} action="" method="post" encType="multipart/form-data" className={`shadow-md p-8 rounded-lg max-w-md w-full ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Register Now</h3>

          <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            maxLength="50"
            value={credenditals.name}
              onChange={onChange}
            className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`}
          />

          <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            maxLength="50"
            value={credenditals.email}
              onChange={onChange}
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
            value={credenditals.password}
              onChange={onChange}
            maxLength="20"
            className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`}
          />

          <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="c_pass"
            placeholder="Confirm your password"
            required
            maxLength="20"
            className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`}
          />

          <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Select Profile <span className="text-red-500">*</span>
          </label>
          <input type="file" accept="image/*" required className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`} />

          <input type="submit" value="Register Now" name="submit" className={`btn py-2 px-4 rounded-lg w-full ${darkMode ? 'bg-green-600 hover:bg-green-500' : 'bg-green-600 hover:bg-green-700'} text-white`} />
        </form>
      </section>

      {/* Footer */}
      <footer className={`py-4 text-center ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-800 text-white'}`}>
        &copy; Copyright 2024 by <span className="font-bold">Mr.sumit</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Register;
