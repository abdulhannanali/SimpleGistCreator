# SimpleGistCreator

DEMO: https://abdulhannanali.github.io/SimpleGistCreator/

SimpleGistCreator is an HTML5 Based Web Application which uses store.js to store data on the client's computer which is one of it's most important functionality. 

SimpleGistCreator uses Github's gist api in order to create the gists. Meanwhile, it can only create anonymous gists with a single file but I might extend it in the future. This application uses browserify for the code managment.

### Libraries
Following are the libraries I used for this application

- store (best localStorage wrapper)
- jQuery (for basic DOM manipulation and AJAX requests)
- jsRender (for templating)

### Running on your computer

Building the javascript requires [node.js](https://nodejs.org) and npm installed.
After cloning this repo run `npm install` in order to install all the dependencies
and you can run simple browserify commands to rebuild all the javascript in `build.js`

One such command in the root directory of the repo can be
```
browserify js/app.js -d -o build.js
```

This command will build all the reuqired code  in build.js
You can modify it according to your own needs.

## LICENSE
MIT LICENSE. SEE [LICENSE] for more details