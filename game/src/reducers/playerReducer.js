import produce from "immer";
import { ADD_WIN, SUB_WIN, PLAYER_LIST_FAIL, PLAYER_LIST_SUCCESS, PLAYER_LIST_REQUEST} from "../constants/playerConstants";

export const playerReducer = (state = { players: [] }, action) => {
  switch (action.type) {
    case PLAYER_LIST_REQUEST:
      return { loading: true, players: [] };
    case PLAYER_LIST_SUCCESS:
      return { loading: false, players: action.payload };
    case PLAYER_LIST_FAIL:
      return {loading:false, error: action.payload };
    default:
      return state;
  }
};

export const winReducer = (state = { players: [] }, action) => {
  switch (action.type) {
    case ADD_WIN:
      return produce(state, (draftState) => {
        const player = draftState.players.find(
          (p) => p._id === action.payload._id
        );
        if (player) {
          player.wins += 1;
        }
      });
    case SUB_WIN:
      return produce(state, (draftState) => {
        const player = draftState.players.find(
          (p) => p._id === action.payload._id
        );
        if (player && player.wins > 0) {
          player.wins -= 1;
        }
      });
    default:
      return state;
  }
};