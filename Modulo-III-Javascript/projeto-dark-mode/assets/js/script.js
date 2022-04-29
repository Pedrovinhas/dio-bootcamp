darkMode = document.querySelector('.fa-moon')
lightMode  = document.querySelector('.fa-sun')
body = document.querySelector('body');

darkMode.addEventListener('click', () => {
    lightMode.style.display = "block";
    darkMode.style.display = "none";
    body.classList.add('dark-mode');
})

lightMode.addEventListener('click', () => {
    lightMode.style.display = "none";
    darkMode.style.display = "block"
    body.classList.remove('dark-mode');
})