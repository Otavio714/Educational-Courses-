const bars = document.querySelector('.bars');
const menu = document.querySelector('.menu');

bars.addEventListener('click', () => {
    console.log('Cliquei no menu!');
    menu.classList.toggle('show_menu');
});

//OUR INSTITUTE SLIDERS

var swiper = new Swiper(".instituteSwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 1500,
    },
    breakpoints: {
        1200: {
            slidesPerView: 6,

        },
        900: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 2,
        },
        375: {
            slidesPerView: 1
        },
        360: {
            slidesPerView: 1
        }
    }
});