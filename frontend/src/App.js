import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';


import Home from './Components/home';
import Login from './Components/login';
import Register from './Components/register';
import About from './Components/about';
import Contact from './Components/contact';
import Courses from './Components/courses';
import Profile from './Components/profile';
import TeacherProfile from './Components/teacher_profile';
import Teachers from './Components/teachers';
import UpdateProfile from './Components/update';
import WatchPage from './Components/watch-video';
import VideoPlaylist from './Components/playlist';

const App = () => {
  return (
    <div>
    <BrowserRouter >
        <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/login" element={<Login/>} /> 
        <Route exact path="/register" element={<Register/>} /> 
        <Route exact path="/about" element={<About/>} /> 
        <Route exact path="/Contact" element={<Contact/>} /> 
        <Route exact path="/Courses" element={<Courses/>} /> 
        <Route exact path="/profile" element={<Profile/>} /> 
        <Route exact path="/teacherprofile" element={<TeacherProfile/>} /> 
        <Route exact path="/teachers" element={<Teachers/>} /> 
        <Route exact path="/updateprofile" element={<UpdateProfile/>} />
        <Route exact path="/watchpage" element={<WatchPage/>} />
        <Route exact path="/videoplaylist" element={<VideoPlaylist/>} /> 
        </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;


