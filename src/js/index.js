console.log("index.js");

$(document).ready(function(){
  $('[data-js="header-slider"]').slick({
      // autoplay: true,
      autoplaySpeed: 2000,
      touchMove: false,
      swipe: false,
      draggable: false,
      nextArrow:
          "<button type=\"button\" class=\"slick-next\">" +
              "<svg class=\"slick-arrow-svg\">" +
              "<use xlink:href=\"/assets/fontawesome/sprites/solid.svg#angle-right\"></use>" +
              "</svg>" +
          "</button>",
      prevArrow:
          "<button type=\"button\" class=\"slick-prev\">" +
              "<svg class=\"slick-arrow-svg\">" +
              "<use xlink:href=\"/assets/fontawesome/sprites/solid.svg#angle-left\"></use>" +
              "</svg>" +
          "</button>",
  });
});
