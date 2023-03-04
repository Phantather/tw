window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) { // здесь можно изменить расстояние, на котором будет меняться цвет
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//select
const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
});


// Burger
const burger = document.querySelector('.header__burger')
const headerList = document.querySelector('.header__list')

burger.addEventListener('click', () => {
    console.log(
        'Click'
    );
    burger.classList.toggle('open')
    headerList.classList.toggle('show')
})


//swiper
var swiper = new Swiper(".glSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper",{
    slidesPerView:4,
    spaceBetween: 30,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // onmousewheel:true,
    // keyboard:true,
    autoplay: {
        delay: 2000
    },
    loop:true,
    breakpoints:{
        1200:{
            slidesPerView: 4,
        },
        1024:{
            slidesPerView: 3,
        },
        992:{
            slidesPerView:3,
        },
        886:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        676:{
            slidesPerView:1,
        },
        577:{
            slidesPerView:1,
        },
        475:{
            slidesPerView:1,
        },
        425:{
            slidesPerView:1,
        },
        320:{
            slidesPerView:1,
        }
    }
});

