const openMenu = (e) => {
    document.querySelector('#menu i').classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('.menu-page').classList.toggle('active');
    document.querySelector('body').classList.toggle('oy-h');
}

document.querySelector('#menu').addEventListener('click', openMenu);