import React from 'react'
import { useDispatch } from 'react-redux'
import { addScore, subScore } from '../actions/playerActions'
import { Button } from 'react-bootstrap'


const ScoreButton = ({player}) => {
    const dispatch = useDispatch()

    const addScoreHandler = (player) => {
        dispatch(addScore(player))
    }

    const subScoreHandler = (player) => {
        dispatch(subScore(player))
    }

  return (
    <div>
        <Button onClick={() => addScoreHandler(player)}>+</Button>
        <Button onClick={() => subScoreHandler(player)}>-</Button>
    </div>
  )
}

export default ScoreButton