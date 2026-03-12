// ===== Star field =====
(function () {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const STAR_COUNT = 220;
    const stars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function seedStars() {
        stars.length = 0;
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.0 + 0.2,
                phase: Math.random() * Math.PI * 2,
                // speed in rad/ms
                speed: 0.001 + Math.random() * 0.001,
                base: 0.20 + Math.random() * 0.40,
            });
        }
    }

    function draw(ts) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const s of stars) {
            const alpha = s.base + Math.sin(ts * s.speed + s.phase) * 0.40;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220,210,185,${alpha})`;
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); seedStars(); });
    resize();
    seedStars();
    requestAnimationFrame(draw);
})();

// ===== 3-body orbital simulation =====
// Chenciner-Montgomery figure-8 initial conditions (G=1, equal masses)
// Leapfrog (velocity Verlet) integration for energy conservation
(function () {
    const orbs = [
        document.querySelector('.bg-orb-1'),
        document.querySelector('.bg-orb-2'),
        document.querySelector('.bg-orb-3'),
    ];
    if (!orbs[0] || !orbs[1] || !orbs[2]) return;

    // ── tunables ──────────────────────────────────────────────────────
    const SCALE = Math.min(window.innerWidth, window.innerHeight) * 0.5; // orbit radius in px
    const TIME_STEP = 0.003;   // simulation dt per frame (bigger = faster orbit)
    const SUBSTEPS = 5;       // integration substeps per frame (more = more stable)
    const G = 1.0;
    const MASS = 1.0;
    // ─────────────────────────────────────────────────────────────────

    // Figure-8 initial state (position in normalised units, velocity in units/time)
    const bodies = [
        { x: -0.97000436, y: 0.24308753, vx: 0.46620369, vy: 0.43236573 },
        { x: 0.97000436, y: -0.24308753, vx: 0.46620369, vy: 0.43236573 },
        { x: 0.0, y: 0.0, vx: -0.93240737, vy: -0.86473146 },
    ];

    // Pre-compute half-sizes to centre each orb on its position
    // These should match the CSS width/height divided by 2
    const HALF = [150, 150, 150];

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let scale = SCALE;

    window.addEventListener('resize', () => {
        cx = window.innerWidth / 2;
        cy = window.innerHeight / 2;
        scale = Math.min(window.innerWidth, window.innerHeight) * 0.5; // Maintain user's 0.5 scale
    });

    /* Leapfrog: acceleration at current positions */
    function accel(bs) {
        const ax = [0, 0, 0], ay = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
            for (let j = i + 1; j < 3; j++) {
                const dx = bs[j].x - bs[i].x;
                const dy = bs[j].y - bs[i].y;
                const r3 = Math.pow(dx * dx + dy * dy + 0.001, 1.5); // softened
                const f = G * MASS * MASS / r3;
                ax[i] += f * dx; ay[i] += f * dy;
                ax[j] -= f * dx; ay[j] -= f * dy;
            }
        }
        return { ax, ay };
    }

    function step(dt) {
        // Velocity Verlet (leapfrog split into two half-kicks)
        let { ax, ay } = accel(bodies);
        for (let i = 0; i < 3; i++) {
            bodies[i].vx += 0.5 * ax[i] * dt / MASS;
            bodies[i].vy += 0.5 * ay[i] * dt / MASS;
            bodies[i].x += bodies[i].vx * dt;
            bodies[i].y += bodies[i].vy * dt;
        }
        ({ ax, ay } = accel(bodies));
        for (let i = 0; i < 3; i++) {
            bodies[i].vx += 0.5 * ax[i] * dt / MASS;
            bodies[i].vy += 0.5 * ay[i] * dt / MASS;
        }
    }

    function loop() {
        const dt = TIME_STEP / SUBSTEPS;
        for (let s = 0; s < SUBSTEPS; s++) step(dt);

        for (let i = 0; i < 3; i++) {
            if (!orbs[i]) continue;
            const px = cx + bodies[i].x * scale - HALF[i];
            const py = cy + bodies[i].y * scale - HALF[i];
            orbs[i].style.transform = `translate(${px}px, ${py}px)`;
        }
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
})();
