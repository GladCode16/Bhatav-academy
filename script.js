var screen_width = screen.width;
var noc = 2;
if (screen_width <= 680) {
  console.log("Hello world");
  noc = 1;
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: noc,
    spaceBetween: 80,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });