import "./css/menu.css";

export function menu() {
  const contentMenu = document.querySelector("#content"); // <div id = "content"></div>;

  const containerMenu = document.createElement("div");
  containerMenu.classList.add("containerMenu");
  contentMenu.appendChild(containerMenu);

  // const menuTitle = document.createElement("p");
  // menuTitle.textContent = `MENU`;
  // containerMenu.appendChild(menuTitle);

  let menuItem = [
    //an array to store food items, no need to set variables for each item and makes it easier to add more items later on.
    {
      name: `borgir | 50`,
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    },
    {
      name: `pixxa | 60`,
      des: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    },
    {
      name: `Lasagna | 120`,
      des: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
    },
    {
      name: `mac n cheese | 60`,
      des: `Viverra adipiscing at in tellus integer feugiat scelerisque. Eu sem integer vitae justo eget`,
    },
    {
      name: `shawarma | 60`,
      des: `Placerat in egestas erat imperdiet sed. Aliquam vestibulum morbi blandit cursus risus. At volutpat diam ut venenatis tellus`,
    },
    {
      name: `Lorem | 60`,
      des: `Tempus egestas sed sed risus pretium quam vulputate dignissim. Vitae auctor eu augue ut lectus`,
    },
    {
      name: `ipsum | 60`,
      des: `Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Tincidunt nunc pulvinar sapien et`,
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
