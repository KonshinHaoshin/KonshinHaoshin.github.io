window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}

// 获取按钮元素
const goDownButton = document.getElementById('go-down');
const scrollPercentDisplay = document.querySelector('.scroll-percent');

// 点击按钮滚动到底部
goDownButton.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight, // 滚动到底部
        behavior: 'smooth' // 平滑滚动
    });
});

// 更新滚动百分比
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.clientHeight;
    const documentHeight = document.body.scrollHeight;

    const percent = Math.min(
        Math.round((scrollTop / (documentHeight - windowHeight)) * 100),
        100
    );

    scrollPercentDisplay.textContent = `${percent}%`;
});
