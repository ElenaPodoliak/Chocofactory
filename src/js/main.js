$(function(){
    var items = document.querySelector(".header__menu"),
        documents = document.documentElement;

window.addEventListener("scroll", function() {
  var size = documents.scrollTop;
  if (size > 100) {
    items.style.position = 'absolute';
    items.style.top = size - 9 + 'px';
  } else {
    items.style.position = '';
  }
});
});