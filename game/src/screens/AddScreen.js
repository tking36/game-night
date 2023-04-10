import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AddPlayer from '../components/AddPlayer'
import NavBar from '../components/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import DeletePlayer from '../components/DeletePlayer'
import { getPlayers } from '../actions/playerActions'

const AddScreen = () => {
    const dispatch = useDispatch()
    dispatch({type: 'PLAYER_LIST_REQUEST'})
    const players = useSelector(state => state.player.players)

    console.log(players)


    useEffect(() => {
        dispatch(getPlayers())
      }, [dispatch])

  return (
    <Container> 
        <NavBar/>
        <Row className='justify-content-center'>
            <Col xs={6}>
                <AddPlayer/>
            </Col>
            <Col>
                {players.map(player => (
                    <DeletePlayer key={player.id} player={player}/>
                ))}
            </Col>
        </Row>
    </Container>
  )
}

export default AddScreen