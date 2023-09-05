import "./css/menu.css";

export function menu() {
  const contentMenu = document.querySelector("#content"); // <div id = "content"></div>;

  const containerMenu = document.createElement("div");
  containerMenu.classList.add("containerMenu");
  contentMenu.appendChild(containerMenu);

  const menuTitle = document.createElement("p");
  menuTitle.textContent = `MENU`;
  containerMenu.appendChild(menuTitle);

  let menuItem = [
    //an array to store food items, no need to set variables for each item and makes it easier to add more items later on.
    {
      name: `borgir | 50`,
      des: `tastes good`,
    },
    {
      name: `pixxa | 60`,
      des: `better than domino's`,
    },
    {
      name: `Lasagna | 120`,
      des: `try it out at least`,
    },
    {
      name: `mac n cheese | 60`,
      des: `idk abnout this one`,
    },
    {
      name: `shawarma | 60`,
      des: `best in the west `,
    },
    {
      name: `Lorem | 60`,
      des: `should have used lorem ipsum `,
    },
    {
      name: `ipsum | 60`,
      des: `coming up with fake stuff is hard`,
    },
  ];

  menuItem.forEach((element) => {
    //loop over each object in the menuItem array.
    const menuList = document.createElement("ul");
    Object.values(element).forEach((saidItem) => {
      //loop over the elements of each object and append them corr.
      const listItem = document.createElement("li");
      listItem.append(saidItem);
      menuList.appendChild(listItem);
    });
    containerMenu.appendChild(menuList);
  });
}
