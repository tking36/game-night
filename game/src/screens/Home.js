import React, {useState } from 'react'
import {useSelector} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import bootstrap from 'bootstrap'
import Players from '../components/Players'
import PlayerButton from '../components/WinButton'
import DeletePlayer from '../components/DeletePlayer'
import ChampButton from '../components/ChampButton'
import ScoreButton from '../components/ScoreButton'
import ScoreReset from '../components/ScoreReset'
import NavBar from '../components/NavBar'
import PlayerStats from '../components/PlayerStats'
// import players from '../players'

const Home = () => {

  const players = useSelector(state => state.player.players);

  


  return (
    <Container fluid className='home-container'>
        <NavBar/>
        <Row className='justify-content-center'>
            <Col>
                <Players/>
            </Col>
            <Col>
              <PlayerStats/>
            </Col>
        </Row>
        <ScoreReset players={players}/>

    </Container>
  )
}

export default Home