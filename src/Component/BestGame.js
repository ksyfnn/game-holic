import React from 'react'
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import back4blood from "../asset/best/back4blood.jpg"
import crysis3 from "../asset/best/crysis3.jpg"
import theWalkingDead from "../asset/best/theWalkingDead.jpg"
import thief from "../asset/best/thief.jpg"
import residentEvil2 from "../asset/best/residentEvil2.jpg"
import untilDawn from "../asset/best/untilDawn.jpg"
const BestGame = () => {
  return (
    <div>
        <Container>
            <br/>
            <h1 className='text-white text-center' id='bestGame'>BEST GAMES</h1>
            <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={back4blood} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">back 4 blood</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a winder car with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={crysis3} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">crysis 3</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a winder car with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={residentEvil2} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">resident evil 3</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a winder car with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={theWalkingDead} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">the walking dead</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a winder car with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={thief} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">thief</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a winder car with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={untilDawn} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">until dawn</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a winder car with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
        </Container>
    </div>
  )
}

export default BestGame;