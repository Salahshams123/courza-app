import React, { useState } from 'react';
import "../css/Createcategory.css"
function CreateCategory() {
  const [value, setValue] = useState('');
 

  
  return (
    <div className='createcategory'>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} placeholder='Create New Category...' />
      <button  className='button addcategory'>Add</button>
    </div>
  );
}

export default CreateCategory;