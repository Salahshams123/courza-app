import React from 'react';
import '../../css/instructorcss/Videos.css';
import { Link} from 'react-router-dom';
import card1 from "../../images/card1.jpg"
import card2 from "../../images/card2.jpg"

const CoursesDashboard = () => {
 


  return (
    <>


      <div className='A'>
        <span className='h'>Cources</span>
      </div>
      <div className='H'>
        <span>Jump Into Course Creation</span>
        <Link to='/instructorDashboard/createCourse' className='btn btn-primary'>Create Your Course</Link>
      </div>

      <div className='VDS'>
              <div className='box p-2'>
                <div className='sec'>
                  <img src={card1} alt='' />
                  <div className='p-2 text-primary'>
                    <h2 style={{marginBottom:"50px" , marginLeft:"-10px"}}>react js</h2>
                   <h5>Public</h5> 
                  </div>
                </div>
                <div className='ED'>
                  <Link to={`/courseUpdate`} className='btn btn-primary mx-2'><button className='btn'>Edit</button></Link>
                  <div   className='btn btn-danger'><button className='btn'>Delete</button></div>

                </div>
              </div>

              <div className='box p-2'>
                <div className='sec'>
                  <img src={card2} alt='' />
                  <div className='p-2 text-primary'>
                    <h2 style={{marginBottom:"50px" , marginLeft:"-10px"}}>html5</h2>
                   <h5>Private</h5> 
                  </div>
                </div>
                <div className='ED'>
                  <Link to={`/courseUpdate`} className='btn btn-primary mx-2'><button className='btn'>Edit</button></Link>
                  <div   className='btn btn-danger'><button className='btn'>Delete</button></div>

                </div>
              </div>
          
    
      </div>
    </>
  );
}

export default CoursesDashboard;