let circle = document.getElementById('circle');
const upBtn = document.getElementById('upbtn');
const downBtn = document.getElementById('downbtn');

let rotateValue = circle.style.transform;
// console.log(rotateValue);

let rotateSum;

// 上矢印がクリックされたら
upBtn.addEventListener('click', () => {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});


downBtn.addEventListener('click', () => {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});