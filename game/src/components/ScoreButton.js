import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addScore, subScore } from '../actions/playerActions'
import { Button, FormControl, InputGroup } from 'react-bootstrap'



const ScoreButton = ({player}) => {
    const dispatch = useDispatch()
    const [incrementValue, setIncrementValue] = useState(1)

    const addScoreHandler = (player) => {
  const increment = parseInt(incrementValue)
  dispatch(addScore(player, increment))
}

const subScoreHandler = (player) => {
  const increment = parseInt(incrementValue)
  dispatch(subScore(player, increment))
}

    return (
      <div>
        
          <FormControl
          className='score-input'
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(e.target.value)}
          />
          
            <Button onClick={() => dispatch(addScore(player, incrementValue))}>+</Button>
            <Button className="players" onClick={() => dispatch(subScore(player, incrementValue))}>
              -
            </Button>
          
       
      </div>
    );
}

export default ScoreButton