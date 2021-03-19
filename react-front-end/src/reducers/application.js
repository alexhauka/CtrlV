export const SET_USER = "SET_USER"; 
export const SET_UPDATED_USER = "SET_UPDATED_USER";
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_SKILL = "SET_SKILL"; 
export const DELETE_SKILL = "DELETE_SKILL";
export const SET_WORK = "SET_WORK";
export const DELETE_WORK = "DELETE_WORK";
export const SET_UPDATED_WORK = "SET_UPDATED_WORK";
export const RESET_APPLICATION_DATA = "RESET_APPLICATION_DATA";
export const SET_PROJECTS = "SET_PROJECTS";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const SET_UPDATED_PROJECT = "SET_UPDATED_PROJECT";


// export function reducer(state, action) {
//   const { hardskills, userHardSkills, user, userInfo, userWorkExperience, updateWork } = action;
//   switch(action.type) {
//     case SET_APPLICATION_DATA: { 
//       return { ...state, hardskills, userHardSkills, userWorkExperience };

export function reducer(state, action) {
  const {isLoggingIn, hardskills, userHardSkills, skill, user, userInfo, userWorkExperience, workInfo, userProjects, projectInfo, userResumes } = action;
  switch(action.type) {
    case SET_APPLICATION_DATA: { 
      return { ...state, hardskills, userHardSkills, user, userWorkExperience, userProjects, userResumes };
    }
    case SET_UPDATED_USER: {
      const user = {
        ...state.user,
        ...userInfo
      }
      return {...state, user }
    }
    case SET_WORK: {
      const userWorkExperience = [
        ...state.userWorkExperience,
        workInfo
      ]
      return {...state, userWorkExperience}
    }
    case DELETE_WORK: {
      const userWorkExperience = [ 
        ...state.userWorkExperience
      ]
      const removeIndex = userWorkExperience.findIndex(w => w.id === workInfo.id)
      userWorkExperience.splice(removeIndex, 1)

      return {...state, userWorkExperience}
    }
    case SET_UPDATED_WORK: {
      const userWorkExperience = [
        ...state.userWorkExperience
      ]
      const index = userWorkExperience.findIndex(w => w.id === workInfo.id)
      userWorkExperience[index] = {
        ...workInfo
      }
      return {...state, userWorkExperience}
    }
    case SET_USER: {
      return {...state, user, isLoggingIn}
    }
    case RESET_APPLICATION_DATA: {
      return {...state, isLoggingIn, hardskills, userHardSkills, user, userWorkExperience, userProjects, userResumes }
    }
    case SET_PROJECTS: {
      const userProjects = [
        ...state.userProjects,
        projectInfo
      ]
      return {...state, userProjects}
    }
    case DELETE_PROJECT: {
      const userProjects = [
        ...state.userProjects
      ]
      const removeIndex = userProjects.findIndex(p => p.id === projectInfo.id)
      userProjects.splice(removeIndex, 1)

      return {...state, userProjects}
    }
    case SET_UPDATED_PROJECT: {
      const userProjects = [
        ...state.userProjects
      ]
      const index = userProjects.findIndex(p => p.id === projectInfo.id)
      userProjects[index] = {
        ...projectInfo
      }
      return {...state, userProjects}
    }
    case SET_SKILL: {
      const userHardSkills = [
        ...state.userHardSkills,
        skill
      ]
      console.log("SET_SKILL" , userHardSkills)
      return {...state, userHardSkills} 
    }
    case DELETE_SKILL: {
      const userHardSkills = [
        ...state.userHardSkills
      ]
      const removeIndex = userHardSkills.findIndex(s => s.id === skill.id)
      userHardSkills.splice(removeIndex, 1)
      console.log("DELETE_SKILL" , userHardSkills)
      return {...state, userHardSkills}
    }
    default: throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }

}