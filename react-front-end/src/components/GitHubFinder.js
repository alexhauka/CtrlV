// const [username, setUsername] = React.useState('alexhauka');

const getProjects = async (username) => {
  const macroURL = `https://api.github.com/search/repositories?q=user:${username}`
  
  // macro being the top level info for projects
  const macroResponse = await fetch(macroURL)
  const macroResults = await macroResponse.json()

  let projectData = {};
        
  // loops through repos (ordered by star count desc.)
  for (const project in macroResults.items) {
    
    // grabs the individual repo's top level info via deconstruction
    let { name, updated_at, description, stargazers_count } = macroResults.items[project]

    // filters by stars
    if (stargazers_count > 0) {
      // console.log(macroResults.items[project])
      
      // fetch the languages for a given repo
      const languages = await fetch(`https://api.github.com/repos/${username}/${name}/languages`)

      const languageResults = await languages.json()

      let sum = 0;

      for (const language in languageResults) {
        sum += languageResults[language]
      }
      // console.log(sum)
      const firstLang = Object.keys(languageResults)[0]
      const secondLang = Object.keys(languageResults)[1]

      // to generate language percentages:
      // console.log(languageResults[firstLang], languageResults[secondLang])

      // for entry into database
      // STILL NEED TO HOOK UP USER_ID DYNAMICALLY,
      // CURRENTLY HARD SET TO '2' IN QUERY
      projectData = {
        title: name,
        url: `https://github.com/${username}/${name}`,
        primary_language: firstLang,
        primary_language_percent: Math.round((languageResults[firstLang] / sum) * 100),
        secondary_language: secondLang,
        secondary_language_percent: Math.round((languageResults[secondLang] / sum) * 100),
        description,
        last_updated: updated_at
      }
      console.log(projectData)

      // UNCOMMENT TO ALLOW DATABASE ENTRY OF PROJECTS:
      // axios.post('/api/projects', { projectData })
      
    }
    
  }
  // console.log(projectData);

  // puts each project into database (under user_id 2 for now!!)
export default function GetGithub(props){






  return (
    <Button></Button>
  )
}


    

}

