$(document).ready(function() {
  var current = 1;
  var itemLength = $(".card-container .item").length; // I could also just use the number 3 for the 3 slides and it works.

  $(".cardSlider .btn-prev").on("click", function() {
    if (current > 1) {
      current = current - 1;
      showSlider(current);
    } else {
      current = itemLength;
      showSlider(current);
    }
  });
  $(".cardSlider .btn-next").on("click", function() {
    if (current !== itemLength) {
      current = current + 1;
      showSlider(current);
    } else {
      current = 1;
      showSlider(current);
    }
  });
  function showSlider(current) {
    $(".card-container .item").removeClass("active");
    $('div[data-id="' + current + '" ]').addClass("active");
  }
});
