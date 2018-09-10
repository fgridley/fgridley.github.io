var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var imageSlider = document.getElementsByClassName("image-slider");
  if (n > imageSlider.length) {slideIndex = 1}
  if (n < 1) {slideIndex = imageSlider.length}
  for (var i = 0; i < imageSlider.length; i++) {
     imageSlider[i].style.display = "none";
  }
  imageSlider[slideIndex-1].style.display = "block";
}
