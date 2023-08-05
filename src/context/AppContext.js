import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload),
            };

        default:
            return state;
    }
};

const initialState = {
    budget: 5000000,
    expenses: [
        {id: uuidv4(), name: 'lunch', cost: 50000},
        {id: uuidv4(), name: 'dinner', cost: 50000},
        {id: uuidv4(), name: 'coffee', cost: 30000},
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
    }}>
        {props.children}

    </AppContext.Provider>)
};