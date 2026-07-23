/* ===========================================
        SCROLL PROGRESS
=========================================== */

window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const progress = (scrollTop / height) * 100;

        document.getElementById("progress-bar").style.width = progress + "%";

});