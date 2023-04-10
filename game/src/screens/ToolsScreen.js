import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Dice from '../components/Dice'
import NavBar from '../components/NavBar'
import RandomPlayer from '../components/RandomPlayer'

const ToolsScreen = () => {
  return (
    <>
    <NavBar />
    <Container className='tool-container'>
        <Row>
            <Col>
                <Dice />
            </Col>
            <Col>
                <RandomPlayer />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default ToolsScreen