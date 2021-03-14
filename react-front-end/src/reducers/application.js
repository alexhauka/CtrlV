export const SET_USER = "SET_USER"; 
export const SET_SKILLS = "SET_SKILLs"; 


export function reducer(state, action) {
  const { hardskills } = action;
  switch(action.type) {
    case SET_SKILLS: { // later to be changed to SET_APPLICATION_DATA
      return { ...state, hardskills };
    }
    default: throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }

}