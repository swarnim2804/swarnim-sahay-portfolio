// Wait for the page to fully load
window.onload = function() {
    // Hero section animation
    gsap.to(".hero h1", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.to(".hero p", { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.to(".cta", { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" });

    // Scroll-triggered animations for project cards
    gsap.to(".project-card", {
        scrollTrigger: {
            trigger: ".projects-section",
            start: "top center"
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    });
};