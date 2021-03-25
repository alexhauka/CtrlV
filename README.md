# C(trl)V

["Logo"]()

C(trl)V is a smart resume builder that generates a resume based off the material you feed it, with pre-defined templates and multiple styling options.

## Features

* Take the hassle out of building a resume: C(trl)V helps you create a clean, professional looking c.v. in minutes
* Automatically pull in your starred repos via your github username
* Give C(trl)V an Indeed job posting and see how well your skills match
* create a live link to share each unique resume with employers that update automatically if you change any connected work experience or projects

## Stack

Front: React, MUI, JS
Back: Express, Axios, PSQL

## Screenshots

**["Home Page"]()

**["Skills"]()

**["Projects"]()

**["Work"]()

**["Template Example"]()

**["Keyword Filter"]()

**["styling 1"]()

**["styling 2"]()

**["My Resumes"]()

**["Live Link"]()


## Setup for Local Run/Test

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
