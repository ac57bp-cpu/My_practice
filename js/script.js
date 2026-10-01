let mainTitle = document.querySelector('.title');
let imagesItems = [...document.querySelectorAll('.img-wrap')];
let titles = [...document.querySelectorAll('h2')];


// 監視対象になったら、activeを付与する関数
let setItemActive = (entries) => {
    // console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
        else {
            entry.target.classList.remove('active');
        }
    });
};

let options = {
    rootMargin: '0px',
    threshold: 0.5,
};

// 監視の設定　特定の位置に来たら関数を呼ぶ
let observer = new IntersectionObserver(setItemActive, options);
// 監視の中身
observer.observe(mainTitle);


//偶数と奇数で出現する場所を変更する
imagesItems.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(../images/${index + 1}.jpg)`;
    index % 2 === 0 ? (item.style.left = '55%') : (item.style.left = '5%');
    observer.observe(item);
});


titles.map((title, index) => {
    index % 2 === 0 ? (title.style.left = '45%') : (title.style.left = '35%');
    observer.observe(title);

})