DROP TABLE IF EXISTS languages CASCADE;
DROP TABLE IF EXISTS frameworks CASCADE;
DROP TABLE IF EXISTS databases CASCADE;
DROP TABLE IF EXISTS testing CASCADE;
DROP TABLE IF EXISTS user_hard_skills CASCADE;
DROP TABLE IF EXISTS soft_skills CASCADE;
DROP TABLE IF EXISTS user_soft_skills CASCADE;
DROP TABLE IF EXISTS resumes CASCADE;
DROP TABLE IF EXISTS work_experiences CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS job_postings CASCADE;
DROP TABLE IF EXISTS keywords CASCADE;
DROP TABLE IF EXISTS jobs_keywords CASCADE;
DROP TABLE IF EXISTS templates CASCADE;

CREATE TABLE languages (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE frameworks (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE databases (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE testing (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE user_hard_skills (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  javascript  BOOLEAN  DEFAULT 'f',
  ruby BOOLEAN DEFAULT 'f',
  c++ BOOLEAN DEFAULT 'f',
  c# BOOLEAN DEFAULT 'f',
  html BOOLEAN DEFAULT 'f',
  css BOOLEAN DEFAULT 'f',
  java BOOLEAN DEFAULT 'f',
  python BOOLEAN DEFAULT 'f',
  typescript BOOLEAN DEFAULT 'f',
  express BOOLEAN DEFAULT 'f',
  node.js BOOLEAN DEFAULT 'f',
  django BOOLEAN DEFAULT 'f',
  rails BOOLEAN DEFAULT 'f',
  axios BOOLEAN DEFAULT 'f',
  react BOOLEAN DEFAULT 'f',
  angular BOOLEAN DEFAULT 'f',
  vue BOOLEAN DEFAULT 'f',
  jquery BOOLEAN DEFAULT 'f',
  wordpress BOOLEAN DEFAULT 'f',
  jest BOOLEAN DEFAULT 'f',
  cypress BOOLEAN DEFAULT 'f',
  storybook BOOLEAN DEFAULT 'f',
  rspec BOOLEAN DEFAULT 'f',
  mocha BOOLEAN DEFAULT 'f',
  capbara BOOLEAN DEFAULT 'f',
  poltergeist BOOLEAN DEFAULT 'f',
  mysql BOOLEAN DEFAULT 'f',
  postgressql BOOLEAN DEFAULT 'f',
  microsql BOOLEAN DEFAULT 'f',
  sqlite BOOLEAN DEFAULT 'f',
  mongodb BOOLEAN DEFAULT 'f'
);

CREATE TABLE soft_skills (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE  user_soft_skills (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  communication BOOLEAN DEFAULT 'f',
  teamwork BOOLEAN DEFAULT 'f',
  adaptability BOOLEAN DEFAULT 'f',
  problemSolving BOOLEAN DEFAULT 'f',
  creativity BOOLEAN DEFAULT 'f',
  workEthic BOOLEAN DEFAULT 'f',
  interpersonalSkills BOOLEAN DEFAULT 'f',
  timeManagement BOOLEAN DEFAULT 'f',
  leadership BOOLEAN DEFAULT 'f',
  attentionToDetail BOOLEAN DEFAULT 'f',
  scum BOOLEAN DEFAULT 'f',
  agile BOOLEAN DEFAULT 'f'
)

CREATE TABLE  resumes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  job_posting_id INTEGER REFERENCES job_postings(id) ON DELETE CASCADE,
  template_id INTEGER REFERENCES  templates(id) ON DELETE CASCADE,
  body_color VARCHAR(255) NOT NULL DEFAULT "White",
  font_1 VARCHAR(255) NOT NULL DEFAULT "time new roman",
  font_2 VARCHAR(255) NOT NULL DEFAULT "comic sans",
  date_created TIMESTAMP NOT NULL,
  date_updated TIMESTAMP NOT NULL
)

CREATE TABLE  work_experiences (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  job_title VARCHAR(max) NOT NULL,
  job_description VARCHAR(max) NOT NULL, 
  job_start_date DATE NOT NULL, --DATE - format YYYY-MM-DD
  job_end_date DATE NOT NULL
)

CREATE TABLE  users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  github VARCHAR(50) NOT NULL,
  linkedin VARCHAR(50) NOT NULL,
  address VARCHAR(50) NOT NULL,
  phone_number VARCHAR(50) NOT NULL,
)

CREATE TABLE  projects (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
  title VARCHAR(50) NOT NULL,
  url VARCHAR(50) NOT NULL,
  language VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  last_updated DATE NOT NULL
)

CREATE TABLE  job_postings (
  id SERIAL PRIMARY KEY NOT NULL,
  url VARCHAR(50) NOT NULL,
  title VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
)

CREATE TABLE  keywords (
  id SERIAL PRIMARY KEY NOT NULL,
)

CREATE TABLE  job_keywords (
  id SERIAL PRIMARY KEY NOT NULL,
  job_posting_id INTEGER REFERENCES  job_postings(id) ON DELETE CASCADE, 
  keyword_1 VARCHAR(50) NOT NULL,
  keyword_2 VARCHAR(50) NOT NULL,
  keyword_3 VARCHAR(50) NOT NULL,
  keyword_4 VARCHAR(50) NOT NULL,
  keyword_5 VARCHAR(50) NOT NULL,
  keyword_6 VARCHAR(50),
  keyword_7 VARCHAR(50),
  keyword_8 VARCHAR(50),
  keyword_9 VARCHAR(50),
  keyword_10 VARCHAR(50)
)

CREATE TABLE  templates (
  id SERIAL PRIMARY KEY NOT NULL,
)








-- there we go now we cookin with gas and bitches11!!!!1!1