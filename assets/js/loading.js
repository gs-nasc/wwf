const onReady = (e) => {
    document.querySelector('.loading-page img').classList.add('back');
    document.querySelector('body').classList.toggle('oy-h');
    document.querySelector('.loading-page').classList.toggle('oy-h');
    var opacity = 100;
    var interval = setInterval(() => {
        opacity -= 10;
        document.querySelector('.loading-page').style.opacity = opacity / 100;
        if (opacity <= 0) {
            clearInterval(interval);
            document.querySelector('.loading-page').style.display = 'none';
        }
    }, 50);
}

const onLoadStart = (e) => {
    alert('start');
};

window.onbeforeunload = onLoadStart;

document.addEventListener('DOMContentLoaded', onReady);
document.addEventListener('beforeunload', onLoadStart);