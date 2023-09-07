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
  mainDisplayContentPara.innerHTML = `Delivers the best culinary <br> experience you'll ever have!!`; // the catchy line, in the flesh
  mainDisplayContentText.appendChild(mainDisplayContentPara); // append para to the sub div

  mainDisplayContentText.classList.add("mainDisplayContentText");
  mainDisplayContent.appendChild(mainDisplayContentText);

  /*-------------------------------------------middle-social-------------------------------------------*/

  // const mainDisplayContentSocial = document.createElement("div"); // content that will be displayed on the right, for social handle buttons.
  // mainDisplayContentSocial.classList.add("mainDisplayContentSocial");
  // middleContent.appendChild(mainDisplayContentSocial); // append social handles to the middle container

  // const fbButton = document.createElement("button"); // create social handle button
  // fbButton.textContent = `FB`; // add text content to it
  // mainDisplayContentSocial.appendChild(fbButton); // append it to the left pane div container, mainDisplayContentSocial

  // const xButton = document.createElement("button"); // create social handle button
  // xButton.textContent = `X`; // add text content to it
  // mainDisplayContentSocial.appendChild(xButton); // append it to the left pane div container, mainDisplayContentSocial

  // const igButton = document.createElement("button"); // create social handle button
  // igButton.textContent = `IG`; // add text content to it
  // mainDisplayContentSocial.appendChild(igButton); // append it to the left pane div container, mainDisplayContentSocial

  /* ------------------------------------------------ */
  const social = document.createElement("div");
  middleContent.appendChild(social);

  const list = document.createElement("ul");
  social.classList.add("mainDisplayContentSocial");
  social.appendChild(list);

  const listItemFB = document.createElement("li");
  list.appendChild(listItemFB);
  const anchorFB = document.createElement("a");
  anchorFB.href = "#";
  anchorFB.classList.add("facebook");
  listItemFB.appendChild(anchorFB);
  const iconFB = document.createElement("i");
  iconFB.innerHTML = `<i class="fa fa-facebook" aria-hidden="true"></i>`;
  anchorFB.appendChild(iconFB);

  const listItemTW = document.createElement("li");
  list.appendChild(listItemTW);
  const anchorTW = document.createElement("a");
  anchorTW.href = "#";
  anchorTW.classList.add("twitter");
  listItemTW.appendChild(anchorTW);
  const iconTW = document.createElement("i");
  iconTW.innerHTML = `<i class="fa fa-twitter" aria-hidden="true"></i>`;
  anchorTW.appendChild(iconTW);

  const listItemIG = document.createElement("li");
  list.appendChild(listItemIG);
  const anchorIG = document.createElement("a");
  anchorIG.href = "#";
  anchorIG.classList.add("instagram");
  listItemIG.appendChild(anchorIG);
  const iconIG = document.createElement("i");
  iconIG.innerHTML = `<i class="fa fa-instagram" aria-hidden="true"></i>`;
  anchorIG.appendChild(iconIG);

  const listItemG = document.createElement("li");
  list.appendChild(listItemG);
  const anchorG = document.createElement("a");
  anchorG.href = "#";
  anchorG.classList.add("google");
  listItemG.appendChild(anchorG);
  const iconG = document.createElement("i");
  iconG.innerHTML = `<i class="fa fa-google-plus" aria-hidden="true"></i>`;
  anchorG.appendChild(iconG);
}