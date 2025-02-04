// Schimbă tema (Dark Mode / Light Mode)
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  
  // Adăugați un eveniment pe buton
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
  

  // Inițializare Slick Carousel
$(document).ready(function(){
    $('.project-carousel').slick({
      infinite: true, // Permite rularea nelimitată a caruselului
      slidesToShow: 3, // Arată 3 proiecte pe rând
      slidesToScroll: 1, // Mergi un proiect pe rând
      autoplay: true, // Permite rularea automată
      autoplaySpeed: 3000, // Schimbă proiectele la fiecare 3 secunde
      arrows: true, // Adaugă săgeți pentru navigare
      dots: true, // Adaugă puncte pentru navigare
      responsive: [
        {
          breakpoint: 1024, // Pe tablete, afișează 2 proiecte
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768, // Pe telefoane mobile, afișează 1 proiect
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  