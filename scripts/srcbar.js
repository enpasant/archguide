
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    if (query) {
        alert(`Você buscou por: ${query}`);
    } else {
        alert("Por favor, digite algo para buscar!");
    }
});

