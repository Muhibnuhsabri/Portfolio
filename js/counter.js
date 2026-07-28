/* =====================================================
   HERO COUNTER
===================================================== */

const counters = document.querySelectorAll(".counter");

let started = false;

function animateCounter(counter){

    const target = parseInt(counter.dataset.target);

    const duration = 1800;

    const start = performance.now();

    function update(now){

        const progress = Math.min((now-start)/duration,1);

        counter.textContent = Math.floor(progress*target);

        if(progress<1){

            requestAnimationFrame(update);

        }else{

            counter.textContent = target;

        }

    }

    requestAnimationFrame(update);

}

function startCounter(){

    if(started) return;

    started = true;

    counters.forEach(counter=>{

        animateCounter(counter);

    });

}

window.addEventListener("load",()=>{

    setTimeout(startCounter,700);

});