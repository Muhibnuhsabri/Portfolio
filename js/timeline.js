/* =====================================================
   PREMIUM TIMELINE
===================================================== */

const timeline = document.querySelector(".timeline");

const progress = document.querySelector(".timeline-progress");

const items = document.querySelectorAll(".timeline-item");

if (timeline && progress) {

    function updateTimeline() {

        const rect = timeline.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.2;

        const end = windowHeight * 0.8;

        let percent = (end - rect.top) / (rect.height + (end - start));

        percent = Math.max(0, Math.min(percent, 1));

        progress.style.height = `${percent * 100}%`;

        const head = document.querySelector(".timeline-head");

        if (head) {

            if (percent <= 0) {

                head.style.opacity = "0";

            } else {

                head.style.opacity = "1";

            }

        }

        items.forEach(item => {

            const itemRect = item.getBoundingClientRect();

            const trigger = windowHeight * 0.55;

            if (itemRect.top < trigger) {

                item.classList.add("active");

            } else {

                item.classList.remove("active");

            }

        });

    }

    window.addEventListener("scroll", updateTimeline);

    window.addEventListener("resize", updateTimeline);

    window.addEventListener("load", updateTimeline);

}