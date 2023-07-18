import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/utility/Footer";
import Login from "./component/utility/Login";
import NavBar from "./component/utility/NavBar";
import Register from "./component/utility/Register";
import Reset from "./component/utility/Reset";
import "./css/App.css";
import HomePage from "./pages/Home/HomePage";
import RectjsCourses from "./pages/RectjsCourses";
import Shopping from "./pages/Shopping";
import Checkout from "./pages/Checkout";
import VideosWatch from "./pages/VideosWatch";
import Student from "./pages/student/Student";
import Userprofile from "./pages/student/UserProfile";
import StudentCourcessEnroll from "./pages/student/StudentCourcessEnroll";
import Admin from "./pages/Admin/Admin";
import UserRequest from "./pages/UserRequest";
import CreateCaregory from "./pages/CreateCaregory";
import Coursedetails from "./pages/Coursedetails"
import Communication from "./pages/Instructor/Communication"
import Tools from "./pages/Instructor/Tools"
import CoursesDashboard from "./pages/Instructor/CoursesDashboard"
import Resources from "./pages/Instructor/Resources"
import CreateCourse from "./pages/Instructor/CreateCourse"
import InstructorDashboard from "./pages/Instructor/InstructorDashboard"  
import AddLecture from "./pages/Instructor/AddLecture";
function App() {
  return (
    <>
    <BrowserRouter >
    <NavBar/>
     <Routes>
      <Route path="/" element={ <HomePage/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route path="/reset" element={ <Reset/> }/>
      <Route path="/rectjscourses" element={ <RectjsCourses/> }/>
      <Route path="/Shopping" element={ <Shopping/> }/>
      <Route path="/Checkout" element={ <Checkout/> }/>
      <Route path="/coursewatch" element={ <VideosWatch/> }/>
      <Route path="/coursedetails" element={ <Coursedetails/> }/>
      <Route path="/courseUpdate" element={ <AddLecture/> }/>
      <Route path="courseUpdate" element={ <AddLecture/> }/>

      <Route path="/student" element={ <Student/> }>
      <Route index element={ <Userprofile/> }/>
        <Route path="userprofile" element={ <Userprofile/> }/>
        <Route path="studentCourcessEnroll" element={ <StudentCourcessEnroll/> }/>
      </Route>

      <Route path="/admin" element={ <Admin/> }>
        <Route index element={ <UserRequest /> }/>
          <Route path="userrequest" element={ <UserRequest />}/>
          <Route path="createcategory" element={ <CreateCaregory />}/>
        </Route>
          
          <Route path="/instructorDashboard" element={ <InstructorDashboard/> }>
          <Route index element={ <CoursesDashboard/> }/>
           <Route path="communication" element={ <Communication/> }/>
           <Route path="tools" element={ <Tools/> }/>
          <Route path="coursesDashboard" element={ <CoursesDashboard/> }/>
          <Route path="resources" element={ <Resources/> }/>
          <Route path="createCourse" element={ <CreateCourse/> }/>
        
        </Route>
        
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
