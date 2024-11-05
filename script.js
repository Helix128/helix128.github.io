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
