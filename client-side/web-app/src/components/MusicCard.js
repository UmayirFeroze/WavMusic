import React, { useState } from 'react';
import {  Card } from 'react-bootstrap';

// import image from '../assets/Rihanna.png';
import '../App.css';

export default function MusicCard({song}){
    const [show, setShow] = useState(false);
    
    // const img = require(`${String(song.image)}`);
    // console.log(`${song.image}`);
    return (
        <>
            <Card className="bg-dark text-white" onMouseEnter={()=>setShow(true)}  onMouseLeave={()=>setShow(false)}>
                <Card.Img src={require(`../assets/${song.image}`).default} alt="Card image" height={'auto'} width={'auto'}/>
                
                    <Card.ImgOverlay className={!show ? 'MusicCard m-auto' : 'MusicCard m-auto d-none'}>
                        <div className="h-100">
                            <div className="text-center h-100 d-flex flex-column">
                                <div className="my-auto">
                                    <Card.Title className="">{song.name}</Card.Title>
                                    
                                    <Card.Subtitle className="text-muted">{song.album}</Card.Subtitle>

                                    <Card.Text className="overflow-hidden my-0">
                                    {Array.isArray(song.authors) && song.authors.map((author, index) => 
                                            <span key={index}>{author.name} </span>
                                            )}
                                    </Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card.ImgOverlay>
                
                
                    <Card.ImgOverlay className={!show ? 'd-none' : 'MusicCard'}>
                        <div className='h-100'>
                            <div className="text-center h-100 d-flex justify-content-between">
                                <span className="my-auto"><i className="bi bi-plus-lg" style={{fontSize:40}}></i></span>
                                <span className="my-auto"><i className="bi bi-play-fill" style={{fontSize:50}}></i></span>
                                <span className="my-auto"><i className={song.favourite ? 'bi bi-heart' : 'bi bi-heart-fill'} style={{fontSize:40}}></i></span>
                            </div>
                        </div>
                    </Card.ImgOverlay> 
            </Card>
        </>
    )
}