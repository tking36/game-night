import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addWin, subWin } from "../actions/playerActions";

function PlayerButton({ player }) {
  const dispatch = useDispatch();

  

  const handleAddWin = (player) => {
     
      dispatch(addWin(player));
      console.log(player)
  };

  const handleSubWin = (player) => {
    dispatch(subWin(player));
    console.log(player)
  };

  

  

  useEffect(() => {}, [dispatch, player]);

  return (
    <Container className='button-group'>
      <Button variant="success" onClick={() => handleAddWin(player)}>
        +
      </Button>

      <Button className="players-half" variant="danger" onClick={() => handleSubWin(player)}>
        -
      </Button>
    </Container>
  );
}

export default PlayerButton;
