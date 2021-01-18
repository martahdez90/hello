
    //animación logo
   document.querySelector('video').playbackRate = 1.0;
    document.querySelector('video').play();

    //animación intro
    const tl = gsap.timeline({ defaults: { ease: 'power1.easeOut' } })

  
    tl.to('.text', { y: "0%", duration: 2.5, stagger: 0.25 });
    tl.to('.intro', { y: "-100%", duration: 2.5 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.1 })
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1.2 }, "-=1")
    tl.fromTo(".small-text", { opacity: 0 }, { opacity: 1, duration: 1.1 }, "-=0.7")



