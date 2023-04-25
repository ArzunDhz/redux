import axios from "axios";


//action name constants

export const init = 'account/init'
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmt = 'account/increaseByAmt'
export const incBonus = 'bonus/increment'
export const postLoading ="postLoading";
export const postLoaded ="postLoaded";
export const postFetchingFailed ="postFetchingFailed";
export const decByAmt = 'account/decremntByAmt '

//action creators
export function getUser(id) {
    return async (dispatch, getState) => {
          dispatch(isPostLoading())
        try {
          const { data } = await axios.get(
                  `https://jsonplaceholder.typicode.com/posts/${id}`
                );
                dispatch(isPostLoaded(data));
        }catch(error){
          dispatch(isPostFetchingFailed(error.message))
        }
  
    };
  }
  
  
export function increment() {
    return { type: inc }
}
export function decrement() {
    return { type: dec }
}
export function incrementByAmt(value) {
    return { type: incByAmt, payload: value }
}

export function incrementBonus()
{
    return {type:incBonus }
}

  export function isPostLoaded(value) {
    return { type: postLoaded, payload: value };
  }
  export function isPostLoading() {
    return { type: postLoading};
  }
  export function isPostFetchingFailed(error) {
    return { type: postFetchingFailed, payload:error };
  }
  
  export function decrementByAmt(value)
  {
    return {type:decByAmt , payload:value}
  }