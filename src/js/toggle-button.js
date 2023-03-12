// toggle buttons
const toggleButtons = document.querySelectorAll('[data-toggle]');
toggleButtons.forEach(item => {
    item.addEventListener('click', function () {
        const dataToggleContent = document.querySelector(item.dataset.toggle);
        dataToggleContent.classList.toggle('__active')
        item.classList.toggle('__active')
    });
});

const bodyLockButtons = document.querySelectorAll('.body-lock');
bodyLockButtons.forEach(item => {
    item.addEventListener('click', function () {
        document.body.classList.toggle('__lock');
        header.classList.toggle('__active');
        header.classList.remove('__hide');
    });
});