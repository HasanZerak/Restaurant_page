import "./css/main.css";
import { initialPageLoad } from "./initial-pageload";
import { about } from "./about";
import { menu } from "./menu";
import { contact } from "./contact";

// initialPageLoad();
about();

const erase = document.querySelector("#content");

const tabSwitch = (() => {
  const initialLoadBtn = document.querySelector(".initialLoadBtn");
  initialLoadBtn.addEventListener("click", () => {
    console.log("test");
    erase.innerHTML = "";
    initialPageLoad();
  });

  const menuBtn = document.querySelector(".menuBtn");
  menuBtn.addEventListener("click", () => {
    erase.innerHTML = "";
    menu();
  });

  const aboutBtn = document.querySelector(".aboutBtn");
  aboutBtn.addEventListener("click", () => {
    erase.innerHTML = "";
    about();
  });

  const contactBtn = document.querySelector(".contactBtn");
  contactBtn.addEventListener("click", () => {
    erase.innerHTML = "";
    contact();
  });
})();
