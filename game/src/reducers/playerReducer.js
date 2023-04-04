import { ADD_WIN, SUB_WIN, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS, PLAYER_LIST_FAIL, ADD_PLAYER_FAIL, ADD_PLAYER_SUCCESS, ADD_PLAYER_REQUEST, DELETE_PLAYER_REQUEST, DELETE_PLAYER_SUCCESS, DELETE_PLAYER_FAIL } from "../constants/playerConstants";

const initialState = {
  loading: false,
  players: [],
  error: null
};


  export const winReducer = (state = { players: [] }, action) => {
    switch (action.type) {
      case ADD_WIN:
        console.log('Add win:', action.payload);
        return {
          ...state,
          players: state.players.map(player =>
            player.id === action.payload.id ? action.payload : player
          )
        };
      case SUB_WIN:
        console.log('Subtract win:', action.payload);
        return {
          ...state,
          players: state.players.map(player =>
            player.id === action.payload.id ? action.payload : player
          )
        };
      default:
        return state;
    }
  };
  
  // Reducer function to handle loading player data
  export const playerReducer = (
    state = { loading: false, error: null, players: [] },
    action
  ) => {
    switch (action.type) {
      case PLAYER_LIST_REQUEST:
        return { ...state, loading: true };
      case PLAYER_LIST_SUCCESS:
        return { ...state, loading: false, players: action.payload };
      case PLAYER_LIST_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const addNewPlayer = (state = { loading: false, error: null, players: [] }, action) => {
    switch (action.type) {
      case ADD_PLAYER_REQUEST:
        return { ...state, loading: true };
      case ADD_PLAYER_SUCCESS:
        return { ...state, loading: false, players: action.payload };
      case ADD_PLAYER_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    } 
  }

  export const deletePlayer = (state = { loading: false, error: null, players: [] }, action) => {
    switch (action.type) {
      case DELETE_PLAYER_REQUEST:
        return { ...state, loading: true };
      case DELETE_PLAYER_SUCCESS:
        return { ...state, loading: false, players: action.payload };
      case DELETE_PLAYER_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }


  // export const deletePlayer = (state= {loading: false, error: null, players: []}, action) => {
  //   switch (action.type) {
  //     case DELETE_PLAYER:
  //       return { ...state, players: action.payload}
  //     default:
  //       return state;
  //   }
  // }




