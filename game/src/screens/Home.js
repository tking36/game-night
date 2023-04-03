import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import bootstrap from 'bootstrap'
import Players from '../components/Players'
import PlayerButton from '../components/PlayerButton'
// import players from '../players'

const Home = () => {

  const players = useSelector(state => state.player.players);


  return (
    <Container fluid className='home-container'>
        <h1 className='title'>Home</h1>
        <Row className='justify-content-center'>
            <Col>1 of 3</Col>
            <Col xs={6}>
                <Players/>
            </Col>
            <Col>
            {players.map((player) => (
              <div key={player.name} >
                <PlayerButton  player={player}/>
              </div>
            ))}
              
            
            </Col>
        </Row>

    </Container>
  )
}

export default Home