console.log("Portfolio Loaded");

/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});