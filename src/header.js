// import "./css/header.css";

export function header() {
  /*-------------------------------------------header-------------------------------------------*/
  const content = document.querySelector("#content"); // <div id = "content"></div>;

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("contentDiv");
  document.body.appendChild(contentDiv);

  const header = document.createElement("div"); // creating header div.
  header.classList.add("header");
  contentDiv.appendChild(header); // append header to #content.

  const headerHeading = document.createElement("p"); // "" logo to be displayed in the top-left corner
  headerHeading.textContent = `Cool Logo`; // add text content to headerHeading
  header.appendChild(headerHeading);

  const headerButtons = document.createElement("div");
  headerButtons.classList.add("headerButtons");
  header.appendChild(headerButtons);

  const menuBtn = document.createElement("button"); // nav bar button
  menuBtn.classList.add("menuBtn");
  menuBtn.textContent = `menu`; // add text content menu
  headerButtons.appendChild(menuBtn); // append menu header

  const aboutBtn = document.createElement("button"); // nav bar button
  aboutBtn.classList.add("aboutBtn");
  aboutBtn.textContent = `about test`; // add text content to about
  headerButtons.appendChild(aboutBtn); // append about to header

  const contactBtn = document.createElement("button"); // nav bar button
  contactBtn.classList.add("contactBtn");
  contactBtn.textContent = `contact us`; // add text content to contact button
  headerButtons.appendChild(contactBtn); // append contact us to header
}
