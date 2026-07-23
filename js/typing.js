/* =====================================================
   TYPING EFFECT
===================================================== */

const typing = document.getElementById("typing");

const texts = [

    "Informatics Student",

    "Web Developer",

    "Game Developer",

    "UI/UX Design"

];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let current = texts[textIndex];

    if (!deleting) {

        typing.innerHTML =
            current.substring(0, charIndex++) +
            '<span class="typing-cursor">|</span>';

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.innerHTML =
            current.substring(0, charIndex--) +
            '<span class="typing-cursor">|</span>';

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();