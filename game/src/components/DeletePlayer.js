import React from 'react'
import {useDispatch} from 'react-redux'
import {deletePlayer} from '../actions/playerActions'
import {Button} from 'react-bootstrap'

const DeletePlayer = ({player}) => {
    const dispatch = useDispatch();

    const handleDeletePlayer = (player) => {
        dispatch(deletePlayer(player.id))
        console.log(player.id)
    }


  return (
    <div>
        <Button variant="danger" size="sm" onClick={() => handleDeletePlayer(player)}>
            {player.name} Del
        </Button>
    </div>
  )
}

export default DeletePlayer