//Global Variables
var sectionCount = 0;
const pageHeader = document.querySelector(".page__header");
const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");
const sectionList = document.getElementsByTagName("section");

//Return True if top of section is in top of viewport
var isInViewport = function (elem) {
  return (
    elem.offsetTop <= window.pageYOffset &&
    elem.offsetTop + elem.offsetHeight > window.pageYOffset
  );
};

//Scroll to section based on top coordinate
function scrollToID(navItem, sectionId) {
  const section = document.getElementById(sectionId);
  navItem.addEventListener(
    "click",
    function () {
      window.scrollTo({ top: section.offsetTop, left: 0, behavior: "smooth" });
    },
    true
  );
}

//dynamically build navigation based on number of sections
function buildNav() {
  for (var i = 0; i < sectionList.length; i++) {
    const sectionId = "section" + (i + 1);
    sectionCount += 1;
    const navItem = document.createElement("li");
    navItem.textContent = "| Section " + sectionCount + "\u00A0";
    navItem.classList.add("menu__link");
    navList.appendChild(navItem);

    //link navItem with appropriate section
    scrollToID(navItem, sectionId);
  }
}

//When section is in top of viewport, add active class
function addActiveClass() {
  document.addEventListener("scroll", function () {
    for (var a = 0; a < sectionList.length; a++) {
      section = sectionList[a];
      if (isInViewport(section)) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    }
  });
}

buildNav();

addActiveClass();
