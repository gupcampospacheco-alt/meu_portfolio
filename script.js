// Fade-in ao carregar
window.addEventListener("load", () => {
  document.body.style.opacity = 0;

  setTimeout(() => {
    document.body.style.transition = "1s";
    document.body.style.opacity = 1;
  }, 100);
});

// Animação dos cards ao scroll
const cards = document.querySelectorAll(".card");

function mostrarCards() {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", mostrarCards);

// Executa ao carregar também
mostrarCards();

const texto = "Gustavo Pacheco | Desenvolvedor";
let i = 0;

function escrever() {
  if (i < texto.length) {
    document.getElementById("typing").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escrever, 60);
  }
}

escrever();

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (top < windowHeight - visiblePoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const revealsLeft = document.querySelectorAll(".reveal-left");
const revealsRight = document.querySelectorAll(".reveal-right");

function revealSide() {
  const windowHeight = window.innerHeight;

  [...revealsLeft, ...revealsRight].forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSide);
window.addEventListener("load", revealSide);

const sections = document.querySelectorAll(".section-slide");

function slideSections() {
  const trigger = window.innerHeight - 100;

  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;

    if (top < trigger) {
      sec.classList.add("active");
    }
  });
}

window.addEventListener("scroll", slideSections);

