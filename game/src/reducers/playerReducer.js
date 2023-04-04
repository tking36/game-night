import { ADD_WIN, SUB_WIN, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS, PLAYER_LIST_FAIL, ADD_PLAYER_FAIL, ADD_PLAYER_SUCCESS, ADD_PLAYER_REQUEST, DELETE_PLAYER_REQUEST, DELETE_PLAYER_SUCCESS, DELETE_PLAYER_FAIL, ADD_CHAMP_SUCCESS,  SUB_CHAMP_SUCCESS, ADD_SCORE_SUCCESS, SUB_SCORE_SUCCESS, SCORE_RESET} from "../constants/playerConstants";

const initialState = {
  loading: false,
  players: [],
  error: null
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


// Reducer function to handle adding and subtracting wins
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

  // Reducer function to handle adding and subtracting wins
  export const champReducer = (state = { players: [] }, action) => {
    switch (action.type) {
      case ADD_CHAMP_SUCCESS:
        console.log('Add champ:', action.payload);
        return {
          ...state,
          players: state.players.map(player =>
            player.id === action.payload.id ? action.payload : player
          )
        };
      case SUB_CHAMP_SUCCESS:
        console.log('Subtract champ:', action.payload);
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


// Reducer function to handle adding and subtracting score
  export const scoreReducer = (state = { players: [] }, action) => {
    switch (action.type) {
      case ADD_SCORE_SUCCESS:
        console.log('Add score:', action.payload);
        return {
          ...state, 
          players: state.players.map(player => 
            player.id === action.payload.id ? action.payload : player
            )
    }
    case SUB_SCORE_SUCCESS:
      console.log('Subtract score:', action.payload);
      return {
        ...state,
        players: state.players.map(player =>
          player.id === action.payload.id ? action.payload : player
        )
      };
    case SCORE_RESET:
      console.log('Reset score:', action.payload);
      return {
        ...state,
        score: 0,
      };
    default:
      return state;
  }
};
  
  

 






