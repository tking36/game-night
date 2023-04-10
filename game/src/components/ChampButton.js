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
    <div className='button-group'>
        <Button variant="success" onClick={() => handleChampAdd(player)}>
            +
        </Button>
        <Button className="players-half" variant="danger" onClick={() => handleChampSub(player)}>
            -
        </Button>
    </div>
  )
}

export default ChampButton