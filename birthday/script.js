const wishes = [
    {lang: 'English', text: "Happy Birthday!"},
    {lang: 'Spanish', text: "¡Feliz cumpleaños!"},
    {lang: 'French', text: "Joyeux anniversaire!"},
    {lang: 'Italian', text: "Buon compleanno!"},
    {lang: 'German', text: "Alles Gute zum Geburtstag!"},
    {lang: 'Russian', text: "С днём рождения!"},
    // 更多语言...
];

const wishElement = document.getElementById('wish');
let currentIndex = 0;

function nextWish() {
    // 随机选择一个祝福语
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const wish = wishes[randomIndex].text;

    // 显示祝福语并重置动画
    wishElement.textContent = wish;
    wishElement.style.opacity = 1;
    wishElement.style.transform = 'translateY(0)';
    
    // 清除之前的动画循环
    clearInterval(intervalId);
    
    // 设置新的动画循环
    intervalId = setInterval(() => {
        wishElement.style.opacity = 0;
        wishElement.style.transform = 'translateY(50px)';
    }, 1000);
}

// 初始显示一个随机祝福语
nextWish();