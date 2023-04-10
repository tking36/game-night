import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetScores } from '../actions/playerActions'
import { Button } from 'react-bootstrap'

const ScoreReset = () => {

    const dispatch = useDispatch()
    const players = useSelector(state => state.player.players)

    const handleReset = () => {
        dispatch(resetScores({players}))
    }

  return (
    <div>
        <Button onClick={handleReset} >Reset Scores</Button>
    </div>
  )
}

export default ScoreReset