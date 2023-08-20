export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");  // <div id = "content"></div>;
    
    const header = document.createElement("div");   // creating header div.
    contentDiv.appendChild(header); // append header to #content.

    const headerHeading = document.createElement("h3"); // "" logo to be displayed in the top-left corner
    headerHeading.textContent = `Cool Logo`; // add text content to headerHeading 

    const menu = document.createElement("button");  // nav bar button 
    menu.textContent = `menu`;  // add text content menu 
    header.appendChild(menu); // append menu header
    
    const about = document.createElement("button"); // nav bar button
    about.textContent = `about`;    // add text content to about
    header.appendChild(about);  // append about to header
    
    const contactUs = document.createElement("button"); // nav bar button
    contactUs.textContent = `contact us`;   // add text content to contact button
    header.appendChild(contactUs);  // append contact us to header

    const middleContent = document.createElement("div");    // div for middle content, i.e. the content that is visible to the user.
    contentDiv.appendChild(middleContent);  // append middleContent div to header

    const mainDisplayContent = document.createElement("div");   // content that will be displayed on the left. 
    middleContent.appendChild(mainDisplayContent); // append the div to middle container

    const foodImage = document.createElement("img");    // create an image.
    foodImage.src = "../src/assets/food_bowl.jpg";  // fetch the image
    foodImage.alt = `food image`;   // 
    mainDisplayContent.appendChild(foodImage);  // append image to the sub div

    const mainDisplayContentHeading = document.createElement("h1"); // logo name for the main content 
    mainDisplayContentHeading.textContent = `Cool Logo`;    // add text content
    mainDisplayContent.appendChild(mainDisplayContentHeading);  // append logo to the sub div

    const mainDisplayContentPara = document.createElement("p"); // create a 'p' element for a catchy tagline 
    mainDisplayContentPara.textContent = `Offers the tastiest food you've ever had!!`;  // the catchy line, in the flesh
    mainDisplayContent.appendChild(mainDisplayContentPara); // append para to the sub div

    const mainDisplayContentSocial = document.createElement("div");   // content that will be displayed on the right, for social handle buttons.
    middleContent.appendChild(mainDisplayContentSocial); // append social handles to the middle container

    const fbButton = document.createElement("button"); // create social handle button
    fbButton.textContent = `FB`;    // add text content to it
    mainDisplayContentSocial.appendChild(fbButton); // append it to the left pane div container, mainDisplayContentSocial

    const xButton = document.createElement("button"); // create social handle button
    xButton.textContent = `X`;    // add text content to it
    mainDisplayContentSocial.appendChild(xButton); // append it to the left pane div container, mainDisplayContentSocial
 
    const igButton = document.createElement("button"); // create social handle button
    igButton.textContent = `IG`;    // add text content to it
    mainDisplayContentSocial.appendChild(igButton); // append it to the left pane div container, mainDisplayContentSocial
}