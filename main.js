// Header EventListene & Scroll
window.addEventListener("scroll", (e) => {
  console.log(e);
  let navBar = document.querySelector("header");
  let windowScroll = scrollY > 0;
  console.log(scrollY);
  navBar.classList.toggle("scrolling-nav", windowScroll);
});

let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.forEach((rem) => {
      rem.classList.remove("active");
    });
    a.classList.add("active");
  });
});

let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  navLinks.forEach((rem) => {
    rem.classList.remove("active");
  });
});

// End of header
