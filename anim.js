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
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var spanElements = document.getElementsByClassName('bar');


var textArray = ['HTML', 'CSS', 'PHP', 'JAVA', 'POWERAPPS'];


function updateSpanContent() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth <= 480) {
    for (var i = 0; i < spanElements.length; i++) {
      spanElements[i].textContent = textArray[i] || '';
      spanElements[i].style.color = 'white';
      spanElements[i].style.fontFamily = 'Book Antiqua'
      spanElements[i].style.fontSize = '16px'
      spanElements[i].style.display = 'flex';
      spanElements[i].style.alignItems = 'center';
      spanElements[i].style.justifyContent = 'flex-start';

    }
  } else {
    for (var i = 0; i < spanElements.length; i++) {
      spanElements[i].textContent = '';
      spanElements[i].style.color = '';
      spanElements[i].style.marginLeft = '';
    }
  }
}

window.addEventListener('load', updateSpanContent);
window.addEventListener('resize', updateSpanContent);
