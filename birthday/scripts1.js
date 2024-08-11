const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

// 设置canvas的宽度和高度
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 烟花粒子类
class Particle {
    constructor(x, y, color, size, angle, speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.angle = angle;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y -= Math.sin(this.angle) * this.speed;
    }
}

function createFirework(x, y) {
    const particle = new Particle(x, y, getRandomColor(), 2, Math.random() * Math.PI * 2, 2);
    particleArray.push(particle);
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particleArray.forEach((particle, index) => {
        particle.draw();
        particle.update();

        if (particle.y < 0 || particle.y > canvas.height) {
            particleArray.splice(index, 1);
        }
    });

    if (Math.random() < 0.05) {
        const x = Math.random() * canvas.width;
        const y = canvas.height;
        createFirework(x, y);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const particleArray = [];
animate();