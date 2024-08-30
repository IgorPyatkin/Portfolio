const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content--item');

tabItem.forEach(function(element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(item) {
        item.classList.remove('tabs__content-item--active');
    });

    if (tabTarget.classList.contains('intro__text--newcolor')) {
        const current = document.querySelector('.btn2');
        current.classList.add('tabs__btn-item--active');
    }

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');

    move();
}

let isAtTop = false;
const circle = document.querySelector('.circle');

function move() {

    creatTrail(circle);

    isAtTop = !isAtTop;

    if (isAtTop) {
        circle.style.top = "-50%";
    }
    else {
        circle.style.top = "50%";
    }

}

function creatTrail(circle) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    const offset = isAtTop ? 450 : -450;
    trail.style.top = (parseFloat(getComputedStyle(circle).top.slice(0, -2)) + offset) + 'px';

    circle.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 2000)
}