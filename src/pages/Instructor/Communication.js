import React from 'react'
import "../../css/instructorcss/Communication.css"
import instracor from "../../images/instracor2.jpg"
const Communication = () => {

   return (
    <> 

    <div className='A'>
      <span className='h'>my information</span>
    </div>
    <div className='com'>
     {<h2><img src={instracor} style={{ width: '100px', height: '100px',marginBottom:"30px" }} alt='cart' /> </h2>}
     
     <div><label>name</label>
        <h2>amira ali</h2>
     </div>
     <div><label>email:</label>
     <h2>amiraali@sa.com</h2></div>
    

        <p>Direct messages are for you to communicate with your students or 
          other instructors privately. Here’s where you’ll see them.</p>
      </div>
    </>
  )
}

export default Communication
