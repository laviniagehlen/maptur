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
