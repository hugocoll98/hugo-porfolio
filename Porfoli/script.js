window.addEventListener('load', function () {

    const navToogle = document.querySelector('.nav-toogle');

    navToogle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    })

    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click',()=>{
             document.body.classList.remove('nav-open');
        })
    });
    
});

