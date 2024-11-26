
// Variables para configurar la onda
let angle = 0; // Ángulo por defecto
const waveSpeed = 0.001; // Velocidad de la onda
const waveAmplitude = 512; // Amplitud de la onda
const waveFrequency = 0.002; // Frecuencia de la onda

const canvas = document.getElementById('sine-wave');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;
function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate( canvas.width/2.0, canvas.height/2.0);
  ctx.rotate(angle * Math.PI / 180);
  ctx.beginPath();
  for (let x = -canvas.height; x < canvas.height; x++) {
    const y = Math.cos((x * waveFrequency) + time) * waveAmplitude;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();

  time += waveSpeed;

  requestAnimationFrame(drawWave);
}
function drawWaveBack() {
  ctx.save();
  ctx.translate( canvas.width/2.0, canvas.height/2.0);
  ctx.rotate(angle * Math.PI / 180);
  ctx.beginPath();
  for (let x = -canvas.height; x < canvas.height; x++) {
    const y = Math.sin((x * waveFrequency*2) + time) * waveAmplitude/2.0;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();

  time += waveSpeed;

  requestAnimationFrame(drawWaveBack);
}
drawWave();
drawWaveBack();
// Animación de estrellas
const starsContainer = document.getElementById('stars');
function createStar() {
  
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 3 + 2;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  starsContainer.appendChild(star);

  setTimeout(() => star.remove(), 2000); // Explosión en 2 segundos
star.innerHTML = '<i class="fa-solid fa-bolt"></i>';
star.style.color = 'white';
}

// Generar estrellas continuamente
//setInterval(createStar, 300);

// Agregar estilos dinámicos para estrellas
const style = document.createElement('style');
style.innerHTML = `
  .star {
    position: absolute;
    border-radius: 50%;
    animation: explode 2s ease-out forwards;
  }
  @keyframes explode {
    0% {
      transform: scale(1);
      opacity: 0.0;
    }
    50%{
    transform: scale(0.8);
      opacity: 0.02;
    }
    90% {
      transform: scale(1.2);
      opacity: 0.15;
    }
    100% {
      transform: scale(0);
      opacity: 1.0;
    }
  }
`;
document.head.appendChild(style);

// Efecto de paralaje
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  canvas.style.transform = `translateY(${scrollY * -0.2}px)`;
  starsContainer.style.transform = `translateY(${scrollY * -0.5}px)`;
});



const rellax = new Rellax('.parallax-bg');

gsap.registerPlugin(ScrollTrigger);

gsap.to(".header", {
    backgroundColor: "rgba(18, 18, 18, 1)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
    scrollTrigger: {
        trigger: "#hero",
        start: "bottom top",
        toggleActions: "play reverse play reverse"
    }
});

gsap.from(".hero-content h1", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.5
});

gsap.from(".hero-content p", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1
});

gsap.from(".btn", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1.5
});

gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 992%",
            toggleActions: "play none none reverse"
        }
    });
});




const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const portfolioSlider = document.getElementById('portfolio-slider');
const portfolioProjects = [
    {
        image: 'https://www.instructure.com/sites/default/files/image/2021-12/Canvas_logo_single_mark.png',
        title: 'Canvas Downloader',
        description: '¡Quickly download your Canvas files!',
        link: 'https://github.com/Helix128/CanvasDownloader'
    },
    {
        image: 'https://pngimg.com/d/question_mark_PNG134.png',
        title: '???',
        description: '...',
        link: '#'
    },
    {
        image: 'https://pngimg.com/d/question_mark_PNG134.png',
        title: '???',
        description: '...',
        link: '#'
    }
];

portfolioProjects.forEach(project => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        </a>
    `;
    portfolioSlider.appendChild(slide);
});

swiper.update();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

gsap.utils.toArray('.section').forEach(section => {
    section.addEventListener('mouseenter', () => {
      gsap.to(section, {
        backgroundPosition: "100% 0",
        duration: 0.6,
        ease: "power2.out"
      });
    });
  
    section.addEventListener('mouseleave', () => {
      gsap.to(section, {
        backgroundPosition: "-100% 0",
        duration: 0.6,
        ease: "power2.out"
      });
    });
  });
