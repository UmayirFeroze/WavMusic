import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MusicCard from './MusicCard';

export default function MusicBar({title, songs}){
    return(
        <Container fluid className='p-0 mt-2 text-left'>
            <h2>{title && title}</h2>

            <div className="w-100  overflow-hidden">
                <Row>
                    {songs &&  songs.map((song,index) => {
                        return (
                        <Col xs={12} sm={6} md={4} lg={4} xl={2} className=' pt-1 px-1' key={index}>
                            <MusicCard song={song}/>
                        </Col>);
                    })}
                </Row>
            </div>
      </Container>
    )
}
