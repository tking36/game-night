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

  const logPlayer = () => {
    console.log(player);
  };

  

  useEffect(() => {}, [dispatch, player]);

  return (
    <Container>
      <Button variant="success" size="sm" onClick={() => handleAddWin(player)}>
        {player.name}
      </Button>

      <Button variant="danger" size="sm" onClick={() => handleSubWin(player)}>
        {player.name}
      </Button>
    </Container>
  );
}

export default PlayerButton;
