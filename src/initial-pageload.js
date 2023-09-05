import "./css/initial-pageLoad.css";

export function initialPageLoad() {
  const contentInitialPageLoad = document.querySelector("#content"); // <div id = "content"></div>;

  /*-------------------------------------------middle-------------------------------------------*/

  const middleContent = document.createElement("div"); // div for middle content, i.e. the content that is visible to the user.
  middleContent.classList.add("middleContent");
  contentInitialPageLoad.appendChild(middleContent); // append middleContent div to header

  const mainDisplayContent = document.createElement("div"); // content that will be displayed on the left.
  mainDisplayContent.classList.add("mainDisplayContent");
  middleContent.appendChild(mainDisplayContent); // append the div to middle container

  const mainDisplayContentText = document.createElement("div");

  // const backImage = document.createElement("img");    // create an image.
  // backImage.src = "../src/assets/splash.png";  // fetch the image
  // backImage.alt = `food image`;   //
  // backImage.classList.add("backImage");
  // mainDisplayContentText.appendChild(backImage);  // append image to the sub div

  const mainDisplayContentHeading = document.createElement("h1"); // logo name for the main content
  mainDisplayContentHeading.textContent = `Cool Logo`; // add text content
  mainDisplayContentText.appendChild(mainDisplayContentHeading); // append logo to the sub div

  const mainDisplayContentPara = document.createElement("p"); // create a 'p' element for a catchy tagline
  mainDisplayContentPara.textContent = `Offers the tastiest food you've ever had!!`; // the catchy line, in the flesh
  mainDisplayContentText.appendChild(mainDisplayContentPara); // append para to the sub div

  mainDisplayContentText.classList.add("mainDisplayContentText");
  mainDisplayContent.appendChild(mainDisplayContentText);

  /*-------------------------------------------middle-image-------------------------------------------*/

  const foodImage = document.createElement("img"); // create an image.
  foodImage.src = "../src/assets/food_bowl.png"; // fetch the image
  foodImage.alt = `food image`; //
  foodImage.classList.add("foodImages");
  mainDisplayContent.appendChild(foodImage); // append image to the sub div

  /*-------------------------------------------middle-social-------------------------------------------*/

  const mainDisplayContentSocial = document.createElement("div"); // content that will be displayed on the right, for social handle buttons.
  mainDisplayContentSocial.classList.add("mainDisplayContentSocial");
  middleContent.appendChild(mainDisplayContentSocial); // append social handles to the middle container

  const fbButton = document.createElement("button"); // create social handle button
  fbButton.textContent = `FB`; // add text content to it
  mainDisplayContentSocial.appendChild(fbButton); // append it to the left pane div container, mainDisplayContentSocial

  const xButton = document.createElement("button"); // create social handle button
  xButton.textContent = `X`; // add text content to it
  mainDisplayContentSocial.appendChild(xButton); // append it to the left pane div container, mainDisplayContentSocial

  const igButton = document.createElement("button"); // create social handle button
  igButton.textContent = `IG`; // add text content to it
  mainDisplayContentSocial.appendChild(igButton); // append it to the left pane div container, mainDisplayContentSocial
}
