import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Table} from 'react-bootstrap'
// import players from '../players'
import PlayerButton from './WinButton'
import ScoreButton from './ScoreButton'
import ChampButton from './ChampButton'
import { getPlayers } from '../actions/playerActions'

function Players() {
  
  const dispatch = useDispatch();

  const players = useSelector(state => state.player.players);


  useEffect(() => {
    dispatch(getPlayers())
  }, [dispatch])

  console.log(players)


  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
  {players ? (
    players.map((player, index) => (
      <tr key={player.name}>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{player.score}</td>
        <td><ScoreButton player={player}/></td>
        
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">Loading players...</td>
    </tr>
  )}
</tbody>

    </Table>
  )
}

export default Players