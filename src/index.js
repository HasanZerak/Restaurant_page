import "./css/main.css";
import { initialPageLoad } from "./initial-pageload";
import { about } from "./about";
import { menu } from "./menu";
import { contact } from "./contact";

initialPageLoad();

const erase = document.querySelector("#content");

const tabSwitch = (() => {
  function colorChange(){
    headerVar.style.backgroundColor = "#eae9ec";
    headerVar.style.color = "#385257";

    headerLastBtnVar.style.backgroundColor = "#385257";
    headerLastBtnVar.style.color = "#eae9ec";
  }

  const headerVar = document.querySelector(".header");
  const headerLastBtnVar = document.querySelector(".headerButtons li:last-of-type");

  const initialLoadBtn = document.querySelector(".initialLoadBtn");
  initialLoadBtn.addEventListener("click", () => {
    colorChange();
    erase.innerHTML = "";
    initialPageLoad();
  });

  const menuBtn = document.querySelector(".menuBtn");
  menuBtn.addEventListener("click", () => {
    colorChange();
    erase.innerHTML = "";
    menu();
  });

  const aboutBtn = document.querySelector(".aboutBtn");
  aboutBtn.addEventListener("click", () => {
    colorChange();
    erase.innerHTML = "";
    about();
  });

  const contactBtn = document.querySelector(".contactBtn");
  contactBtn.addEventListener("click", () => {

    headerVar.style.backgroundColor = "#385257";
    headerVar.style.color = "#eae9ec";

    headerLastBtnVar.style.backgroundColor = "#eae9ec";
    headerLastBtnVar.style.color = "#385257";

    erase.innerHTML = "";
    contact();
  });
})();
