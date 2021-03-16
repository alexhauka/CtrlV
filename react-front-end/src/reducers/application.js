export const SET_USER = "SET_USER"; 
export const SET_UPDATED_USER = "SET_UPDATED_USER";
export const SET_USER_HARD_SKILLS = "SET_USER_HARD_SKILLS"; 
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";


export function reducer(state, action) {
  const { hardskills, userHardSkills, user, userInfo, userWorkExperience } = action;
  switch(action.type) {
    case SET_APPLICATION_DATA: { 
      return { ...state, hardskills, userHardSkills, user, userWorkExperience };
    }
    case SET_UPDATED_USER: {
      const user = {
        ...state.user,
        ...userInfo
      }
      return {...state, user }
    }
    default: throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }

}