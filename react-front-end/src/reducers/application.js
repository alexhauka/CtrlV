export const SET_USER = "SET_USER"; 
export const SET_SKILLS = "SET_SKILLs"; 
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";


export function reducer(state, action) {
  const { hardskills, user } = action;
  switch(action.type) {
    case SET_APPLICATION_DATA: { 
      return { ...state, hardskills, user };
    }
    default: throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }

}