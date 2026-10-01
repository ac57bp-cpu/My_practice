const toggle = document.querySelector('.toggle');
const showCase = document.querySelector('.showcase');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    showCase.classList.toggle('active');
})

