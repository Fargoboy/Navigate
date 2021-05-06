import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
  all_visitors: [{visitorName: "Help", visitorEmail: "Me", visitorPhone: "Good"}],
};
 
const visitorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_VISITOR':  
        const { all_visitors } = state; 
        const newState = {all_visitors: [...all_visitors, action.payload]};
        return newState; 
    default:
      return state
  }
};
 
export default combineReducers({
  visitors: visitorsReducer
});