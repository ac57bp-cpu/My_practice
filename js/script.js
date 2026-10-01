let snowContainer = document.querySelector('.snow-container');


// 雪の大きさと位置をランダムにするための関数
const createSnow = () => {
    // 雪の要素を生成
    let snow = document.createElement('span');
    // spanにクラス名つける
    snow.className = 'snow';
    // 雪の大きさ決定
    minSize = 5;
    maxSize = 10;

    // 雪の大きさをランダムに決める
    let snowSize = Math.random() * (maxSize - minSize) + minSize;
    // 大きさをスパンに反映させる
    snow.style.width = snowSize + 'px';
    snow.style.height = snowSize + 'px';

    // 雪の降り始めの位置を決定する
    snow.style.left = Math.random() * 100 + '%';
    // 親にスノーを入れる
    snowContainer.appendChild(snow);

    // 10秒後に雪を消す
    setTimeout(() => {
        // snowから10秒後にクラスを消す
        snow.remove();
    }, 10000);
};

// 関数の処理を0.1秒ごとに実行
setInterval(createSnow, 100);