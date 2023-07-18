 import React from 'react'
 import "../../css/Home.css"
 import{HiStar} from "react-icons/hi"
 import{IoMdStarHalf} from"react-icons/io"
 import {FaUserGraduate,FaLaptop} from"react-icons/fa"
 import { GiPencilBrush} from"react-icons/gi"
 import {BsFilePerson} from"react-icons/bs"
 import {RiVideoLine} from"react-icons/ri"
 import {SiFing} from"react-icons/si"
import { Link } from 'react-router-dom'
import homepage from "../../images/homepage.jpeg"
import card1 from "../../images/card1.jpg"
import card2 from "../../images/card2.jpg"
import card3 from "../../images/card3.jpg"
import card4 from "../../images/card4.jpg"
import instractor1 from "../../images/instracor1.jpeg"
import instractor2 from "../../images/instracor2.jpg"
import instractor3 from "../../images/instracor3.jpeg"
import instractor4 from "../../images/instracor4.jpeg"
 function HomePage() {
   return (
   <>
   <section className='home-wraber-1 '>
      <div className='main-banner position-relative'>
         <img src={homepage} alt='main-banner'/>
      <div className='main-banner-content position-absolute'>
        <h4>The Best Theme</h4>
        <h5>Top Education <br/> Cources 2022/23</h5>
        <p></p>
       
      </div>
      </div>
</section>
<section>
  <div className='container'>
   <div className='row'>
   <div className='col-12'>
      <h3 className='section-heading'>POPULAR COURSES</h3>
    </div>
    <div className='col-12'>
      <h1 className='section-heading'>Pick a course to <br/>
      get started your study</h1>
    </div>
   <div className='col-12'>
   <div className='courses d-flex justify-content-between align-items-center flex-wrap gap-15'>

   <div className='coursecard'>
   <div className='imag'>
   <Link to={"/coursedetails"}><img src={card1} alt='course1' width={300} height={200}/></Link>
   </div>
   <div>
   <h2 className='h2'>The complete 2023 web<br/>Development Bootcamp</h2>
   <p className='p'>Dr.Angela Yu</p>
   <h4 className='h4'>4.7 <HiStar/><HiStar/> <HiStar/> <HiStar/> <IoMdStarHalf/><span>(272.011)</span></h4>
   <h2 className='h2'>E$266.9  <span><del>E$1,699.99</del></span></h2>
   <a className='button2' href='h'>Bestseller</a>
   </div>

   </div>
   <div className='coursecard'>
   <div className='imag'>
   <Link to={"/coursedetails"}><img src={card2} alt='course1' width={300} height={200}/></Link>
   </div>
   <div>
   <h2 className='h2'>The complete 2023 web<br/>Development Bootcamp</h2>
   <p className='p'>Dr.Angela Yu</p>
   <h4 className='h4'>4.7 <HiStar/><HiStar/> <HiStar/> <HiStar/> <IoMdStarHalf/><span>(272.011)</span></h4>
   <h2 className='h2'>E$266.9  <span><del>E$1,699.99</del></span></h2>
   <a className='button2' href='h'>Bestseller</a>
   </div>

   </div>
   <div className='coursecard'>
   <div className='imag'>
   <Link to={"/coursedetails"}><img src={card3} alt='course1' width={300} height={200}/></Link>
   </div>
   <div>
   <h2 className='h2'>The complete 2023 web<br/>Development Bootcamp</h2>
   <p className='p'>Dr.Angela Yu</p>
   <h4 className='h4'>4.7 <HiStar/><HiStar/> <HiStar/> <HiStar/> <IoMdStarHalf/><span>(272.011)</span></h4>
   <h2 className='h2'>E$266.9  <span><del>E$1,699.99</del></span></h2>
   <a className='button2' href='h'>Bestseller</a>
   </div>

   </div>
   <div className='coursecard' >
   <div className='imag'>
   <Link to={"/coursedetails"}><img src={card4} alt='course1' width={300} height={200}/></Link>
   </div>
   <div>
   <h2 className='h2'>The complete 2023 web<br/>Development Bootcamp</h2>
   <p className='p'>Dr.Angela Yu</p>
   <h4 className='h4'>4.7 <HiStar/><HiStar/> <HiStar/> <HiStar/> <IoMdStarHalf/><span>(272.011)</span></h4>
   <h2 className='h2'>E$266.9  <span><del>E$1,699.99</del></span></h2>
   <a className='button2' href='h'>Bestseller</a>
   </div>

   </div>
   </div>

   </div>
   <div className='col-12'>
   <Link to={"/rectjscourses"} className='button  coursebtn' >EXPLORE ALL COURCES</Link>
    </div>
   </div>
  </div>
</section>
<section className='line1'>
</section>
<section className='categorysection'>
  <div className='container'>
   <div className='row'>
   <div className='col-12'>
      <h3 className='categoryh'>CHECKOUT OUR CATEGORIES</h3>
    </div>
    <div className='col-12'>
      <h1 className='categoryh'>Top categories for popular<br/>
      courses to show</h1>
    </div>
   <div className='col-12'>
   <div className='categorys d-flex justify-content-between align-items-center flex-wrap'>
   <div className='categorycard'>
   <div className='icone'>
   <FaUserGraduate  size={90} className="category-icon"/>
   </div>
   <div>
   <h2 className='h2 categoryh2'>Business<br/>Management</h2>
   </div>

   </div>
   <div className='categorycard'>
   <div className='icone'>
   <GiPencilBrush  size={90} className="category-icon"/>
   </div>
   <div>
   <h2 className='h2 categoryh2'>Arts And<br/>Design</h2>
   </div>

   </div>
   <div className='categorycard'>
   <div className='icone'>
   <FaLaptop  size={90} className="category-icon"/>
   </div>
   <div>
   <h2 className='h2 categoryh2'>Computer<br/>science</h2>
   </div>

   </div>
   <div className='categorycard'>
   <div className='icone'>
   <BsFilePerson  size={90} className="category-icon"/>
   </div>
   <div>
   <h2 className='h2 categoryh2'>Personal<br/>Development</h2>
   </div>

   </div>
   <div className='categorycard'>
   <div className='icone'>
   <SiFing  size={90} className="category-icon"/>
   </div>
   <div>
   <h2 className='h2 categoryh2'>Business And<br/>Finance</h2>
   </div>

   </div>
   <div className='categorycard'>
   <div className='icone'>
   <RiVideoLine  size={90} className="category-icon"/>
   </div>
   <div>
   <h2 className='h2 categoryh2'>Video And<br/>Photography</h2>
   </div>

   </div>
   </div>

   </div>
   </div>
  </div>
</section>
<section className='instractorssection'>
  <div className='container'>
   <div className='row'>
   <div className='col-12'>
      <h3 className='categoryh'>QUALIFIED TEACHERS</h3>
    </div>
    <div className='col-12'>
      <h1 className='categoryh'>Meet the teacher who<br/>
      teaches you online</h1>
    </div>
   <div className='col-12'>
   <div className=' instractors d-flex justify-content-between align-items-center flex-wrap'>
   <div className='instractorcard'>
   <div className='imag'>
   <img src={instractor1} alt='course1' width={200} height={200}/>
   </div>
   <div>
   <h2 className='h2 categoryh '>Edward norton</h2>
   <h4 className='categoryh'>Musican</h4>
   </div>

   </div>
   <div className='instractorcard'>
   <div className='imag'>
   <img src={instractor2} alt='course1' width={200} height={200}/>
   </div>
   <div>
   <h2 className='h2 categoryh '>Jane seymour</h2>
   <h4 className='categoryh'>Designer</h4>
   </div>

   </div>
   <div className='instractorcard'>
   <div className='imag'>
   <img src={instractor3} alt='course1' width={200} height={200}/>
   </div>
   <div>
   <h2 className='h2 categoryh '>Mike hardson</h2>
   <h4 className='categoryh'>Developer</h4>
   </div>

   </div>
   <div className='instractorcard'>
   <div className='imag'>
   <img src={instractor4} alt='course1' width={200} height={200}/>
   </div>
   <div>
   <h2 className='h2 categoryh '>Christine eve</h2>
   <h4 className='categoryh'>Artisit</h4>
   </div>

   </div>
   <div className='instractorcard'>
   <div className='imag'>
   <img src={instractor1} alt='course1' width={200} height={200}/>
   </div>
   <div>
   <h2 className='h2 categoryh '>Ibrahim saad</h2>
   <h4 className='categoryh'>Leader</h4>
   </div>

   </div>
   
   </div>

   </div>
   </div>
  </div>
</section>
   </>
   )
 }
 
 export default HomePage
