import React from 'react'
import "../css/VideosWatch.css"
import { Accordion, Button } from 'react-bootstrap'
import {  FaVideo } from 'react-icons/fa'
import video from "../images/js.mp4"
const VideosWatch = () => {
   


    return (
        <>
            <section className='section-video' style={{marginTop:"100px"}}>
            <div className="VI container" style={{ width: '100%', height: '500px' }}>
            <div className="embed-responsive embed-responsive-16by9 mb-3">
              <video className="embed-responsive-item" autoPlay="true"  controls src={video} />
            </div>
          </div>
                <h1 style={{ textAlign: "center" }}>Course Name :<p className='text'>react cource</p> Content</h1>
                <Accordion className='container mt-5 p-3'>
                    
                        
                            <Accordion.Item eventKey="0" className='mb-3'>
                                <Accordion.Header>section 1</Accordion.Header>
                                <Accordion.Body>
                                        <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                                <div  className="d-flex align-items-center">
                                                <Button variant="primary" size="sm" className="me-2">
                                                  <FaVideo />
                                                </Button>
                                                <span>lecture1</span>
                                              </div>
                                                <p className='pp'>redux</p>
                                        
                                        </div>
                                    
                                </Accordion.Body>
                                <Accordion.Body>
                                        <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                                <div  className="d-flex align-items-center">
                                                <Button variant="primary" size="sm" className="me-2">
                                                  <FaVideo />
                                                </Button>
                                                <span>lecture1</span>
                                              </div>
                                              <p className='pp'>redux</p>
                                        
                                        </div>
                                    
                                </Accordion.Body>
                                <Accordion.Body>
                                        <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                                <div  className="d-flex align-items-center">
                                                <Button variant="primary" size="sm" className="me-2">
                                                  <FaVideo />
                                                </Button>
                                                <span>lecture1</span>
                                              </div>
                                              <p className='pp'>redux</p>
                                        
                                        </div>
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='mb-3'>
                            <Accordion.Header>section 1</Accordion.Header>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center ">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='mb-3'>
                            <Accordion.Header>section 1</Accordion.Header>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center ">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='mb-3'>
                            <Accordion.Header>section 1</Accordion.Header>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center ">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='mb-3'>
                            <Accordion.Header>section 1</Accordion.Header>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center ">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    
                                    </div>
                                
                            </Accordion.Body>
                            <Accordion.Body>
                                    <div className="d-flex align-items-center mb-2  mb-2 video-item">
                                            <div  className="d-flex align-items-center">
                                            <Button variant="primary" size="sm" className="me-2">
                                              <FaVideo />
                                            </Button>
                                            <span>lecture1</span>
                                          </div>
                                          <p className='pp'>redux</p>
                                    </div>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                      
                    
                
                </Accordion>
            </section>
        </>
    )
}

export default VideosWatch
