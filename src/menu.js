import "./css/menu.css";

export function menu(){
    const containerMenu = document.createElement("div");
    containerMenu.classList.add("containerMenu");
    document.body.appendChild(containerMenu);
}