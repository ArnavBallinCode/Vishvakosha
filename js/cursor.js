const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    cursor.style.transform = 'scale(1.5)';
});

document.addEventListener('mouseout', () => {
    cursor.style.transform = 'scale(0)';
});
