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
// Elementreferenzen zu den <span>-Elementen mit der Klasse "bar" erhalten
var spanElements = document.getElementsByClassName('bar');

// Array mit den gewünschten Texten für jedes <span>-Element erstellen
var textArray = ['HTML', 'CSS', 'PHP', 'JAVA', 'POWERAPPS'];

// Funktion zum Aktualisieren des Inhalts, der Schriftfarbe und des linken Außenabstands der <span>-Elemente
function updateSpanContent() {
  // Bildschirmbreite abrufen
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Überprüfen, ob die Bildschirmbreite den Schwellenwert überschreitet
  if (screenWidth <= 480) {
    // Aktualisiere den Inhalt, die Schriftfarbe und den linken Außenabstand aller <span>-Elemente mit der Klasse "bar"
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
    // Zurücksetzen des Inhalts, der Schriftfarbe und des linken Außenabstands aller <span>-Elemente mit der Klasse "bar"
    for (var i = 0; i < spanElements.length; i++) {
      spanElements[i].textContent = '';
      spanElements[i].style.color = '';
      spanElements[i].style.marginLeft = '';
    }
  }
}

// Funktion beim Laden der Seite und beim Ändern der Bildschirmgröße aufrufen
window.addEventListener('load', updateSpanContent);
window.addEventListener('resize', updateSpanContent);
