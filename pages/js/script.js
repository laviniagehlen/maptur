
// Limpar Formulário
function limparFormulario() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Exibir Modal
function exibirModal() {
    document.getElementById("modal").style.display = "flex";
}

// Fechar Modal
function fecharModal() {
    document.getElementById("modal").style.display = "none";
    limparFormulario();
}


// Fechar modal ao clicar no "x"
document.querySelector('.close').onclick = fecharModal;

// Fechar modal ao clicar fora do conteúdo
window.onclick = function (event) {
    if (event.target == document.getElementById("modal")) {
        fecharModal();
    }
}
