// javascript DOH

const toggle = document.getElementById('theme-toggle');
let isDarkMode = true;

toggle.addEventListener('click', () => {
    document.body.style.background = isDarkMode
    ? 'linear-gradient(to bottom, #243B55, #141E30)'
    : 'linear-gradient(to bottom, #141E30, #243B55)';
});

const dynamiccText = document.getElementById('dynamic-text');
const textArray = ['Fullstack Developer', 'Web Developer'];
let textIndex = 0;

function updateText(){
    dynamiccText.te
}