var rightSection = document.querySelector('#header');

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  rightSection.style.backgroundPositionY = -scrollPosition + 'px';
});