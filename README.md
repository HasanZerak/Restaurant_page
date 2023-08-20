# Restaurant_page

## We will be creating a Restaurant page using ES6 modules and webpack.

1. Create a repo, and clone it.

2. Run `npm init` to create package.json

3. Install webpack and node_modules directory using `npm install webpack webpack-cli --save-dev`

   - Also create a new file **.gitignore** and add **node_modules**, this will prevent the syncing of node_modules directory to GitHub.

4. Create **src** and **dist** in the project folder. Create,

   - an **index.js** file in _src_,
   - an **index.html** in _dist_,
     - link **main.js** in _index.html_
   - a **webpack.config.js** file and add entry and output.

5. In the _./dist/index.html_, add a skeleton and a single
   > `<div id = "content">`

6. Add a `console.log()` to _./src/index.js_ for testing. and run `npx webpack --watch`
    - `--watch`, so that we won't have to re-run `npx webpack` over and over again. 
    - since, we are using `--watch`, the browser still need to be reloaded after every save.

7. Creat a bare bones homepage for a restaurant using JavaScript.
    - create each element using: 
    > `const NameofElement = document.createElement("element");`
    - then `append` each to it's corresponding sub-div. 

8. `Export` initialPageLoad function, `import` it in _index.js_ and run the function.