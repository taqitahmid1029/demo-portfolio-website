if (window.innerWidth < 768) {
    document.querySelector('#hamberger-icon').addEventListener('click', () => {
        document.querySelector('header').style.left = '0';
    })

    let navItems = document.querySelectorAll('nav li');
    navItems.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            document.querySelector('header').style.left = '-100vw';
        })
    })
}