const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach((section, index) => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            setTimeout(() => {

                section.classList.add("active");

            }, index * 120);

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);