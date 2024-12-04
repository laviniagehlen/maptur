const scrollContainer = document.getElementById('scrollContainer');

function scrollImages() {
    scrollContainer.scrollLeft += 1;

    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
    }
}

let scrollInterval = setInterval(scrollImages, 20);

scrollContainer.addEventListener('mouseover', () => {
    clearInterval(scrollInterval);
});

scrollContainer.addEventListener('mouseout', () => {
    scrollInterval = setInterval(scrollImages, 20);
});
// Seleciona todas as divs com a classe "comment"
const comments = document.querySelectorAll('.comment');

// Itera sobre cada div selecionada
comments.forEach((comment, index) => {
    console.log(`Comentário ${index + 1}:`, comment.textContent);
    // Exemplo: aplica uma cor de fundo a cada comentário
    comment.style.backgroundColor = '#fff'
});


/*AVALIAÇÃO*/
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const feedback = document.getElementById("feedback");
  
    stars.forEach((star) => {
      star.addEventListener("click", function () {
        const rating = this.getAttribute("data-value");
  
        // Remove seleção de todas as estrelas
        stars.forEach((s) => s.classList.remove("selected"));
  
        // Adiciona seleção até a estrela clicada
        for (let i = 0; i < rating; i++) {
          stars[i].classList.add("selected");
        }
  
        // Mostra a avaliação no feedback
        feedback.textContent = `Você avaliou com ${rating} estrela(s)  👏✨. Obrigado!`;

        
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-button");
    const replyButtons = document.querySelectorAll(".reply-button");
  
    likeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        alert("Você curtiu o comentário de um usuário!");
      });
    });
  
    replyButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const reply = prompt("Digite sua resposta:");
        if (reply) {
          alert(`Você respondeu: "${reply}" ao comentário de Júlia Fernandes.`);
        }
      });
    });
  });


  