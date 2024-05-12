// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
  if (window.scrollY < 200) {
    // Scrolling within the first 200 pixels
    navbar.style.top = 0;
  } else {
    // Scrolling past the first 200 pixels
    if (window.scrollY < lastScroll) {
      navbar.style.top = 0;
    } else {
      navbar.style.top = "-60px";
    }
  }

  lastScroll = window.scrollY;
});
