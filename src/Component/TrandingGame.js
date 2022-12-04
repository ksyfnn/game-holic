import React from 'react'
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import ml from "../asset/trending/ml.jpg"
import farCryImage from "../asset/trending/farCry6.jpg"
import lolImage from "../asset/trending/lol.jpg"
import olliwoorldImage from "../asset/trending/olliworld.jpg"
import valorantImage from "../asset/trending/valorant.jpg"
import wowImage from "../asset/trending/wow.jpg"

export const TrandingGame = () => {
  return (
    <div>
        <Container>
            <br/>
            <h1 className='text-white text-center' id='trending'>TRANDING GAMES</h1>
            <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={ml} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">mobile legends</Card.Title>
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
                            <Image src={farCryImage} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">farcrys</Card.Title>
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
                            <Image src={lolImage} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">league of legends</Card.Title>
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
                            <Image src={olliwoorldImage} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">olli olli world</Card.Title>
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
                            <Image src={valorantImage} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">valorant</Card.Title>
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
                            <Image src={wowImage} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">world of warcraft</Card.Title>
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

export default TrandingGame;