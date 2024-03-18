"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(
      document.getElementById("testim-dots").children
    ),
    testimContent = Array.prototype.slice.call(
      document.getElementById("testim-content").children
    ),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 10000,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;

  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  function nextSlide() {
    playSlide((currentSlide += 1));
  }

  function prevSlide() {
    playSlide((currentSlide -= 1));
  }

  testimLeftArrow.addEventListener("click", prevSlide);

  testimRightArrow.addEventListener("click", nextSlide);

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        prevSlide();
        break;

      case 39:
        nextSlide();
        break;

      default:
        break;
    }
  });

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    if (touchPosDiff > 0 + ignoreTouch) {
      prevSlide();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      nextSlide();
    } else {
      return;
    }
  });
});

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

