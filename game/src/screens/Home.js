import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import bootstrap from 'bootstrap'
import Players from '../components/Players'
import PlayerButton from '../components/PlayerButton'
import AddPlayer from '../components/AddPlayer'
import DeletePlayer from '../components/DeletePlayer'
// import players from '../players'

const Home = () => {

  const players = useSelector(state => state.player.players);


  return (
    <Container fluid className='home-container'>
        <h1 className='title'>Home</h1>
        <Row className='justify-content-center'>
            <Col>
              <AddPlayer/>
            </Col>
            <Col xs={6}>
                <Players/>
            </Col>
            <Col>
            {players.map((player) => (
              <div key={player.name} >
                <PlayerButton  player={player}/>
                <DeletePlayer player={player}/>
              </div>
            ))}
              
            
            </Col>
        </Row>

    </Container>
  )
}

export default Home