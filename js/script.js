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


