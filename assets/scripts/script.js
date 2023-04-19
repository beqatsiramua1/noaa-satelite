"use strict";

const header = document.querySelector('.header')
const mainHeader = document.querySelector('.main-header');
const logo = document.querySelector('.logo-img');
const navLinks = document.querySelectorAll('.nav-links');
const navbar = document.querySelector('.navbar');
const closeNavbar = document.querySelector('.close');
const openNavbar = document.querySelector('.open');

const headeCallBack = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        header.classList.add('sticky');
        logo.classList.add('fixed-img')
        
    } else {
        header.classList.remove('sticky');
        logo.classList.remove('fixed-img')
    }
};

const headerFixedObserver = new IntersectionObserver(headeCallBack, {
    root: null,
    threshold: 0,
    rootMargin: '-' + (header.getBoundingClientRect().height - 20) + 'px'
});

headerFixedObserver.observe(mainHeader);



// SWIPER JS
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        400: {
            slidesPerView: 1,
        },

        800: {
            slidesPerView: 2,
        },

        1000: {
            slidesPerView: 3,
        }
    }
});


// NAVBAR SCROLL
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navbar.classList.remove('show');
        closeNavbar.classList.remove('show')
        if (!e.target.classList.contains('nav-link')) return;
        e.preventDefault();
        const clickedSection = document.querySelector(e.target.getAttribute('href'));
        const clickedSectionCoords = clickedSection.getBoundingClientRect();

        window.scrollTo({
            left: clickedSectionCoords.left + window.pageXOffset,
            top: clickedSectionCoords.top + window.pageYOffset,
            behavior: 'smooth'
        })
    })
})

// TOGGLE NAVBAR
openNavbar.addEventListener('click', function() {
    navbar.classList.add('show');
    closeNavbar.classList.add('show')
})

closeNavbar.addEventListener('click', function() {
    navbar.classList.remove('show');
    closeNavbar.classList.remove('show')
})