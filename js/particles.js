console.log("Particles Loaded");

const canvas = document.getElementById("particles");

if (!canvas) {
    console.warn("Canvas #particles tidak ditemukan.");
} else {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const total = 100;

    /* ==========================================
       STARS
    ========================================== */

    class Particle {

        constructor() {

            this.reset();

        }

        reset() {

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.size = Math.random() * 2 + 0.5;

            this.speedX = (Math.random() - 0.5) * 0.15;
            this.speedY = (Math.random() - 0.5) * 0.15;

            this.alpha = Math.random();
            this.alphaSpeed = Math.random() * 0.02 + 0.005;

        }

        update() {

            this.x += this.speedX;
            this.y += this.speedY;

            this.alpha += this.alphaSpeed;

            if (this.alpha >= 1 || this.alpha <= 0.2) {

                this.alphaSpeed *= -1;

            }

            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;

            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;

        }

        draw() {

            ctx.beginPath();

            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

            ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;

            ctx.fill();

        }

    }

    /* ==========================================
       SHOOTING STAR
    ========================================== */

    class ShootingStar {

        constructor() {

            this.reset();

        }

        reset() {

            this.x = Math.random() * canvas.width * 0.3;
            this.y = Math.random() * canvas.height * 0.4;

            this.length = Math.random() * 120 + 100;

            this.speed = Math.random() * 10 + 12;

            this.opacity = 1;

            this.active = false;

        }

        start() {

            this.active = true;
            this.opacity = 1;

        }

        update() {

            if (!this.active) return;

            this.x += this.speed;
            this.y += this.speed * 0.45;

            this.opacity -= 0.012;

            if (this.opacity <= 0) {

                this.active = false;
                this.reset();

            }

        }

        draw() {

            if (!this.active) return;

            const gradient = ctx.createLinearGradient(

                this.x,
                this.y,

                this.x - this.length,
                this.y - this.length * 0.45

            );

            gradient.addColorStop(0, `rgba(255,255,255,${this.opacity})`);
            gradient.addColorStop(1, "rgba(255,255,255,0)");

            ctx.beginPath();

            ctx.strokeStyle = gradient;

            ctx.lineWidth = 2;

            ctx.moveTo(this.x, this.y);

            ctx.lineTo(

                this.x - this.length,
                this.y - this.length * 0.45

            );

            ctx.stroke();

        }

    }

    /* ==========================================
       CREATE STARS
    ========================================== */

    for (let i = 0; i < total; i++) {

        particles.push(new Particle());

    }

    const shootingStar = new ShootingStar();

    /* ==========================================
       ANIMATION
    ========================================== */

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            p.update();
            p.draw();

        });

        shootingStar.update();
        shootingStar.draw();

        requestAnimationFrame(animate);

    }

    animate();

    /* ==========================================
       RANDOM SHOOTING STAR
    ========================================== */

    function launchStar() {

        if (!shootingStar.active) {

            shootingStar.start();

        }

        const next = Math.random() * 4000 + 3000;

        setTimeout(launchStar, next);

    }

    launchStar();

    /* ==========================================
       RESIZE
    ========================================== */

    window.addEventListener("resize", () => {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    });

}