import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {" "}
      {/* useReducer returns the state and a dispatch function to update state */}
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
