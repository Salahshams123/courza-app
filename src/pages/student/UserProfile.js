import React from 'react'

import user from "../../images/instracor3.jpeg"
import { useState } from 'react';
import "../../css/Userprofile.css"
import { FaEnvelope, FaUser, FaUserGraduate } from 'react-icons/fa';

const Userprofile = () => {
    const [name, setname] = useState("");
    const [img, setImg] = useState("");
    const [bio, setBio] = useState("");
   
    
    return (
        <div className='header-profile' >
            <h1 class> </h1>
            <h1 className='h' style={{ textAlign: "center" }} > salah </h1>

            <div className='Img '>
                <img className='' src={user} alt='jjj' />
            </div>
            <div>
                <input value={img} type='file' className='II' mu onChange={(e) => setImg(e.target.files[0])}></input>
            </div>
            <div className='profile'>

                <div className=''>
                    <div  className='btn btn-dark submit ' type="submit" value="Edit"  style={{marginLeft:"60px"}}>be instructor</div>
                </div>
                <div className='input_group'>
                    <label className='name'>bio: to be or not to be</label>
                    <input value={bio} onChange={(e) => setBio(e.target.value)} placeholder='edit bio '></input>
                    <FaUserGraduate className='icons' />
                </div>
                <div className='input_group'>
                    <label className='name'>Name: salah</label>
                    <input value={name} onChange={(e) => setname(e.target.value)} placeholder='change name'></input>
                    <FaUser className='icons' />
                </div>
                <div className='input_group'>
                    <label className='name'>Email: salah@ah.com</label>
                    <FaEnvelope className='icons' />
                </div>

                <div className='input_group'>
                    <div className='Sub btn btn-success submit ' type="submit" value="Edit" >submit changes</div>
                </div>
            </div>
        </div>


    )
}

export default Userprofile