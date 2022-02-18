"use strict";

/*slider*/
document.addEventListener('DOMContentLoaded', function () {
  var elms = document.querySelectorAll('.slider');

  for (var i = 0, len = elms.length; i < len; i++) {
    new ChiefSlider(elms[i], {
      autoplay: true,
      interval: 3000,
      refresh: true
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var elms = document.querySelectorAll('.slider--special');

  for (var n = 0, len = elms.length; n < len; n++) {
    new Slider(elms[n], {
      autoplay: false,
      interval: 3000
    });
  }
});
/*fixed header*/

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header__fixed");
  } else {
    header.classList.remove("header__fixed");
  }
}