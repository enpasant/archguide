// Obtendo os elementos do DOM
const openBtn = document.getElementById("openBtn");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector(".content");

// Adicionando um event listener para o clique
openBtn.addEventListener("click", function() {
    // Alterna a classe 'clicked' para mudar a cor
    openBtn.classList.toggle("clicked");
    
    // Alternar o menu ao clicar
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    sidebar.classList.toggle("open");
    content.classList.toggle("open");
    
    // Alterar o texto do botão quando o menu for aberto ou fechado
    if (sidebar.classList.contains("open")) {
        openBtn.innerHTML = "✖"; // Mudar o texto do botão quando o menu estiver aberto
    } else {
        openBtn.innerHTML = "☰"; // Mudar o texto do botão quando o menu estiver fechado
    }
});

