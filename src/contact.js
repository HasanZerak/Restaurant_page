import "./css/contact.css";

export function contact(){
    const containerContact = document.createElement("div");   // <div id = "content"></div>;
    containerContact.classList.add("containerContact");
    document.body.appendChild(containerContact);

    const address = document.createElement("div");
    address.classList.add("address");
    containerContact.appendChild(address);

    const contactNumber = document.createElement("p");
    contactNumber.textContent = `123-456-78-89`;
    address.appendChild(contactNumber);

    const contactAddress = document.createElement("div");
    contactAddress.textContent = `221B, Baker Street, Scotland Yard`;
    address.appendChild(contactAddress);

    const timing = document.createElement("div");
    containerContact.appendChild(timing);

    const timing1 = document.createElement("p");
    timing1.textContent = `Tuesday - Friday: 9AM - 7PM`;
    timing.appendChild(timing1);

    const timing2 = document.createElement("p");
    timing2.textContent = `Saturday - Sunday: 9AM - 11PM`;
    timing.appendChild(timing2);

    const timing3 = document.createElement("p");
    timing3.textContent = `Closed Monday`;
    timing.appendChild(timing3);

    const social = document.createElement("div");
    containerContact.appendChild(social);

    const list = document.createElement("ul");
    social.classList.add("social");
    social.appendChild(list);

    const listItemFB = document.createElement("li");
    list.appendChild(listItemFB);
    const anchorFB = document.createElement("a");
    anchorFB.href = "#";
    anchorFB.classList.add("facebook");
    listItemFB.appendChild(anchorFB);
    anchorFB.appendChild(document.createElement("span"));
    anchorFB.appendChild(document.createElement("span"));
    anchorFB.appendChild(document.createElement("span"));
    anchorFB.appendChild(document.createElement("span"));
    const iconFB = document.createElement("i");
    iconFB.innerHTML = `<i class="fa fa-facebook" aria-hidden="true"></i>`;
    anchorFB.appendChild(iconFB);

    const listItemTW = document.createElement("li");
    list.appendChild(listItemTW);
    const anchorTW = document.createElement("a");
    anchorTW.href = "#";
    anchorTW.classList.add("twitter");
    listItemTW.appendChild(anchorTW);
    anchorTW.appendChild(document.createElement("span"));
    anchorTW.appendChild(document.createElement("span"));
    anchorTW.appendChild(document.createElement("span"));
    anchorTW.appendChild(document.createElement("span"));
    const iconTW = document.createElement("i");
    iconTW.innerHTML = `<i class="fa fa-twitter" aria-hidden="true"></i>`;
    anchorTW.appendChild(iconTW);

    const listItemIG = document.createElement("li");
    list.appendChild(listItemIG);
    const anchorIG = document.createElement("a");
    anchorIG.href = "#";
    anchorIG.classList.add("instagram");
    listItemIG.appendChild(anchorIG);
    anchorIG.appendChild(document.createElement("span"));
    anchorIG.appendChild(document.createElement("span"));
    anchorIG.appendChild(document.createElement("span"));
    anchorIG.appendChild(document.createElement("span"));
    const iconIG = document.createElement("i");
    iconIG.innerHTML = `<i class="fa fa-instagram" aria-hidden="true"></i>`;
    anchorIG.appendChild(iconIG);
    
    const listItemG = document.createElement("li");
    list.appendChild(listItemG);
    const anchorG = document.createElement("a");
    anchorG.href = "#";
    anchorG.classList.add("google");
    listItemG.appendChild(anchorG);
    anchorG.appendChild(document.createElement("span"));
    anchorG.appendChild(document.createElement("span"));
    anchorG.appendChild(document.createElement("span"));
    anchorG.appendChild(document.createElement("span"));
    const iconG = document.createElement("i");
    iconG.innerHTML = `<i class="fa fa-google-plus" aria-hidden="true"></i>`;
    anchorG.appendChild(iconG);

    const footer = document.createElement("div");
    footer.classList.add("footer");
    containerContact.appendChild(footer);

    const footerText = document.createElement("p");
    footerText.textContent = `Probably the best restaurant you will ever visit`;
    footerText.classList.add("footer");
    footer.appendChild(footerText);
} 