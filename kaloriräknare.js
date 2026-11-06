function startaKaloriraknare() {
alert(
    "Detta program ger en ungefärlig beräkning av det totala antalet kalorier din kropp förbränner per dag. " +
    "Observera att resultatet endast är en uppskattning och inte ett exakt värde, eftersom fler faktorer " +
    "påverkar ditt individuella kaloribehov."
);

prompt("Tryck Enter för att starta programmet.");


// Läser in decimaltal
function läsDecimaltal(fråga, variabel, minVärde, maxVärde, enhet) {
    while (true) {
        let svar = prompt(fråga);

        let tal = parseFloat(svar.trim());

        if (isNaN(tal)) {
            alert("Felaktig inmatning, försök igen.");
        } 
        else if (tal < minVärde || tal > maxVärde) {
            alert(
                `${variabel} måste vara mellan ${minVärde}${enhet} och ${maxVärde}${enhet}.`
            );
        } 
        else {
            return tal;
        }
    }
}


// Läser in kön
function läsKön(fråga) {
    while (true) {
        let kön = prompt(fråga).toLowerCase().trim();

        if (kön !== "man" && kön !== "kvinna") {
            alert("Fel kön givet.");
        } 
        else {
            return kön;
        }
    }
}


// Läser in heltal
function läsHeltal(fråga, variabel, minVärde, maxVärde, enhet) {
    while (true) {
        let svar = prompt(fråga);

        let tal = Number(svar.trim());

        if (!Number.isInteger(tal)) {
            alert("Fel inmatning, försök igen.");
            continue;
        }

        if (variabel === "aktivitet" && tal === 0) {
            alert(
                "1 = stillasittande - lite/ingen träning\n" +
                "2 = lätt aktiv - 1-3 dagar/vecka\n" +
                "3 = måttligt aktiv - 4-5 dagar/vecka\n" +
                "4 = mycket aktiv - 6-7 dagar/vecka\n" +
                "5 = extremt aktiv - 2 tunga pass/dag"
            );

            continue;
        }

        if (tal < minVärde || tal > maxVärde) {
            alert(
                `${variabel} måste vara mellan ${minVärde}${enhet} och ${maxVärde}${enhet}`
            );
        } 
        else {
            return tal;
        }
    }
}


// Inmatningar
let kön = läsKön("Ange kön (man/kvinna): ");

let vikt = läsDecimaltal(
    "Ange vikt i kg (morgonvikt): ",
    "Vikt",
    10,
    300,
    " kg"
);

let längd = läsDecimaltal(
    "Ange längd i cm: ",
    "Längd",
    50,
    250,
    " cm"
);

let ålder = läsHeltal(
    "Ange ålder: ",
    "Ålder",
    1,
    120,
    " år"
);

let aktivitet = läsHeltal(
    "Ange aktivitet, ange '0' för att se lista: ",
    "aktivitet",
    1,
    5,
    ""
);


// Beräknar BMR
function beräknaBMR(kön, vikt, längd, ålder) {
    let BMR;

    if (kön === "man") {
        BMR = 10 * vikt + 6.25 * längd - 5 * ålder + 5;
    } 
    else {
        BMR = 10 * vikt + 6.25 * längd - 5 * ålder - 161;
    }

    return BMR;
}


let BMRResultat = beräknaBMR(kön, vikt, längd, ålder);


// Beräknar TDEE
function beräknaTDEE(aktivitet, BMR) {
    let pal;

    if (aktivitet === 1) {
        pal = 1.2;
    } 
    else if (aktivitet === 2) {
        pal = 1.375;
    } 
    else if (aktivitet === 3) {
        pal = 1.55;
    } 
    else if (aktivitet === 4) {
        pal = 1.725;
    } 
    else if (aktivitet === 5) {
        pal = 1.9;
    }

    return pal * BMR;
}


let resultat = beräknaTDEE(aktivitet, BMRResultat);


// Resultat
alert(
    `Dina inmatningar:\n` +
    `Kön: ${kön}\n` +
    `Vikt: ${vikt} kg\n` +
    `Längd: ${längd} cm\n` +
    `Ålder: ${ålder} år\n` +
    `Aktivitet: ${aktivitet} av 5`
);


alert(
    `Beroende på ditt mål rekommenderas följande dagliga kaloriintag:\n` +
    `Gå ner i vikt: ${(resultat - 500).toFixed(0)} kcal\n` +
    `Gå ner kraftigt i vikt: ${(resultat - 1000).toFixed(0)} kcal\n` +
    `Dagligt kaloribehov för att behålla vikt: ${resultat.toFixed(0)} kcal\n` +
    `Gå upp i vikt: ${(resultat + 500).toFixed(0)} kcal\n` +
    `Gå upp kraftigt i vikt: ${(resultat + 1000).toFixed(0)} kcal`
);
}