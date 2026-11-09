function sorteraTabell(rubrik, kolumn) {
    let tabell = rubrik.closest("table");
    let tbody = tabell.querySelector("tbody");
    let rader = Array.from(tbody.querySelectorAll("tr"));

    let riktning = rubrik.dataset.riktning || "högst";

    rader.sort(function(a, b) {
        let värdeA = Number(a.cells[kolumn].dataset.value);
        let värdeB = Number(b.cells[kolumn].dataset.value);

        if (riktning === "högst") {
            return värdeB - värdeA;
        } else {
            return värdeA - värdeB;
        }
    });

    rader.forEach(function(rad) {
        tbody.appendChild(rad);
    });

    if (riktning === "högst") {
        rubrik.dataset.riktning = "lägst";
    } else {
        rubrik.dataset.riktning = "högst";
    }
}

function visaKategori(kategori) {
    let sektioner = document.querySelectorAll("main section");

    sektioner.forEach(function(sektion) {
        sektion.style.display = "none";
    });

    document.getElementById(kategori).style.display = "block";
}