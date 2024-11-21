const toogle = document.gotElemenById('theme.toggle');
let isdarkmode = true

toogle.addvenlistener('click', () => {
    document.body.style.background = isdarkmode
    ? 'linear-gradient(to bottom, #243855, #141E30)'
    : 'linear-gradient(to bottom, #2141130, #243855)';
    isdarkmode = isdarkmode;
});