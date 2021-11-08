import React from "react";
import { IAction, IState } from "./interfaces";



const initialState:IState = {
    episodes: [],
    favourites: []
};

export const Store = React.createContext<IState | any>(initialState);

function Reducer(state:IState, action: IAction): IState{
    switch(action.type){
        case 'FETCH_DATA':
            return {...state, episodes: action.payload }
        case 'ADD_FAV':
            return {...state, favourites: [...state.favourites, action.payload]}
        case 'REMOVE_FAV':
            return {...state, favourites: action.payload}
        default:
            return state ;
    }
}

export function StoreProvider(props:any): JSX.Element{
    const [state, dispatch] = React.useReducer(Reducer, initialState);
    return <Store.Provider value={{state,dispatch}}>{props.children}</Store.Provider>
    // return <Store.Provider>{props.childern}</Store.Provider>
    // return(props.children)
}