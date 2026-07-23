/* =====================================================
   HERO COUNTER
===================================================== */

const counters = document.querySelectorAll(".counter");

let started = false;

function startCounter(){

    if(started) return;

    started = true;

    counters.forEach(counter=>{

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 80;

        function update(){

            count += speed;

            if(count < target){

                counter.textContent = Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.textContent = target;

            }

        }

        update();

    });

}

const hero = document.querySelector("#home");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter();

        }

    });

});

observer.observe(hero);