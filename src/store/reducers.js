import { COUNTING_TO_NEXT_PAGE } from './actions'


const initState = {
    count:0
}


export default (state = initState, action) => {
  switch (action.type) {
    case COUNTING_TO_NEXT_PAGE:
        if(state.count >= 2){
            return {
                count: 0
            };
        }else{
            return {
                count: state.count + 1
            };
        }
    default:
      return state;
  }
};