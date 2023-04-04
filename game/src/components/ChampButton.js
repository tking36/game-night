import React from 'react'
import {useDispatch} from 'react-redux'
import { addChamp, subChamp } from '../actions/playerActions'
import {Button} from 'react-bootstrap'


const ChampButton = ({player}) => {
    const dispatch = useDispatch();

    const handleChampAdd = (player) => {
        dispatch(addChamp(player))
        console.log(player.id)
    }

    const handleChampSub = (player) => {
        dispatch(subChamp(player))
        console.log(player.id)
    }


  return (
    <div>
        <Button variant="success" size="sm" onClick={() => handleChampAdd(player)}>
            {player.name} Champ
        </Button>
        <Button variant="danger" size="sm" onClick={() => handleChampSub(player)}>
            {player.name} Not Champ
        </Button>
    </div>
  )
}

export default ChampButton