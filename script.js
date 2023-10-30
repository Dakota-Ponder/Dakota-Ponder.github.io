// select body element from the DOM
const body = document.body;

// select theme and hamburger button from the DOM
const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

// function to add theme class to body and button
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

// get theme from local storage
const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

// add theme class to body and button
addThemeClass(getBodyTheme, getBtnTheme);

// check if body has dark class
const isDark = () => body.classList.contains("dark");

// function to set theme
const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  // add theme class to body and button
  addThemeClass(bodyClass, btnClass);

  // set theme to local storage
  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

// function to toggle theme
const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

// add event listener to theme button
btnTheme.addEventListener("click", toggleTheme);

// function to display nav list
const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  // if hamburger button has is shown
  // then switch to close icon and display nav list
  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

// event listener to hamburger button
btnHamburger.addEventListener("click", displayList);

// function to scroll to top of the page
const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  // if user scrolls down 500px from the top of the document
  // then display scroll to top button
  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

// event listener to scroll event on the document
document.addEventListener("scroll", scrollUp);
