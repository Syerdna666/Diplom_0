// Header Sticky on scroll

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Hamburger

const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (header.classList.contains("open")) {
    //Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// Svg To Svg
document.querySelectorAll("img.svg").forEach((img) => {
  var imgId = img.id;
  var imgClass = img.className;
  var imgURL = img.src;
  var imgFill = img.getAttribute("data-fill");

  fetch(imgURL)
    .then((r) => r.text())
    .then((text) => {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(text, "text/xml");
      var svg = xmlDoc.getElementsByTagName("svg")[0];

      if (typeof imgId !== "undefined") {
        svg.setAttribute("id", imgId);
      }

      if (typeof imgClass !== "undefined") {
        svg.setAttribute("class", imgClass);
      }

      if (typeof imgFill !== "undefined") {
        svg.setAttribute("fill", "white");
      }

      img.parentNode.replaceChild(svg, img);
    })
    .catch(console.error);
});

// Logo Colors

document.onscroll = function () {
  if (window.pageYOffset > 10) myLogo.setAttribute("fill", "black");
  else myLogo.setAttribute("fill", "white");
};

// Hide Modal on click outside

const toggleMenu = function () {
  menu.classList.toggle('fade-in');
  overlay.classList.toggle('fade-out');
  body.classList.toggle('noscroll');
  header.classList.toggle('open');
};

//  btnHamburger.addEventListener('click', function(e) {
//   e.stopPropagation();
//   toggleMenu();
// });

const menu = document.querySelector(".header__menu");

document.addEventListener('click', function (e) {
  const target = e.target;
  const menu = document.querySelector(".header__menu");
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btnHamburger;
  const menu_is_activ = menu.classList.contains('fade-in');

  if (!its_menu && !its_btnMenu && menu_is_activ) {
    toggleMenu();
  }
});


// Close hover menu on click

let menulink = document.querySelector("#dropdownlink");
let menu_drop = document.querySelector(".dropdown-menu")

menulink.addEventListener('mouseover', () => {
  menu_drop.classList.add('.active_dropdown');
});

menu_drop.addEventListener('click', () => {
  menu.classList.remove('.active_dropdown');
});

// Portfolio toggle menu 

let n = document.querySelectorAll(".portfolio-menu__item"),
  e = document.querySelector(".portfolio-menu"),
  t = document.querySelector(".menu-toggle"),
  r = document.querySelector(".container");
n.forEach(function (t) {
  t.addEventListener("click", function (e) {
    n.forEach(function (e) {
      e.className !== t.className && e.classList.remove("active-item")
    }), "main" === e.target.className ? t.classList.toggle("active-item") : e.target.parentNode.classList.toggle("active-item")
  })
})