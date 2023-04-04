import { ADD_WIN, SUB_WIN, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS, PLAYER_LIST_FAIL, ADD_PLAYER_FAIL, ADD_PLAYER_REQUEST, ADD_PLAYER_SUCCESS, DELETE_PLAYER_FAIL, DELETE_PLAYER_SUCCESS, DELETE_PLAYER_REQUEST} from "../constants/playerConstants";
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
        const { data } = await axios.post("http://localhost:8000/api/players", {name, wins: 0, champion: 0});
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


// export const deletePlayer = (id) => async (dispatch) => {
//     try {
//         await axios.delete(`http://localhost:8000/api/players/${id}`);
//         dispatch({ type: DELETE_PLAYER, payload: id });
//         dispatch(getPlayers());
//     } catch (error) {
//         console.log(error)
//     }
// };


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

