import React from 'react'
const initialState = {
    items: [],
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        return { ...state, items: action.payload };
      default:
        return state;
    }
  };
  
  export default itemReducer;