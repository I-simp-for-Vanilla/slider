let wrap = document.getElementById('wrap');
let left = document.getElementById('left');
let right = document.getElementById('right');
let position = 0;

left.addEventListener("click", function () {
    if(position < 0) {
        position += 100;
    }
    wrap.style.transform = 'translate(' + position + '%)';
});

right.addEventListener("click", function () {
    if(position > -500) {
        position -= 100;
    }
    wrap.style.transform = 'translate(' + position + '%)';
});