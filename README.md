# livereload-webapp-base
Seed project for my web apps. Gulp + BrowserSync + Sass + HTML5

## Use
- download/clone/fork this repo
- npm install
- gulp serv-start

##Gulp Commands

- gulp: List existing gulp tasks
- gulp serv-start: Start BrowserSync server on port 3000
- gulp compile-sass: Compile styles in styles.css file
- gulp compile-js: Compile and minify js in site.min.js file

##Server config
- port: 3000
- server admin: port 3001
- main file: site/index.html
- listening for changes in: 
  - site/*.html (al html files in site folder)
  - site/css/*.css (all css files in css folder)
  - src/app/**/*.js (all js files in app folder and subfolders)

##ToDo
- Restart server on compilation fail.
- Add a "What's inside" section to the readme
