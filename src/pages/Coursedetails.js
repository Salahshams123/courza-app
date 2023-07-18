import React from 'react'
import "../css/Coursedetails.css"
import { Link } from 'react-router-dom';

const Coursedetails = () => {

  return (
    <div className="container my-5 margin-8">
      <div className="row">
        <div className="col-lg-8">
          <div className="course-details mt-5">
            <h1 className="course-title display-3 mb-5" style={{fontWeight:"bold" ,fontSize:"20px",marginTop:"80px"}}>react js</h1>
            <img className=" mb-4" src="images/card1.jpg" alt='course' height={"300px"} />
            <p className="course-description lead mb-4">course description </p>
            <div className="course-details-info mb-4">
              <div className="d-flex mb-2">
                <span className="mr-2" style={{fontWeight:"bold" ,fontSize:"20px"}} >Instructor:</span>
                  <span style={{fontWeight:"bold" ,fontSize:"20px" , color:"blue", marginLeft:"10px"}}>sayed mohamed</span>
              </div>
              <div className="d-flex mb-2">
                <span className="mr-2"  style={{fontWeight:"bold" ,fontSize:"20px"}}>Duration:</span>
                <span  style={{fontWeight:"bold" ,fontSize:"20px" , color:"blue", marginLeft:"10px"}}>Course Duration</span>
              </div>
              <div className="d-flex mb-2">
                <span className="mr-2"  style={{fontWeight:"bold" ,fontSize:"20px"}}>Skill Level:</span>
                <span  style={{fontWeight:"bold" ,fontSize:"20px" , color:"blue", marginLeft:"10px"}}>Course Skill Level</span>
              </div>
              <div className="d-flex mb-2">
                <span className="mr-2"  style={{fontWeight:"bold" ,fontSize:"20px" }}>Price:</span>
                <span  style={{fontWeight:"bold" ,fontSize:"20px" , color:"blue", marginLeft:"10px"}}>145$</span>
              </div>
            </div>
            <div className="course-syllabus mb-4">
              <h2 className="display-4 mb-4"  style={{fontWeight:"bold"}}>Syllabus</h2>
                 
                    <div className="course-section mb-4">
                      <h3 className="h4 mb-3">section 1</h3>
                      <ul className="list-unstyled mb-0">
                        <li>lesson 1 Title</li>
                        <li>Lesson 2 Title</li>
                        <li>Lesson 3 Title</li>
                      </ul>
                    </div>

                    <div className="course-section mb-4">
                      <h3 className="h4 mb-3">section 2</h3>
                      <ul className="list-unstyled mb-0">
                        <li>lesson 1 Title</li>
                        <li>Lesson 2 Title</li>
                        <li>Lesson 3 Title</li>
                      </ul>
                    </div>


                    <div className="course-section mb-4">
                      <h3 className="h4 mb-3">section 3</h3>
                      <ul className="list-unstyled mb-0">
                        <li>lesson 1 Title</li>
                        <li>Lesson 2 Title</li>
                        <li>Lesson 3 Title</li>
                      </ul>
                    </div>
                  
            </div>
          </div>
        </div>
        <div className="col-lg-4" style={{marginTop:"50px"}}>
          <div className="course-sidebar bg-light p-3 mt-4">
            <div className="course-stats mb-3">
              <div className="course-rating display-4 mb-2">
                rate : 5.4<i className="fas fa-star"></i>
              </div>
              <div className="course-enrollment lead">1235 enrolled</div>
            </div>
            <div className="course-cta mb-3">
              <Link to="/checkout">
                <button className="btn btn-primary btn-lg btn-block ">
                  Enroll Now
                </button>
              </Link>
              <button className="btn btn-outline-primary btn-lg btn-block">Add to Wishlist</button>
            </div>
            <div className="course-categories">
              <h3 className="h5 mb-3">Categories:</h3>
              <ul className="list-unstyled mb-0">
                <li>category1</li>
                <li>category2</li>
                <li>category3</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetails
