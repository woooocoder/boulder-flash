Prototype & Analysis: https://www.figma.com/design/kFgh81W7f6Jyq8B7tjaEvu/Prototype?node-id=0-1&t=xCvQKznqJKHC9Dw3-1

# Current Task
### Set up an auth server and a controller server, scale them separately.
### Store Auth tokens in DB - kill in the time given
### Initial User Home page - user has 0 saved sessions  

## Short Term
### Set up back end functionality for login and signup forms. Make corresponding get requests in front end on submission 
## Give user feedback when interacting with components in NewSession form

### Design a front end for UserHome
### Design a front end for History

## Long Term
### Allow users to add other users as friends
### A feed that users can share a climb to (globally or to friends). Other users can like and comment
### A user friendly stats page. Better visuals. 

# How to install project 
## Clone the Repo
`git clone https://github.com/woooocoder/boulder-flash`
## Enter project directory
`cd boulder-flash`
## Create a branch named BRANCHNAME
`git checkout -b BRANCHNAME`
## Edit code ... 
## Stage your changes
`git add .`
## Commit your changes
`git commit -m "Description of changes made"`
## Push changes to git repo
`git push origin BRANCHNAME`
## Create a pull request
Go to forked repo on github
Click on notification about the branch you've created
Create a pull request, provide a title and description explaning what changes were made and why.


### Run the front end:
1. Open a shell and go to root directory
2. `npm i`
3. `npm run start`
### Run the backend:
1. Open another shell and go to ./server directory
2. `npm i`
3. `npm run start`
4. Open another shell and go to ./server directory
5. `npm run auth`



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
(https://facebook.github.io/create-react-app/docs/advanced-configuration)
