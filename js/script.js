// １　ランダムにおみくじの画像パスを返す処理
const getRandomImage = () => {
    const number = Math.floor(Math.random() * 7);
    const imagePath = `./images/omikuji-${number.toString()}.png`;
    return imagePath;
}

console.log(getRandomImage());


// ２　ボタンを押すとスロットが回転する処理
const playOmikuji = () => {
    {
        // console.log('clicked');
        const timer = setInterval(() => {
            document.querySelector('#js-result').setAttribute('src', getRandomImage());
        }, 50);
        // ３　数秒後にスロットが止まる処理
        setTimeout(() => {
            clearInterval(timer);
        }, 1000);
    }
}


const jsBtn = document.querySelector('#js-btn');

jsBtn.addEventListener('click', playOmikuji);


document.querySelector('.jave').addEventListener('click', () => {
    document.querySelector('.text').textContent = 'JaveScript';
});
