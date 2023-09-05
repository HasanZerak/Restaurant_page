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

9. Install CSS and Style loader, and add the following to webpack.config.js:
   ```
   module: {
      rules: [
         {
         test: /\.css$/i,
         use: ["style-loader", "css-loader"],
         },
      ],
   },
   ```
   > add a test to _main.css_
   > import _main.css_ in _index.js_
   > in _index.html_ change script source to _bundle.js_
   > `npx webpack --watch`

10. Create and seperate Javascript and CSS files:
   - _about.js_ and _about.css_. Import _about.js_ in  _index.js_ and _about.css_ in  _about.js_. 
   - _contact.js_ and _contact.css_. Import _contact.js_ in  _index.js_ and _contact.css_ in  _contact.js_.
      - embed a map using:
         ### HTML 
         ```
         <div class="google-map">
         <iframe src="[your unique google URL] " width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
         ```
         ### CSS
         ```
         .google-map {
            padding-bottom: 50%;
            position: relative;
         }

         .google-map iframe {
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            position: absolute;
         }
         ```
         **This makes the map responsive**

   - _menu.js_ and _menu.css_. Import _menu.js_ in  _index.js_ and _menu.css_ in  _menu.js_.
   - add appropriate styles and to each CSS file and create all DOM elements using JS.
   - With this all files are now connected and can be used. 

11. **Bug Fixed**: 
   - Instead of creating header elements with js, a list was added. 
   - Create a IIFE called 
      >  `const tabSwitch = (() => {})();` 
      - This functions add event listerner to each tab and loads it's correspondind tab.
      - Before loading a new tab, contents of `<div id = "content">` are removed, using: 
      ```
         const erase = document.querySelector("#content");
         erase.innerHTML = "";
      ```

12. Website is now almost ready, all that's left to do now is add styling to the website. 