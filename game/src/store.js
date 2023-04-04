import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {playerReducer, winReducer, addNewPlayer, deletePlayer} from "./reducers/playerReducer";
// import {players} from "./players";


export const initialState = 
    [
        // {
        //     name: 'Taylor',
        //     wins: 2,
        //     champion: 0,
        // },
        // {
        //     name: 'Amanda',
        //     wins: 1,
        //     champion: 0,
        // },
        // {
        //     name: 'Zack',
        //     wins: 3,
        //     champion: 1,
        // },
        // {
        //     name: 'Lexis',
        //     wins: 1,
        //     champion: 0,
        // },
        
    
    ]


const store = configureStore({
    reducer: {
        win: winReducer,
        player: playerReducer,
        add: addNewPlayer,
        delete: deletePlayer, 
    },
    preloadedState: {
        player: {
            players: initialState,
        },
    }, 
    middleware: [thunk],
    
});

export default store;