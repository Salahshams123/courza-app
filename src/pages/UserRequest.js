import React from 'react'
import "../css/UserRequest.css"
import { Link } from 'react-router-dom'

const UserRequest = () => {

    

    return (
        <>
            <div className='userrequests'>
                <div className='container-fluid '>
                    <h2 className=' text-center' style={{ marginBottom: "50px" }}> New User Request</h2>
                    <div className='col-10   '>
                        <div className='' table-responsive>
                            <table id="myTable" className='table'>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>title</th>
                                        <th>description</th>
                                        <th>price</th>
                                        <th>view</th>
                                        <th colSpan="2">Reject</th>
                                        <th colSpan="2">Allow</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                        <tr>
                                            <td>1</td>
                                            <td>react js</td>
                                            <td>ali saad</td>
                                            <td>125$</td>
                                            <td colSpan="1"><button className='btn btn-success '><Link to={"/coursewatch"}className='text-white' >View</Link></button></td>
                                            <td colSpan="2">
                                                <button className='btn btn-danger'>Reject</button>
                                            </td>
                                            <td colSpan="2">
                                                <button className='btn btn-success'>Allow</button>
                                            </td>
                                        </tr>

                                        <tr>
                                        <td>1</td>
                                        <td>react js</td>
                                        <td>ali saad</td>
                                        <td>125$</td>
                                        <td colSpan="1"><button className='btn btn-success'><Link to={"/coursewatch"} className='text-white'>View</Link></button></td>
                                        <td colSpan="2">
                                            <button className='btn btn-danger'>Reject</button>
                                        </td>
                                        <td colSpan="2">
                                            <button className='btn btn-success'>Allow</button>
                                        </td>
                                    </tr>

                                    <tr>
                                    <td>1</td>
                                    <td>react js</td>
                                    <td>ali saad</td>
                                    <td>125$</td>
                                    <td colSpan="1"><button className='btn btn-success'><Link to={"/coursewatch"} className='text-white'>View</Link></button></td>
                                    <td colSpan="2">
                                        <button className='btn btn-danger'>Reject</button>
                                    </td>
                                    <td colSpan="2">
                                        <button className='btn btn-success'>Allow</button>
                                    </td>
                                </tr>


                                <tr>
                                <td>1</td>
                                <td>react js</td>
                                <td>ali saad</td>
                                <td>125$</td>
                                <td colSpan="1"><button className='btn btn-success'><Link to={"/coursewatch"} className='text-white'>View</Link></button></td>
                                <td colSpan="2">
                                    <button className='btn btn-danger'>Reject</button>
                                </td>
                                <td colSpan="2">
                                    <button className='btn btn-success'>Allow</button>
                                </td>
                            </tr>

                            <tr>
                            <td>1</td>
                            <td>react js</td>
                            <td>ali saad</td>
                            <td>125$</td>
                            <td colSpan="1"><button className='btn btn-success'><Link to={"/coursewatch"} className='text-white'>View</Link></button></td>
                            <td colSpan="2">
                                <button className='btn btn-danger'>Reject</button>
                            </td>
                            <td colSpan="2">
                                <button className='btn btn-success'>Allow</button>
                            </td>
                        </tr>


                        <tr>
                        <td>1</td>
                        <td>react js</td>
                        <td>ali saad</td>
                        <td>125$</td>
                        <td colSpan="1"><button className='btn btn-success'><Link to={"/coursewatch"} className='text-white'>View</Link></button></td>
                        <td colSpan="2">
                            <button className='btn btn-danger'>Reject</button>
                        </td>
                        <td colSpan="2">
                            <button className='btn btn-success'>Allow</button>
                        </td>
                    </tr>


                    <tr>
                    <td>1</td>
                    <td>react js</td>
                    <td>ali saad</td>
                    <td>125$</td>
                    <td colSpan="1"><button className='btn btn-success'><Link to={"/coursewatch"} className='text-white'>View</Link></button></td>
                    <td colSpan="2">
                        <button className='btn btn-danger'>Reject</button>
                    </td>
                    <td colSpan="2">
                        <button className='btn btn-success'>Allow</button>
                    </td>
                </tr>


                <tr>
                <td>1</td>
                <td>react js</td>
                <td>ali saad</td>
                <td>125$</td>
                <td colSpan="1"><button className='btn btn-success'><Link to={"/coursewatch"} className='text-white'>View</Link></button></td>
                <td colSpan="2">
                    <button className='btn btn-danger'>Reject</button>
                </td>
                <td colSpan="2">
                    <button className='btn btn-success'>Allow</button>
                </td>
            </tr>


            <tr>
            <td>1</td>
            <td>react js</td>
            <td>ali saad</td>
            <td>125$</td>
            <td colSpan="1"><button className='btn btn-success'><Link to={"/coursewatch"} className='text-white'>View</Link></button></td>
            <td colSpan="2">
                <button className='btn btn-danger'>Reject</button>
            </td>
            <td colSpan="2">
                <button className='btn btn-success'>Allow</button>
            </td>
        </tr>

                            
                                </tbody>



                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserRequest