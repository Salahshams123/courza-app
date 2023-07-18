import React, { useState } from 'react';
import "../../css/instructorcss/CreateCourse.css";


import { FaAudioDescription, FaBell, FaHeading, FaMoneyBill } from 'react-icons/fa';


const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
 
 

  return (
    <div>
      <div className='head-titlt'>
        <h4>Student</h4>
        <p>Switch to the student view here - get back to the courses you’re taking.</p>
        <FaBell className='i' />
        <div className='name'>AG</div>
      </div>
      <form className='F'>
        <h1 className=' h T' style={{ textAlign: "center" }}>Create Your Course</h1>
        <div className='input_group'>
          <div className='input_box'>
            <input className='name' type="text" placeholder="Title" value={title}
              onChange={(e) => setTitle(e.target.value)} />
            <FaHeading className='icons' />
           
          </div>
        </div>
        <div className='input_group'>
          <div className='input_box'>
            <input className='name' type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <FaAudioDescription className='icons' />
          
          </div>
        </div>
        <div className='input_group'>
          <div className='input_box'>
            <input className='name' type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <FaMoneyBill className='icons' />
          
          </div>
        </div>
  
       
        <div>
          <label style={{fontSize:"10px" , fontWeight:'bold'}}>
           Enter Thumbnail
          </label>
          <input
            type="file"
            name="photo"
            id="upload-photo"
          />
         
        </div>
        <div>
          <button className=' button AK' type="submit">Create</button>
        </div>
     
      </form>
    </div>
  );
};

export default CreateCourse;