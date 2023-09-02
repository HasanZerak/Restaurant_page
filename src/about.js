import './css/about.css';
export function about(){
    
    // const content = document.querySelector("#content");   // <div id = "content"></div>;

    const container = document.createElement("div");
    document.body.appendChild(container);
    container.classList.add("container");
    
    const blob = document.createElement("div");
    blob.classList.add("blob");
    container.appendChild(blob);
    
    const text = document.createElement("div");
    text.classList.add("text");
    container.appendChild(text);

    const aboutTitle = document.createElement("p");
    aboutTitle.textContent = `About us`;
    text.appendChild(aboutTitle);

    const aboutContentPara1 = document.createElement("p");
    aboutContentPara1.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus sit amet. Dignissim suspendisse in est ante in nibh. Mauris a diam maecenas sed enim ut sem. Congue eu consequat ac felis donec. Elit eget gravida cum sociis natoque penatibus et magnis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Integer malesuada nunc vel risus commodo viverra. Sodales ut eu sem integer vitae justo eget magna. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.` ;
    text.appendChild(aboutContentPara1);

    const aboutContentPara2 = document.createElement("p");
    aboutContentPara2.textContent = `Pulvinar sapien et ligula ullamcorper malesuada proin. Libero justo laoreet sit amet. Lacinia quis vel eros donec ac odio tempor orci. At elementum eu facilisis sed. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet consectetur adipiscing elit ut.`;
    text.appendChild(aboutContentPara2);

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../src/assets/restro.jpg";
    image.alt = "image";
    container.appendChild(image);
}