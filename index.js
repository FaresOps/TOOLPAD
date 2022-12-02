
let text = document.getElementById('text');
let helmet1 = document.getElementById('helmet1');
let helmet2 = document.getElementById('helmet2');
let btn = document.getElementById('btn');
let trophies = document.getElementById('trophies');
let backround = document.getElementById('backround');
let header = document.getElementById('header');
let carr = document.getElementById('carr');


window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%';
    helmet1.style.top = value * -1.5 + 'px';
    helmet1.style.right = value * 2 + 'px';
    helmet2.style.top = value * -1.5 + 'px';
    helmet2.style.right = value * -5 + 'px';
    btn.style.top = value * -0.12 + 'px';
    trophies.style.left = value * -0.09 + 'px';
    carr.style.left = value * -0.2 + 'px';
})

