import { incBonus, incByAmt } from "../actions";

export function bonusReducer(state = { points: 2 }, action) {
  switch (action.type) {
    case incByAmt:
      if (action.payload > 100) {
        return { points: state.points + 1 };
      }
    case incBonus:
      return { points: state.points + 1 };
    default:
      return state;
  }
}
