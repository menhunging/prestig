$(document).ready(function () {
  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".slider-type").length > 0) {
    const swiperTypes = new Swiper(".slider-type__slider", {
      slidesPerView: 1,
      spaceBetween: 200,
      initialSlide: 2,
      navigation: {
        prevEl: ".slider-type__slider .swiperBtnPrev",
        nextEl: ".slider-type__slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        560: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 1,
          spaceBetween: 200,
        },
      },
    });

    $(".slider-type__names .services-page__container")
      .stop()
      .animate(
        { scrollLeft: $(".slider-type__item.active").offset().left - 125 },
        200
      );

    swiperTypes.on("slideChangeTransitionEnd", function () {
      let margin = 140;

      margin = margin * $(".slider-type__item.active").index();

      $(".slider-type__names .services-page__container")
        .stop()
        .animate({ scrollLeft: margin - 125 }, 200);
    });

    swiperTypes.on("slideChange", function () {
      $(".slider-type__item").removeClass("active");
      $(".slider-type__item").eq(this.activeIndex).addClass("active");

      $(".slider-type__invis").removeClass("opened");
      $(document).off("mouseup");
    });

    if ($(".slider-type__item").length > 0) {
      $(".slider-type__item").on("click", function () {
        let index = $(this).index();
        $(".slider-type__item").removeClass("active");
        $(this).addClass("active");
        swiperTypes.slideTo(index);
      });
    }

    if ($(".slider-type__slider .circle").length > 0) {
      $(".slider-type__slider .circle").on("click", function () {
        let self = $(this);
        let block = self.parents(".swiper-slide").find(".slider-type__invis");

        block.addClass("opened");

        $(document).mouseup(function (e) {
          if (!block.is(e.target) && block.has(e.target).length === 0) {
            block.removeClass("opened");
            $(document).off("mouseup");
          }
        });
      });
    }
  }

  if ($(".slider-brands__slider").length > 0) {
    const swiperTypes = new Swiper(".slider-brands__slider", {
      slidesPerView: 5,
      spaceBetween: 40,
      loop: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".slider-brands__slider .swiperBtnPrev",
        nextEl: ".slider-brands__slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      },
    });
  }

  if ($(".special-offers__slider").length > 0) {
    const swiperTypes = new Swiper(".special-offers__slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".special-offers__slider .swiperBtnPrev",
        nextEl: ".special-offers__slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  if ($(".documents__slider").length > 0) {
    const swiperTypes = new Swiper(".documents__slider", {
      slidesPerView: 3,
      spaceBetween: 60,
      centeredSlides: true,
      initialSlide: 2,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".documents__slider .swiperBtnPrev",
        nextEl: ".documents__slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      },
    });
  }

  if ($(".reviews-services__slider").length > 0) {
    const swiperTypes = new Swiper(".reviews-services__slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".reviews-services__slider .swiperBtnPrev",
        nextEl: ".reviews-services__slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }
});
