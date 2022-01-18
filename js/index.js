const path = document.querySelector('.mouth');
const input = document.querySelector('input');

function changeEmotion() {
    if (input.checked) {
        path.style = 'transform: scale(1, 1); transform-origin: 46% 70%;';
        document.querySelector("#emotion").innerHTML = 'Happy';
    } else {
        path.style = 'transform: scale(1, -1); transform-origin: 46% 70%;';
        document.querySelector("#emotion").innerHTML = 'Sad';
    }
}

changeEmotion();

input.addEventListener('click', changeEmotion);

const hands = [];
hands.push(document.querySelector('.secondhand > *'));
hands.push(document.querySelector('.minutehand > *'));
hands.push(document.querySelector('.hourhand > *'));

const cx = 100;
const cy = 100;

function shifter(val) {
    return [val, cx, cy].join(' ');
}

const date = new Date();
const hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
const minuteAngle = 360 * date.getMinutes() / 60;
const secAngle = 360 * date.getSeconds() / 60;

hands[0].setAttribute('from', shifter(secAngle));
hands[0].setAttribute('to', shifter(secAngle + 360));
hands[1].setAttribute('from', shifter(minuteAngle));
hands[1].setAttribute('to', shifter(minuteAngle + 360));
hands[2].setAttribute('from', shifter(hoursAngle));
hands[2].setAttribute('to', shifter(hoursAngle + 360));

for(let i = 1; i <= 12; i++) {
    let el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', '100');
    el.setAttribute('y1', '30');
    el.setAttribute('x2', '100');
    el.setAttribute('y2', '40');
    el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
    el.setAttribute('style', 'stroke: #ffffff;');
    document.querySelector('.clock').appendChild(el);
}