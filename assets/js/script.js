const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const links = document.querySelectorAll(".menu-link");
const menuIcon = document.getElementById("menuIcon");


let isOpen = false;


menuBtn.onclick = () => {
  if (!isOpen) {
    mobileMenu.classList.remove("-translate-y-full");
    menuIcon.classList.replace("fa-bars", "fa-xmark");
    isOpen = true;
  } else {
    mobileMenu.classList.add("-translate-y-full");
    menuIcon.classList.replace("fa-xmark", "fa-bars");
    isOpen = false;
  }
};
// Close menu when clicking link
links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-y-full");
    isOpen = false;
  });
});




const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
};

// Scroll to top when clicked
scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
