    import React, { useState } from 'react'
    import "../../css/AddLecture.css"
    import { FaPenSquare, FaTrash } from 'react-icons/fa';
   
    const AddLecture = () => {
        
        const [title, setTitle] = useState("");
        const [lecTitle, setLecTitle] = useState(""); 
        const [secId, setSecId] = useState()

        return (
            <>
                <div className='totalpage'>
                    <div className='AddSection'>
                        <div className='N'>
                            <h2>New Section</h2>
                            <input type='text' placeholder='Title' required value={title} onChange={(w) => setTitle(w.target.value)} />
                    
                        </div>
                        <div className='foot'>
                            <h2>Cancel</h2>
                            <button className='button'>Add Section</button>
                        </div>
                    </div>
                    <div className='Lecture'>
                        <div className='N'>
                            <div className='SCn'>
                                <h2>New Lecture</h2>
                                <div className='CO'>
                                    <FaTrash className='icmp' />
                                    <FaPenSquare className='icmp' />
                                </div>
                            </div>
                            <input type='text' placeholder='Title' required value={lecTitle} onChange={(w) => setLecTitle(w.target.value)} />
                        </div>
                        <select style={{marginBottom:'30px'}}
                        name="cat"
                        value={secId}
                    onChange={(e) => setSecId(e.target.value)}
                        className="form-select mt-3 px-2"
                        aria-label="Select category">
                        <option value="">Select a section</option>
                            <option value={1}>
                             title1
                            </option>
                            <option value={2}>
                            title2
                           </option>
                           <option value={3}>
                           title3
                          </option>
                        
                    </select>
                        <input type='file' required className='file' multiple  />
                        <div className='foot'>
                            <h2>Cancel</h2>
                            <button className='button'>Add Lecture</button>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }

    export default AddLecture