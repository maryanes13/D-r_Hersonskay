document.addEventListener("DOMContentLoaded", () => {

let header = document.querySelector('.header-page');
let burger = document.querySelector('.btn-burger');
let modal = document.querySelector('.modal-preview');

// модальное окно
if(modal) {

  let modalClose = modal.querySelector('.modal-close');
  let indexItem = 0;
  let modalPrev = modal.querySelector('.modal-prev');
  let modalNext = modal.querySelector('.modal-next');
  let modalImg = modal.querySelector('.modal-img')

  function closeModal() {
    modal.classList.remove('active');
  }
  modalClose.addEventListener('click', () => {
    closeModal()
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  function openModalWithMedia(index, swiperElements) {
    modalImg.innerHTML = '';
    let selectedElement = swiperElements[index];
    let elementClone = selectedElement.cloneNode(true);
    if (selectedElement.tagName === 'VIDEO') {
      elementClone.controls = true;
    }

    modalImg.appendChild(elementClone);
    indexItem = index;
    currentSwiperElements = swiperElements;
    return index; // возвращаем текущий индекс
  }

  function nextMedia() {
    if (!currentSwiperElements.length) return;
    indexItem++;
    if (indexItem >= currentSwiperElements.length) {
      indexItem = 0;
    }
    openModalWithMedia(indexItem, currentSwiperElements);
  }

  function prevMedia() {
    if (!currentSwiperElements.length) return;
    indexItem--;
    if (indexItem < 0) {
      indexItem = currentSwiperElements.length - 1;
    }
    openModalWithMedia(indexItem, currentSwiperElements);
  }

  // Назначаем обработчики ОДИН раз (вне условий)
  modalNext.addEventListener('click', nextMedia);
  modalPrev.addEventListener('click', prevMedia);
}

if(document.querySelector('.swiper-hero')) {
  var swiper = new Swiper(".swiper-hero", {
    direction: "vertical", // Начальное направление
    slidesPerView: 'auto',
    spaceBetween: 15,
    watchOverflow: true,
    grabCursor: false,
    loop: true,
    loopPreventsSlide: false,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
}

if(document.querySelector('.swiper-video')) {
  let swiper2 = new Swiper(".swiper-video", {
    slidesPerView: 2.1,
    grabCursor: true,
    watchOverflow: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3.1,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3.8,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });

  let swiperVideo = document.querySelectorAll('.swiper-video video');

  swiperVideo.forEach((item, index) => {
    item.addEventListener('click', () => {
      modal.classList.add('active');
      openModalWithMedia(index, swiperVideo);
    });
  });

}

if(document.querySelector('.swiper-third')) {

  let swiper3 = new Swiper(".swiper-third", {
    slidesPerView: 2.3,
    grabCursor: true,
    watchOverflow: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2.15,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 3.25,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4.2,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });

  let swiperThird = document.querySelectorAll('.swiper-third img');

  swiperThird.forEach((item, index) => {
    item.addEventListener('click', () => {
      modal.classList.add('active');
      openModalWithMedia(index, swiperThird);
    });
  });

  let swiperThird2 = document.querySelectorAll('.swiper-third li');

  swiperThird2.forEach((item, index) => {
    item.addEventListener('click', () => {
      modal.classList.add('active');
      openModalWithMedia(index, swiperThird2);
    });
  });


}

if(document.querySelector('.swiper-five')) {

  let swiper4 = new Swiper(".swiper-five", {
    slidesPerView: 1.3,
    grabCursor: true,
    watchOverflow: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3.3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

}

if(document.querySelector('.swiper-magazine')) {

  let swiper6 = null;
  function initSwiper() {
    if (innerWidth < 768 && !swiper6) {
      swiper6 = new Swiper(".swiper-magazine", {
        slidesPerView: 3.3,
        grabCursor: true,
        watchOverflow: true,
        loop: true,
        spaceBetween: 10,
        loopedSlides: 3,
        speed: 3000,
        autoplay: {
          delay: 0,
        }
      });
    } else if (innerWidth >= 768 && swiper6) {
      swiper6.destroy(true, true);
      swiper6 = null;
    }
  }

  // Инициализация при загрузке
  initSwiper();

  // Инициализация при изменении размера с debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initSwiper, 150);
  });

}

if(document.querySelector('.swiper-history')) {

  let swiper3 = new Swiper(".swiper-history", {
    slidesPerView: 2.3,
    grabCursor: true,
    watchOverflow: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2.15,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 3.25,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });


  let swiperhistory = document.querySelectorAll('.swiper-history li');

  swiperhistory.forEach((item, index) => {
    item.addEventListener('click', () => {
      modal.classList.add('active');
      openModalWithMedia(index, swiperhistory);
    });
  });


}

if(document.querySelector('.about-cliniks-slider')) {

  let swiper5 = new Swiper(".about-cliniks-slider", {
    grabCursor: true,
    loop: true,
    watchOverflow: true,
    spaceBetween: 20,
    pagination: {
      el: ".pagination-slider",
    },
  });

}

if(header) {

  burger.addEventListener('click', () => {

    if(header.classList.contains('active')) {
      header.classList.remove('active');
    } else {
      header.classList.add('active');
    }

    if(burger.classList.contains('active')) {
      burger.classList.remove('active');
    } else {
      burger.classList.add('active');
    }
  })

}

if(document.querySelector('.blog')) {
  let blog = document.querySelector('.blog');
  let blogBtns = blog.querySelectorAll('.blog-navigation-item button');
  let blogPanel = blog.querySelectorAll('.blog-content-item');

  blogBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {

      blogBtns.forEach(item => {
        item.classList.remove('active');
      })
      blogPanel.forEach(panel => {
        panel.classList.remove('active');
      })

      btn.classList.add('active');

      if (blogPanel[index]) {
        blogPanel[index].classList.add('active');
      }

    })
  })
}

});
