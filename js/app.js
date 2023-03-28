// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const navLink = document.querySelectorAll(".nav-link");

// hamburger.addEventListener("click", mobileMenu);
// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }


// taggle icon navbar

let menu = document.querySelector('#menu');
let navBar = document.querySelector('.navbar');
let flag =false;
 menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navBar.classList.toggle('active');
      flag = !flag; 
      if (flag){
        navBar.style.display='block';

      }
      else{
        navBar.style.display='none';
      }
   };


// // scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };

    });

// // sticky navbar

      let header = document.querySelector('header');

      header.classList.toggle('sticky', window.scrollY > -100);

// remove toggle icon and navbar when click navbar link (scroll)

 //menu.classList.remove('bx-x');
 //navBar.classList.remove('active');

};

// scroll reveal

    ScrollReveal({ 
        // reset: true,
        distance: '80px',
        duration: 2000,
        dealy: 200 
    
    });

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });



// typed js

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Freelancer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});
