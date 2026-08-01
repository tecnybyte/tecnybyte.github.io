// Ocultar pantalla de carga rápida al terminar la secuencia
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader-screen');
        loader.classList.add('fade-out');
    }, 1200);
});

// Custom Cursor movement mejorado
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    requestAnimationFrame(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });
});

// Efecto hover dinámico en cursor cuando pasa por botones o enlaces
document.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.width = '18px';
        cursor.style.height = '18px';
        follower.style.width = '48px';
        follower.style.height = '48px';
        follower.style.borderColor = 'var(--accent-blue)';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        follower.style.width = '32px';
        follower.style.height = '32px';
        follower.style.borderColor = 'rgba(37, 99, 235, 0.4)';
    });
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
});

// Interactive Logic Gates Widget
let inputA = 0;
let inputB = 0;

function toggleInput(canal) {
    if (canal === 'A') {
        inputA = inputA === 0 ? 1 : 0;
        document.getElementById('val-a').innerText = inputA;
    } else if (canal === 'B') {
        inputB = inputB === 0 ? 1 : 0;
        document.getElementById('val-b').innerText = inputB;
    }
    actualizarCompuertas();
}

function actualizarCompuertas() {
    let outNot = inputA === 0 ? 1 : 0;
    document.querySelector('#not-output span').innerText = outNot;
    toggleLed('led-not', outNot);

    let outAnd = (inputA === 1 && inputB === 1) ? 1 : 0;
    document.querySelector('#and-output span').innerText = outAnd;
    toggleLed('led-and', outAnd);

    let outOr = (inputA === 1 || inputB === 1) ? 1 : 0;
    document.querySelector('#or-output span').innerText = outOr;
    toggleLed('led-or', outOr);
}

function toggleLed(idLed, estado) {
    const led = document.getElementById(idLed);
    if (estado === 1) {
        led.classList.add('active');
    } else {
        led.classList.remove('active');
    }
}