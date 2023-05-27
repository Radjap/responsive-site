$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header-menu,.logo__mobile").toggleClass("active");
    $("body").toggleClass("lock");
  });
  // window.addEventListener("resize", function () {
  //   var desktopContent = document.getElementById(".home-disktop");
  //   var mobileContent = document.getElementById(".home-mobile");
  //   var screenWidth = window.innerWidth;

  //   if (screenWidth <= 768) {
  //     desktopContent.style.display = "none";
  //     mobileContent.style.display = "block";
  //   } else {
  //     desktopContent.style.display = "block";
  //     mobileContent.style.display = "none";
  //   }
  // });
});
$(document).ready(function () {
  $(".slider").slick();

  $(".prev-button").click(function () {
    $(".slider").slick("slickPrev");
  });

  $(".next-button").click(function () {
    $(".slider").slick("slickNext");
  });
});
document.getElementById("show-more-btn").addEventListener("click", function () {
  var divs = document.querySelectorAll("#content div"); // Получаем все элементы <div> внутри #content

  // Перебираем полученные элементы и отображаем их
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "block";
  }

  // Скрываем кнопку после отображения всего содержимого
  this.style.display = "none";
});
$(document).ready(function () {
  $(".carousel").carousel();
});

const slider = document.querySelector(".slider");
const slides = Array.from(document.querySelectorAll(".slide"));

let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 0}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

const myModal = new bootstrap.Modal(
  document.getElementById("myModal"),
  options
);
// or
const myModalAlternative = new bootstrap.Modal("#myModal", options);
