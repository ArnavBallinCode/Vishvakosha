// Select the cursor element
const cursor = document.getElementById('cursor');

// Create a mousemove event listener
document.addEventListener('mousemove', (e) => {
    // Update the position of the cursor based on mouse movement
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
});

// Add a hover effect to make the cursor grow on hoverable elements
document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});
