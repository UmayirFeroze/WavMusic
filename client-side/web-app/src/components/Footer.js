import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


import image from '../assets/Akon.png';


export default function Footer() {

  return (
    <>
      <Container className='Footer p-0' fluid>
        <Row>
            <Col xs={12} md={1} className="p-2">
                <Image src={image} height={100} width={100} rounded/>
            </Col>

            <Col xs={12} md={2}className="text-xs-center text-md-left text-white">
                <h5 className="font-weight-bold mb-0 mt-2">Right Now (Na Na Na)</h5>
                <p className="mb-1 text-white">Freedom</p>
                <p className="mb-1 d-none d-sm-block text-white">Akon</p>
            </Col>

            <Col xs={12} md={6} className="p-5 p-md-0 my-md-auto">
                
                <Row className="mx-auto m-0 p-1 mb-md-0 d-flex justify-content-between  align-items-center">
                    {/* Shuffle */}
                    <Col xs={1} sm={1} className="p-0">
                        <span className="mx-auto w-100" style={{background:'inherit'}}>
                            <i className="bi bi-shuffle text-white" style={{fontSize: 20}}></i>
                        </span>
                    </Col>

                    {/* Repeat */}
                    <Col xs={1} sm={1} className="p-0">
                        <span className="mx-auto w-100" style={{background:'inherit'}}>
                            <i className="bi bi-arrow-repeat text-white" style={{fontSize: 20}}></i>
                        </span>
                    </Col>

                    {/* Skip Back */}
                    <Col xs={2} sm={1} className=" p-0 ml-auto">
                        <button className="Button-secondary" style={{borderRadius:'50%' ,width:50, height:50}}>
                            <i className="bi bi-skip-backward-fill  text-white" style={{fontSize: 25}}></i>
                        </button>
                    </Col>

                    {/* Play or Pause */}
                    <Col xs={2} sm={1} className=" p-0">
                        <button className="Button-primary" style={{borderRadius:'50%' ,width:50, height:50}}>
                            <i className="bi bi-play-fill text-white" style={{fontSize:30}}></i>
                        </button>
                    </Col>

                    {/* Skip Forward */}
                    <Col xs={2} sm={1} className=" p-0 mr-auto">
                        <button className="Button-secondary" style={{borderRadius:'50%' ,width:50, height:50}}>
                            <i className="bi bi-skip-forward-fill text-white" style={{fontSize: 25}}></i>
                        </button>
                    </Col>

                    {/* Add to playlist */}
                    <Col xs={1} sm={1} className="p-0">
                        <span className="mx-auto w-100" style={{background:'inherit'}}>
                            <i className="bi bi-plus-lg text-white" style={{fontSize: 20}}></i>
                        </span>
                    </Col>

                    {/* Add to favourites */}
                    <Col xs={1} sm={1} className="p-0">
                        <span className="mx-auto w-100" style={{background:'inherit'}}>
                            <i className="bi bi-heart text-white" style={{fontSize: 20}}></i>
                        </span>
                    </Col>
                </Row>
            
                
                <Row className="mx-auto">
                    <Col className="my-auto" xs={1}>
                        <span className="text-white"><small>00.00</small></span>
                    </Col>
                    <Col className="my-auto" xs={10}>
                        <div className="progress w-100" style={{height:"5px"}}>
                            <div className="progress-bar progress-bar-animated bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </Col>
                    <Col className="my-auto" xs={1}>
                        <span className="text-white"><small>03.00</small></span>
                    </Col>
                </Row>
                
                
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
