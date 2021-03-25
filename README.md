# C(trl)V

![Logo](https://github.com/alexhauka/CtrlV/blob/master/docs/logo.png?raw=true)

C(trl)V is a smart resume builder that generates a resume based off the material you feed it, with pre-defined templates and multiple styling options.

## Features

* Take the hassle out of building a resume: C(trl)V helps you create a clean, professional looking c.v. in minutes
* Automatically pull in your starred repos via your github username
* Give C(trl)V an Indeed job posting and see how well your skills match
* create a live link to share each unique resume with employers that update automatically if you change any connected work experience or projects
* A pop-up tutorial available on every page for user-guidance

## Stack

Front: React, MUI, JS
Back: Express, Axios, PSQL

## Screenshots

*The Home Page auto-populated by a user's given resume material ready for review*![Home Page](https://github.com/alexhauka/CtrlV/blob/master/docs/home.png?raw=true)
\
*Check as many skills that apply to you for populating your resume*![Skills](https://github.com/alexhauka/CtrlV/blob/master/docs/skills.png?raw=true)
\
*Enter your github username and watch C(trl)V instantly pull in your starred repos*![Projects](https://github.com/alexhauka/CtrlV/blob/master/docs/github.png?raw=true)
\
![Work](https://github.com/alexhauka/CtrlV/blob/master/docs/work%20experience.png?raw=true)
\
*One of the three templates available at launch*![Template Example](https://github.com/alexhauka/CtrlV/blob/master/docs/template%201.png?raw=true)
\
![Keyword Filter](https://github.com/alexhauka/CtrlV/blob/master/docs/keywords.png?raw=true)
\
![styling 1](https://github.com/alexhauka/CtrlV/blob/master/docs/styling.png?raw=true)
\
*The 'My Resumes' tab contains all your resumes for reference*![My Resumes](https://github.com/alexhauka/CtrlV/blob/master/docs/My%20Resumes.png?raw=true)
\
*The live link with a contact button that creates an email to send you*![Live Link](https://github.com/alexhauka/CtrlV/blob/master/docs/live%20link.png?raw=true)


## Setup for Local Running & Testing

1. `npm i` in both the frontend and backend directories
2. create a .env file based off the example given in the backend directory. Hook up any database URL you wish.
3. `npm start` in the backend to run the server, then the frontend to start the react app

## Dependencies

### Backend:
* axios
* bcryptjs
* body-parser
* cheerio
* cookie-session
* dotenv
* express
* express-promise-router
* pg

### Frontend:
* react
* react-dom
* react-router-dom
* @devexpress/dx-react-chart
* @devexpress/dx-react-core
* @material-ui/core
* @material-ui/icons
* @material-ui/lab
* material-ui-color
* clsx
* styled-components
