console.log("Effects Loaded");

/* ===========================================
        CURSOR GLOW
=========================================== */

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

});

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

});

const hoverElements = document.querySelectorAll(
        "a, button, .project-card, .contact-card"
);

hoverElements.forEach(el => {

        el.addEventListener("mouseenter", () => {

                cursor.classList.add("hover");

        });

        el.addEventListener("mouseleave", () => {

                cursor.classList.remove("hover");

        });

});