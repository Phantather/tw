window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// Burger

const burger = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    headerList.classList.toggle('show');
});


//swiper
// var swiper = new Swiper('.glSwiper', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


var swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // onmousewheel:true,
    // keyboard:true,
    autoplay: {
        delay: 3000,
    },
    speed: 1500,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        885: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        676: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 1,
        },
        475: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    },
});
var swiper = new Swiper('.foundSwiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // onmousewheel:true,
    // keyboard:true,
    autoplay: {
        delay: 3000,
    },
    speed: 1500,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        885: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        676: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 1,
        },
        475: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    },
});




//Form events filter/search



let im = new Inputmask("+\\9\\96 (999) 99-99-99");

let formTel = document.querySelector('#tel')

im.mask(formTel);

//Call functions



