"use strict";

const header = document.querySelector("header");
const navBtn = document.querySelector(".nav-btn");
const closeIcon = document.querySelector(".close-menu-icon");
const openIcon = document.querySelector(".open-menu-icon");
const main = document.querySelector("main");

const toggleMenu = function () {
  header.classList.toggle("nav-open");
};

navBtn.addEventListener("click", toggleMenu);
