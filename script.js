let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// circle skill

const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  var dots = circle.getAttribute("data-dots");
  var marked = circle.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  circle.innerHTML = points;

  const pointsMarked = circle.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

//filter project
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".fillter-buttons .btn");
  const images = document.querySelectorAll(".project-image img");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = button.getAttribute("data-filter");

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      images.forEach((img) => {
        img.style.display = "none";
        if (
          filter === "all" ||
          img.getAttribute("data-tags").includes(filter)
        ) {
          img.style.display = "inline-block";
        }
      });
    });
  });
});

//menu active

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();

window.addEventListener("scroll", activeMenu);

//stycky navbar

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 50);
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navList = document.querySelector(".navlist");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  const menuItems = document.querySelectorAll(".navlist li");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      navList.classList.remove("active");
    });
  });
});

// const menuIcon = document.getElementById("menu-icon");
// const navList = document.querySelector(".navlist");
// menuIcon.addEventListener("click", function () {
//   navList.classList.toggle("active");
// });
