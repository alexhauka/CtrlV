export const SET_USER = "SET_USER"; 
export const SET_USER_HARD_SKILLS = "SET_USER_HARD_SKILLS"; 
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";


export function reducer(state, action) {
  const { hardskills, userHardSkills, user, userWorkExperience } = action;
  switch(action.type) {
    case SET_APPLICATION_DATA: { 
      return { ...state, hardskills, userHardSkills, user, userWorkExperience };
    }
    default: throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }

}