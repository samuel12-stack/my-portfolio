
// Welcome message
alert("Welcome to Nyaga Samuel Gitonga's Portfolio!");

// Contact button interaction
function contactMe() {
    alert("Thank you for visiting my portfolio!");
}

// Display current year in the footer
const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    `&copy; ${year} Nyaga Samuel Gitonga. All Rights Reserved.`;
