import React from 'react'
import "../../css/StudentEnrolled.css"
import { HiStar } from 'react-icons/hi';
import card1 from "../../images/card1.jpg"
import card2 from "../../images/card2.jpg"
const StudentCourcessEnroll = () => {
  
  return (
    <div className='sce'>
      <h2 className='h22'>Courcess your Enrolled in</h2>
      <div className='d-flex flex-column gap-30'>
        <div className='coursecard d-flex gap-30'>
          <div className='imag'>
            <img src={card1} alt="imagek" width={300} height={200} />
          </div>
          <div>
            <h2 className='h2'>React js course in 2032</h2>
            <p className='p'>instructor : Salah Shams</p>
            <h4 className='h4'>4.7 <HiStar /><HiStar /><HiStar /><HiStar /><span>(272.011)</span></h4>
            <h2 className='h2'>1235$  <span><del>E$1,699.99</del></span></h2>
          </div>
        </div>
        <div className='coursecard d-flex gap-30'>
          <div className='imag'>
            <img src={card2} alt="imagek" width={300} height={200} />
          </div>
          <div>
            <h2 className='h2'>java script course in 2022</h2>
            <p className='p'>instructor : Saad Mohamed</p>
            <h4 className='h4'>4.7 <HiStar /><HiStar /><HiStar /><HiStar /><span>(272.011)</span></h4>
            <h2 className='h2'>1235$  <span><del>E$1,699.99</del></span></h2>
          </div>
        </div>
        
        
      </div>
    </div>

    
    
  )
}

export default StudentCourcessEnroll;
