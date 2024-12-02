let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const estrelas = document.querySelectorAll(".estrela");
let nota = 0;

// Evento para selecionar as estrelas
estrelas.forEach((estrela) => {
    estrela.addEventListener("click", function() {
        nota = this.getAttribute("data-valor");
        atualizaEstrelas(nota);
    });
});

function atualizaEstrelas(notaSelecionada) {
    estrelas.forEach((estrela) => {
        if (estrela.getAttribute("data-valor") <= notaSelecionada) {
            estrela.classList.add("checked");
        } else {
            estrela.classList.remove("checked");
        }
    });
}

// Envio do formulário
document.getElementById("avaliacao-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const comentario = document.getElementById("comentario").value;
    
    const avaliacao = document.createElement("li");
    avaliacao.innerHTML = ` ${nota} ⭐ - ${comentario}`;
    
    document.getElementById("lista-avaliacoes").appendChild(avaliacao);

    // Limpa o formulário após o envio
    document.getElementById("avaliacao-form").reset();
    atualizaEstrelas(0);  // Limpa as estrelas
});

// Quando o usuário rolar para baixo 20px a partir do topo da página, mostra o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 500) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// Quando o usuário clicar no botão, rola a página até o topo
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

