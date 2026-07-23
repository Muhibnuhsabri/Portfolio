const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;

            bar.style.width = bar.dataset.width;

            skillObserver.unobserve(bar);

        }

    });

}, {
    threshold: 0.5
});


document.querySelectorAll(".progress-bar").forEach(bar => {

    skillObserver.observe(bar);

});