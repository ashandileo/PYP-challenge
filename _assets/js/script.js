const changeMenuIcon = (mobileMenuIcon) => {
    mobileMenuIcon.classList.toggle('change');

    document.querySelector('.main-nav').classList.toggle('active');
}