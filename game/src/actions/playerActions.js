import { ADD_WIN, SUB_WIN, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS, PLAYER_LIST_FAIL} from "../constants/playerConstants";
import axios from "axios";



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

export const addWin = (player) => async (dispatch) => {
    try {
        const updatedPlayer = {...player, player: player.wins + 1};
        const {data} = await axios.put(`http://localhost:8000/api/players/${player._id}`, updatedPlayer);
        dispatch({ type:ADD_WIN, payload: data });
    } catch (error) {
        console.log(error)
    }
    };

    export const subWin = (player) => async (dispatch) => {
        try {
            const updatedPlayer = {...player, player: player.wins - 1};
            const {data} = await axios.put(`http://localhost:8000/api/players/${player._id}`, updatedPlayer);
            dispatch({ type:SUB_WIN, payload: data });
        } catch (error) {
            console.log(error)
        }
        }

// export const winAction = (player) => (dispatch) => {
//     dispatch({
//         type: ADD_WIN,
//         payload: {
//             name: player.name,
//             wins: ++player.wins,
//             champion: player.champion,
//         },
//     });
//     dispatch({
//         type: SUB_WIN,
//         payload: {
//             name: player.name,
//             wins: --player.wins,
//             champion: player.champion,
//         },
//     });
// }
