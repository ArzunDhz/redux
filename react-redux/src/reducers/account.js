
import {init, inc, dec,incByAmt , decByAmt} from "../actions";


export function accountReducer(state = { amount:0 }, action) {
    switch (action.type) {
            case init:
                    return { amount: action.payload }
            case inc:
                    return { amount: state.amount + 1 };
            case dec:
                    return { amount: state.amount - 1 };
            case incByAmt:
                    return { amount: state.amount + action.payload };
            case decByAmt:
                return {amount:state.amount - action.payload }


            default:
                    return state;
    }

}