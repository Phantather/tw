function headerScrollEvent() {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      // здесь можно изменить расстояние, на котором будет меняться цвет
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Burger
function burgerEvent() {
  const burger = document.querySelector('.header__burger');
  const headerList = document.querySelector('.header__list');

  burger.addEventListener('click', () => {
    console.log('Click');
    burger.classList.toggle('open');
    headerList.classList.toggle('show');
  });
}

//swiper
// var swiper = new Swiper('.glSwiper', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

function globalSwiperCallback() {
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
}

function overlayPopupEvent() {
  let overlay = document.querySelector('.overlay');
  let btn = document.querySelectorAll('.main__buttons-btn ');
  let close = document.querySelector('.popup__close');

  Array.from(btn).forEach((item) => {
    item.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });
  });
}

// close.addEventListener('click', () => {
//     overlay.style.display = 'none'
// })
//
// overlay.addEventListener('click', (e) => {
//     if (e.target.className === 'overlay') {
//         overlay.style.display = 'none'
//     }
// })

//Form events filter/search
function eventsFilterSearch() {
  let eventForm = document.querySelector('#events_form');
  let eventCalendar = document.querySelector('.calendar__input');
  let eventCurrentDate = document.querySelector('.calendar__today');

  eventForm.addEventListener('submit', () => {
    new URLSearchParams(new FormData(eventForm)).toString();
  });
  eventCalendar.value = getParameterByName('date');
  eventCalendar.addEventListener('change', () => eventForm.submit());
}

//Call functions
headerScrollEvent();
burgerEvent();
globalSwiperCallback();
overlayPopupEvent();
eventsFilterSearch();
