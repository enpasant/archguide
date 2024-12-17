const folderPath = "./guides/";

// Map each file to a custom display name
const fileMappings = {
    "archinstguide.html": "Archinstall",
    "aurguide.html": "AUR",
    "cmdguide.html": "Terminal",
    "deguide.html": "Ambiente de Desktop",
    "driverguide.html": "Drivers",
    "installguide.html": "Instalação Manual",
    "pacmanguide.html": "Pacman",
    "pkgguide.html": "PKGBUILD",
    "systemdguide.html": "Automatização Systemd",
    "windguide.html": "Compatibilidade",
};

// Function to search through custom file mappings
function searchFiles() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    const results = Object.entries(fileMappings).filter(([file, name]) =>
        name.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = "<li>No results found</li>";
    } else {
        results.forEach(([file, name]) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${folderPath}${file}" target="_blank">${name}</a>`;
            resultsContainer.appendChild(li);
        });
    }
}
