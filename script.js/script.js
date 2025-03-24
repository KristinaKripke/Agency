const mobileNAv = document.querySelector('.header-main-nav');

const mobileNavOpen = document.querySelector('.mobile-nav-open');

mobileNavOpen.addEventListener('click', () => {
    mobileNavOpen.classList.toggle('active');
    mobileNAv.classList.toggle('active');
})

