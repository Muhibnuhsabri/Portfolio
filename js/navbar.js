/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.9)";
        navbar.style.padding = "18px 40px";
        navbar.style.borderBottom = "1px solid #333";

    } else {

        navbar.style.background = "rgba(0,0,0,.65)";
        navbar.style.padding = "22px 40px";
        navbar.style.borderBottom = "1px solid #151515";

    }

});


/* =====================================================
   SMOOTH MENU
===================================================== */

document.querySelectorAll(".nav-links a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        const navbar = document.querySelector(".navbar");

        const navbarHeight = navbar.offsetHeight;

        const targetPosition = target.offsetTop - navbarHeight - 20;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});
/* =====================================================
   ACTIVE NAVBAR
===================================================== */

const navItems = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});