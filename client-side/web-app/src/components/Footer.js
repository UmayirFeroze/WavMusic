import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


import image from '../assets/Akon.png';


export default function Footer() {

  return (
    <>
      <Container className='fixed-bottom Footer p-0 sticky-botom' fluid>
        <Row>
            <Col xs={1} className="p-2">
                <Image src={image} height={100} width={100} rounded/>
            </Col>

            <Col xs={2}className="p-2 text-left text-white">
                <h5 className="font-weight-bold mb-0 mt-2">Right Now (Na Na Na)</h5>
                <p className="text-white">Freedom</p>
                <p className="mb-1 text-white">Akon</p>
            </Col>

            <Col xs={6} className=" px-5">

               <div id="controls" className="ml-auto p-3">

                    <Row className="mx-auto">
                        {/* Shuffle */}
                        <Col sm={1} className="">
                            <button className="Button-secondary border-0" style={{borderRadius:'50%' ,width:40, height:40}}>
                                <i className="bi bi-shuffle text-white" style={{fontSize: 15}}></i>
                            </button>
                        </Col>

                        {/* Repeat */}
                        <Col sm={1} className="">
                            <button className="Button-secondary border-0" style={{borderRadius:'50%' ,width:40, height:40}}>
                                <i className="bi bi-arrow-repeat text-white" style={{fontSize: 20}}></i>
                            </button>
                        </Col>

                        {/* Skip Back */}
                        <Col sm={1} className=" p-0 ml-auto">
                            <button className="Button-secondary border-0" style={{borderRadius:'50%' ,width:50, height:50}}>
                                <i className="bi bi-skip-backward-fill  text-white" style={{fontSize: 25}}></i>
                            </button>
                        </Col>

                        {/* Play or Pause */}
                        <Col sm={1} className=" p-0">
                            <button className="Button-primary border-0" style={{borderRadius:'50%' ,width:50, height:50}}>
                                <i className="bi bi-play-fill text-white" style={{fontSize:30}}></i>
                            </button>
                        </Col>

                        {/* Skip Forward */}
                        <Col sm={1} className=" p-0 mr-auto">
                            <button className="Button-secondary border-0" style={{borderRadius:'50%' ,width:50, height:50}}>
                                <i className="bi bi-skip-forward-fill text-white" style={{fontSize: 25}}></i>
                            </button>
                        </Col>

                        {/* Add to playlist */}
                        <Col sm={1} className="">
                            <button className="Button-secondary border-0" style={{borderRadius:'50%' ,width:40, height:40}}>
                                <i className="bi bi-plus-lg text-white" style={{fontSize: 20}}></i>
                            </button>
                        </Col>

                        {/* Add to favourites */}
                        <Col sm={1} className="">
                            <button className="Button-secondary border-0" style={{borderRadius:'50%' ,width:40, height:40}}>
                                <i className="bi bi-suit-heart text-white" style={{fontSize: 20}}></i>
                            </button>
                        </Col>
                    </Row>
                </div>

                <div className="container w-100 text-white">
                    <div className="progress" style={{height:"5px"}}>
                        <div className="progress-bar progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className="align-self-start">
                        <span className="float-left"><small>00.00</small></span>
                    </div>

                    <div className="float-right">
                        <span className="align-self-start"><small>02.50</small></span>
                    </div>
                </div>
                
            </Col>

            {/* <Col xs={3} className="border border-danger">
                <Row className="justify-content-center align-items-center py-auto">
              
                    <Col sm={4} className="border border-primary mb-0" style={{height:'inherit'}}>
                        <button className="Button-secondary border-0" style={{borderRadius:'50%' ,width:40, height:40}}>
                            <i className="bi bi-body-text" style={{fontSize: 30}}></i>
                        </button>
                    </Col>

               
                    <Col sm={4} className="border border-primary mb-0" style={{height:'inherit'}}>
                        <div id="volume" className="d-flex flex-row">
                            <span><i class="bi bi-volume-down" style={{fontSize:20}}></i></span>
                            <Form.Range />
                            <span><i class="bi bi-volume-up" style={{fontSize:20}}></i></span>
                        </div>
                    </Col>
                </Row>
            </Col> */}
        </Row>
      </Container>
    </>
  );
}
