gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Cursor tracking
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    // Section fade-in animations
    gsap.utils.toArray('.section').forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                end: 'top 60%',
                toggleActions: 'play none none reverse',
            },
        });
    });
});
