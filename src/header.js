import "./css/header.css";

export function header() {
    /*-------------------------------------------header-------------------------------------------*/
    const content = document.querySelector("#content"); // <div id = "content"></div>;
    
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("contentDiv");
    content.appendChild(contentDiv);
  
    const header = document.createElement("div"); // creating header div.
    header.classList.add("header");
    contentDiv.appendChild(header); // append header to #content.
  
    const headerHeading = document.createElement("p"); // "" logo to be displayed in the top-left corner
    headerHeading.textContent = `Cool Logo`; // add text content to headerHeading
    header.appendChild(headerHeading);
  
    const headerButtons = document.createElement("div");
    headerButtons.classList.add("headerButtons");
    header.appendChild(headerButtons);
  
    const menu = document.createElement("button"); // nav bar button
    menu.textContent = `menu`; // add text content menu
    headerButtons.appendChild(menu); // append menu header
  
    const about = document.createElement("button"); // nav bar button
    about.textContent = `about test`; // add text content to about
    headerButtons.appendChild(about); // append about to header
  
    const contactUs = document.createElement("button"); // nav bar button
    contactUs.textContent = `contact us`; // add text content to contact button
    headerButtons.appendChild(contactUs); // append contact us to header
  }

//   const container = document.createElement("div");
//   document.body.appendChild(container);
//   container.classList.add("container");