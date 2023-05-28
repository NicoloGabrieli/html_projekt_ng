const sections = document.querySelectorAll("section");

function animateSections() {
  for (let section of sections) {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.75) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  }
}

animateSections();

window.addEventListener("scroll", animateSections);
var secretCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
var secretCodePosition = 0;
document.addEventListener("keydown", function(event) {
    if (event.code === secretCode[secretCodePosition]) {
        secretCodePosition++;
        if (secretCodePosition === secretCode.length) {
            window.location.href = "easteregg.html";
        }
    } else {
        secretCodePosition = 0;
    }
});

window.addEventListener("DOMContentLoaded", function() {
  const bars = document.querySelectorAll(".bar");

  setTimeout(function() {
    bars[0].style.width = "80%";
    bars[1].style.width = "70%";
    bars[2].style.width = "60%";
    bars[3].style.width = "70%";
    bars[4].style.width = "90%";
  }, 20);
});

