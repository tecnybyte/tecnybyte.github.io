// ==========================================
// MENÚ HAMBURGUESA MÓVIL
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Ocultar el menú automáticamente al hacer clic en cualquier enlace en dispositivos móviles
        document.querySelectorAll('#navMenu ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});

// ==========================================
// PANTALLA DE CARGA RÁPIDA (GARANTIZADA)
// ==========================================
function ocultarLoader() {
    const loader = document.getElementById('loader-screen');
    if (loader && !loader.classList.contains('fade-out')) {
        loader.classList.add('fade-out');
    }
}

// Ocultar al cargar el DOM completo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(ocultarLoader, 1700);
});

// Respaldo de seguridad por si el navegador se atrasa
window.addEventListener('load', () => {
    setTimeout(ocultarLoader, 700);
});

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

if (cursor && follower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        requestAnimationFrame(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        });
    });

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
}

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});

// ==========================================
// LABORATORIO DE COMPUERTAS LÓGICAS
// ==========================================
let inputA = 0;
let inputB = 0;

function toggleInput(canal) {
    if (canal === 'A') {
        inputA = inputA === 0 ? 1 : 0;
        const valA = document.getElementById('val-a');
        if (valA) valA.innerText = inputA;
    } else if (canal === 'B') {
        inputB = inputB === 0 ? 1 : 0;
        const valB = document.getElementById('val-b');
        if (valB) valB.innerText = inputB;
    }
    actualizarCompuertas();
}

function actualizarCompuertas() {
    let outNot = inputA === 0 ? 1 : 0;
    const notOutput = document.querySelector('#not-output span');
    if (notOutput) notOutput.innerText = outNot;
    toggleLed('led-not', outNot);

    let outAnd = (inputA === 1 && inputB === 1) ? 1 : 0;
    const andOutput = document.querySelector('#and-output span');
    if (andOutput) andOutput.innerText = outAnd;
    toggleLed('led-and', outAnd);

    let outOr = (inputA === 1 || inputB === 1) ? 1 : 0;
    const orOutput = document.querySelector('#or-output span');
    if (orOutput) orOutput.innerText = outOr;
    toggleLed('led-or', outOr);
}

function toggleLed(idLed, estado) {
    const led = document.getElementById(idLed);
    if (led) {
        if (estado === 1) {
            led.classList.add('active');
        } else {
            led.classList.remove('active');
        }
    }
}