import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getPlayers } from '../actions/playerActions'

const RandomPlayer = () => {
    const dispatch = useDispatch()

    const players = useSelector(state => state.player.players)
    const [randomPlayer, setRandomPlayer] = useState('Random')

    const randomPlayerHandler = () => {
        const random = Math.floor(Math.random() * players.length)
        setRandomPlayer(players[random].name)
    }


    useEffect(() => {
        dispatch(getPlayers())
        }, [])

  return (
    <div className='random-player'>
        <h2>{randomPlayer}</h2>
        <Button onClick={randomPlayerHandler} >
            Random Player
        </Button>
    </div>
  )
}

export default RandomPlayer