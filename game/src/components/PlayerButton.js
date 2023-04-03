import React, {useEffect, useState} from 'react'
import store from '../store'
import {Button, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { winAction } from '../actions/playerActions'
import { ADD_WIN, SUB_WIN } from '../constants/playerConstants'


function PlayerButton({player}) {
    const dispatch = useDispatch()

    
    
    

    const winReducer = useSelector(state => state.winReducer)
    

    const handleAddWin = (player) => {
        dispatch({ type: ADD_WIN, payload: { 
          name: player.name,
          wins: player.wins + 1,
          champion: player.champion
        } })
      }
    
      const handleSubWin = (player) => {
        dispatch({ type: SUB_WIN, payload: { 
          name: player.name,
          wins: player.wins - 1,
          champion: player.champion
         } })
      }

      const logPlayer = () => {
        console.log(player)
      }

      useEffect(() => {
        
        }, [dispatch, player])


  return (
    <Container>
        <button variant="primary" onClick={() => handleAddWin(player)}>
            Add Win
        </button>

        <button variant="danger" onClick={ () => handleSubWin(player)}>
            Subtract Win
        </button>

    </Container>
  )
}

export default PlayerButton