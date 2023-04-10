import { ADD_WIN, SUB_WIN, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS, PLAYER_LIST_FAIL, ADD_PLAYER_FAIL, ADD_PLAYER_REQUEST, ADD_PLAYER_SUCCESS, DELETE_PLAYER_FAIL, DELETE_PLAYER_SUCCESS, DELETE_PLAYER_REQUEST, ADD_CHAMP_SUCCESS, ADD_SCORE_FAIL, ADD_SCORE_REQUEST, ADD_SCORE_SUCCESS, SUB_SCORE_FAIL, SUB_SCORE_REQUEST, SUB_SCORE_SUCCESS, SCORE_RESET } from "../constants/playerConstants";
import axios from "axios";




// GET PLAYERS
export const getPlayers = () => async (dispatch) => {
    try {
        dispatch({ type: PLAYER_LIST_REQUEST });
        const { data } = await axios.get("http://localhost:8000/api/players");
        dispatch({
            type: PLAYER_LIST_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: PLAYER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// ADD PLAYER
export const addPlayer = (name) => async (dispatch) => {
    try {
        dispatch({ type: ADD_PLAYER_REQUEST });
        const { data } = await axios.post("http://localhost:8000/api/players", {name});
        dispatch({
            type: ADD_PLAYER_SUCCESS,
            payload: data,
        });
        dispatch(getPlayers());
    } catch (error) {
        dispatch({
            type: ADD_PLAYER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// DELETE PLAYER

export const deletePlayer = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PLAYER_REQUEST });
        await axios.delete(`http://localhost:8000/api/players/${id}`);
        dispatch({
            type: DELETE_PLAYER_SUCCESS,
            payload: id,
        });
        dispatch(getPlayers());
    } catch (error) {
        dispatch({
            type: DELETE_PLAYER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};



// ADD AND SUBTRACT WIN
export const addWin = (player) => async (dispatch) => {
    try {
        const updatedPlayer = {...player,wins: player.wins + 1};
        const {data} = await axios.put(`http://localhost:8000/api/players/${player.id}`, updatedPlayer);
        dispatch({ type:ADD_WIN, payload: data });
        dispatch(getPlayers());
    } catch (error) {
        console.log(error)
    }
    };

    export const subWin = (player) => async (dispatch) => {
        try {
            const updatedPlayer = {...player, wins: player.wins - 1};
            const {data} = await axios.put(`http://localhost:8000/api/players/${player.id}`, updatedPlayer);
            dispatch({ type:SUB_WIN, payload: data });
            dispatch(getPlayers());
        } catch (error) {
            console.log(error)
        }
        }

    
    
    // ADD AND SUBTRACT CHAMPIONSHIP
    export const addChamp = (player) => async (dispatch) => {
        try {
            const updatedPlayer = {...player, champion: player.champion + 1};
            const {data} = await axios.put(`http://localhost:8000/api/players/${player.id}`, updatedPlayer);
            dispatch({ type:ADD_CHAMP_SUCCESS, payload: data });
            dispatch(getPlayers());
        } catch (error) {
            console.log(error)
        }
        }

    export const subChamp = (player) => async (dispatch) => {
        try {
            const updatedPlayer = {...player, champion: player.champion - 1};
            const {data} = await axios.put(`http://localhost:8000/api/players/${player.id}`, updatedPlayer);
            dispatch({ type:ADD_CHAMP_SUCCESS, payload: data });
            dispatch(getPlayers());
        } catch (error) {
            console.log(error)
        }
        }

    // ADD AND SUBTRACT SCORE

    export const addScore = (player, incrementValue) => async (dispatch) => {
        try {
            const updatedPlayer = {...player, score: player.score + parseInt(incrementValue)};
            const {data} = await axios.put(`http://localhost:8000/api/players/${player.id}`, updatedPlayer);
            dispatch({ type:ADD_SCORE_SUCCESS, payload: data });
            dispatch(getPlayers());
        } catch (error) {
            console.log(error)
        }
        }


    export const subScore = (player, incrementValue) => async (dispatch) => {
        try {
            const updatedPlayer = {...player, score: player.score - parseInt(incrementValue)};
            const {data} = await axios.put(`http://localhost:8000/api/players/${player.id}`, updatedPlayer);
            dispatch({ type:SUB_SCORE_SUCCESS, payload: data });
            dispatch(getPlayers());
        } catch (error) {
            console.log(error)

        }
    }

    export const resetScores = ({players}) => async (dispatch) => {
        try {
          
          const updatedPlayers = await Promise.all(
            players.map(async (player) => {
              const { data } = await axios.put(`http://localhost:8000/api/players/${player.id}`, {
                name: player.name,
                score: 0,
                wins: player.wins,
                champion: player.champion
              });
              return data;
            })
          );
          dispatch({ type: SCORE_RESET, payload: updatedPlayers });
          dispatch(getPlayers());
        } catch (error) {
          console.log(error);
        }
      }
      
      
    

