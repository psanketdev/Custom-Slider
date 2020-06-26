console.log('This is a image slider');

let slides = document.querySelector('.imageContainer').children;
let rightArrow = document.querySelector('#rightArrow');
let leftArrow = document.querySelector('#leftArrow');
let index = 0;

rightArrow.addEventListener('click', function () {
  next();
});
leftArrow.addEventListener('click', function () {
  prev();
});

function next() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide() 
}

function prev() {
  if (index == 0) {
    index = slides.length-1;
  } else {
    index--;
  }
  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');
}

setInterval(function () {
  next();
}, 3000)


