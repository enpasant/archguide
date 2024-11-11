// Seleciona o checkbox e o elemento body
const toggle = document.getElementById("mode-toggle");
const body = document.body;

// Define o estado inicial com base no localStorage
const savedMode = localStorage.getItem("theme");
if (savedMode === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
} else {
    body.classList.add("light-mode");
    toggle.checked = false;
}

// Adiciona um evento para alternar os modos e salvar a configuração no localStorage
toggle.addEventListener("change", () => {
    if (toggle.checked) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark"); // Salva o modo escuro no localStorage
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light"); // Salva o modo claro no localStorage
    }
});
