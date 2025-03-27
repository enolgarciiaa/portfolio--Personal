document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".title h1", {
      duration: 2,
      opacity: 0,
      y: 80,
      ease: "power3.out"
    });
  
    gsap.from(".title p", {
      duration: 2,
      delay: 0.3,
      opacity: 0,
      y: 60,
      ease: "power3.out"
    });
  
    gsap.from(".title button", {
      duration: 1,
      delay: 0.6,
      opacity: 0,
      scale: 0.8,
      ease: "back.out(1.7)"
    });
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Contenedor general: entrada suave desde abajo
    gsap.from(".about-container", {
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  
    // Texto desde la izquierda
    gsap.from(".text-about", {
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    });
  
    // Imagen desde la derecha
    gsap.from(".img-about-container", {
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power2.out"
    });
});
  

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from(".frase-motivadora h2", {
      scrollTrigger: {
        trigger: ".frase-motivadora",
        start: "top 90%",
        toggleActions: "play none none none"
      },
      y: 120,            // se eleva más desde abajo
      opacity: 0,
      duration: 2.5,     // más duración
      ease: "power4.out"
    });
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#services", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 100,                 // sube desde abajo
    opacity: 0,             // empieza invisible
    duration: 1.2,
    ease: "back.out(1.7)"   // rebote suave
  });
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#projects h2", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    x: 250,                    // desde la derecha
    opacity: 0,
    duration: 1.5,
    ease: "back.out(3)"        // rebote exagerado
  });
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".herrramientas-container h2", {
    scrollTrigger: {
      trigger: ".herrramientas-container",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 250,                    // desde más abajo
    opacity: 0,                // aparece desvanecido
    duration: 1.5,
    ease: "back.out(3)"        // ¡bote fuerte y exagerado!
  });
});











  

  
  
  