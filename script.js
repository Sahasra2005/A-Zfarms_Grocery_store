document.addEventListener("DOMContentLoaded", function () {
    let searchForm = document.querySelector('.search-form');
    let searchBtn = document.querySelector('#search-btn');

    let shoppingCart = document.querySelector('.shopping-cart');
    let cartBtn = document.querySelector('#cart-btn');

    let loginForm = document.querySelector('.login-form');
    let loginBtn = document.querySelector('#login-btn');

    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');

    if (searchBtn) {
        searchBtn.onclick = () => {
            searchForm.classList.toggle('active');
            shoppingCart.classList.remove('active');
            loginForm.classList.remove('active');
            navbar.classList.remove('active');
        };
    }

    if (cartBtn) {
        cartBtn.onclick = () => {
            shoppingCart.classList.toggle('active');
            searchForm.classList.remove('active');
            loginForm.classList.remove('active');
            navbar.classList.remove('active');
        };
    }

    if (loginBtn) {
        loginBtn.onclick = () => {
            loginForm.classList.toggle('active');
            searchForm.classList.remove('active');
            shoppingCart.classList.remove('active');
            navbar.classList.remove('active');
            
        };
    }

    if (menuBtn) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            searchForm.classList.remove('active');
            shoppingCart.classList.remove('active');
            loginForm.classList.remove('active');
        };
    }

    // Prevent elements from staying active when scrolling
    window.onscroll = () => {
        searchForm?.classList.remove('active');
        shoppingCart?.classList.remove('active');
        loginForm?.classList.remove('active');
    };

    // Initialize Swiper correctly
    new Swiper(".product-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,  // Fixed typo
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });


    new Swiper(".review-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,  // Fixed typo
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
});
