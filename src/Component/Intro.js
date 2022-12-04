import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"

export const Intro = () => {
  return (
    <div className='intro'>
        <Container className=" text-center d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <div className="title">ON TARGET</div>
                    <div className="title">MISSION COMPLETE</div>
                    <div className="introButton m-4 text-center">
                        <Button variant="dark" href="#trending">See all list</Button>
                    </div>
                </Col>
            </Row>

        </Container>
    </div>
  )
}

export default Intro;
