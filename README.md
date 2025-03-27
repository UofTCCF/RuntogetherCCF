# RuntogetherCCF

A website for members of UTCCF to go and vote for committee each year.

## Check if node js is downloaded
- run `npm -v` to see if npm is installed
- If not, download node.js https://nodejs.org/en

## Set up locally
- First clone the repo
- Then run `npm run setup`
- Once that has finished, you can run `npm run start-dev` if you want to run it locally

## Things to note
- DO NOT commit the .env file to github

## Folders and their purpose
- server: Holds the back-end code (The middle man between the webpage and the database).
- client: Holds the front-end code (What you see on the webpage) This, and the src folder within, is usually where you'll find what you're looking for.
- client\src\constants.js: Where information that might need to be updated is stored. (Text descriptions, numbers, etc). This is usually where you want to go if you want to update some information on the website.
- client\src\actions\theme.js: js file of settings that affect the webpage theme (fonts, sizes, colors, etc). This is usually where you want to go if you want to change the webpage's aesthetic theme.
- client\src\assets: The folder that contains things like image files and other resources that aren't code.
- client\src\componenets: Each folder in componenents is literally a component of the webpage. For example, the splashPage component is the top section of the webpage that includes the winter retreat image, and title. This is where you'll want to go if you want to make changes to existing components of the website or add new ones.
- client\src\routes: How components are structured. Notice in home.js, the way the components are ordered reflect the actual components in the website. The 3 main components contain nested smaller components. layout.js dictates the layout and theme of each page.

