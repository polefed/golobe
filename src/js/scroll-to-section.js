// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// scroll to section
const scrollToSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.main-navigation a').forEach((link) => {
                let id = link.getAttribute('href').replace('#', '');
                if (id === entry.target.id) {
                    link.classList.add('__active');
                } else {
                    link.classList.remove('__active');
                }
            });
        }
    });
}, {
    threshold: 0.6
});

document.querySelectorAll('.section').forEach(section => {
    scrollToSectionObserver.observe(section)
});



// FPZH

// const menuLinks = document.querySelectorAll('.header-link[data-goto]');
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener('click', onMenuLinkClick);
//     });
//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: "smooth"
//             });
//             e.preventDefault();
//         }
//     }
// }