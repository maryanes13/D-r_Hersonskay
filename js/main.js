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
    grabCursor: true,
    loop: true,
    loopPreventsSlide: false,
    speed: 6000,
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
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 3.3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4.3,
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

  let swiperFive = document.querySelectorAll('.swiper-five li');

  swiperFive.forEach((item, index) => {
    item.addEventListener('click', () => {
      modal.classList.add('active');
      openModalWithMedia(index, swiperFive);
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
