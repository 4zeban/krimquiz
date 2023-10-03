const fs = require('fs');

function dataToJson(data) {
    // Split the data by line
    const lines = data.split('\n');
    
    // Map through each line
    const json = lines.map(line => {
        // Split the line by tabs (assuming your data is tab-delimited)
        const [
            kategori,
            underkategori,
            handlagda,
            utredda,
            direktavskrivna,
            lagforingsprocent,
            personuppklaringsprocent
        ] = line.split('\t');
        
        // Return an object structure
        return {
            kategori,
            underkategori,
            handlagda: Number(handlagda.replace(/\s+/g, '')),
            properties: {
                utredda: { value: Number(utredda.replace(/\s+/g, '')), visible: true },
                direktavskrivna: { value: Number(direktavskrivna.replace(/\s+/g, '')), visible: true },
                lagforingsprocent: { value: Number(lagforingsprocent.replace(/\s+/g, '')), visible: true },
                personuppklaringsprocent: { value: Number(personuppklaringsprocent.replace(/\s+/g, '')), visible: true }
            }
        };
    });
    
    return json;
}

function writeDataToFile(data, filename) {
    fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully.');
        }
    });
}


const data = `SAMTLIGA BROTT	SAMTLIGA BROTT	1 457 533 	721 040 	736 493 	 29 	 13 
Brott mot brottsbalken	Brott mot brottsbalken, totalt	1 175 373 	463 026 	712 347 	 17 	 6 
BrB 3-7 kap. Brott mot person	Brott mot person, totalt	290 563 	199 849 	90 714 	 14 	 9 
3 kap. Brott mot liv och hälsa	Brott mot liv och hälsa, totalt	90 498 	73 636 	16 862 	 13 	 10 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Fullbordat mord och dråp samt misshandel med dödlig utgång, totalt	 424 	 395 	 29 	 18 	 17 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot kvinna/flicka	 151 	 137 	 14 	 20 	 19 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot kvinna/flicka, med användning av skjutvapen	 24 	 18 	 6 	 28 	 21 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot kvinna/flicka, utan användning av skjutvapen	 127 	 119 	 8 	 19 	 18 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot man/pojke	 262 	 247 	 15 	 17 	 16 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot man/pojke, med användning av skjutvapen	 91 	 87 	 4 	 21 	 20 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot man/pojke, utan användning av skjutvapen	 171 	 160 	 11 	 16 	 15 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Försök till mord eller dråp, totalt	1 026 	 968 	 58 	 29 	 27 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot barn under 18 år	 92 	 88 	 4 	 39 	 37 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot flicka under 18 år	 28 	 26 	 2 	 35 	 32 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot pojke under 18 år	 64 	 62 	 2 	 40 	 39 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre	 160 	 148 	 12 	 26 	 24 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre, närstående genom parrelation	 49 	 49 	- 	 37 	 37 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 16 	 15 	 1 	 33 	 31 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 33 	 30 	 3 	 30 	 27 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre, obekanta	 62 	 54 	 8 	 11 	 10 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre	 767 	 725 	 42 	 28 	 27 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre, närstående genom parrelation	 26 	 24 	 2 	 29 	 27 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre, närstående genom släktskap/familj	 31 	 29 	 2 	 24 	 23 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 217 	 204 	 13 	 43 	 41 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre, obekanta	 493 	 468 	 25 	 22 	 21 
3 kap. 3 § BrB Barnadråp 3 §	Barnadråp, totalt	 1 	 1 	- 	- 	- 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Misshandel, ej med dödlig utgång, totalt	83 655 	68 881 	14 774 	 13 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot barn 0-6 år	3 972 	3 665 	 307 	 5 	 4 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år	1 638 	1 512 	 126 	 5 	 4 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, bekant med offret	1 583 	1 472 	 111 	 5 	 4 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, bekant med offret, utomhus	 97 	 77 	 20 	 8 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, bekant med offret inomhus	1 486 	1 395 	 91 	 4 	 4 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, obekant med offret	 55 	 40 	 15 	 8 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, obekant med offret, utomhus	 33 	 22 	 11 	 14 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, obekant med offret, inomhus	 22 	 18 	 4 	- 	- 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år	2 334 	2 153 	 181 	 5 	 4 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, bekant med offret	2 245 	2 085 	 160 	 5 	 4 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, bekant med offret, utomhus	 145 	 104 	 41 	 10 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, bekant med offret, inomhus	2 100 	1 981 	 119 	 4 	 4 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, obekant med offret	 89 	 68 	 21 	 10 	 8 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, obekant med offret, utomhus	 55 	 40 	 15 	 10 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, obekant med offret, inomhus	 34 	 28 	 6 	 11 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot barn 7-14 år	13 508 	9 138 	4 370 	 10 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år	5 430 	3 979 	1 451 	 8 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, bekant med offret	4 920 	3 658 	1 262 	 8 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, bekant med offret, utomhus	 975 	 416 	 559 	 17 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, bekant med offret, inomhus	3 945 	3 242 	 703 	 7 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, obekant med offret	 510 	 321 	 189 	 12 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, obekant med offret, utomhus	 328 	 196 	 132 	 12 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, obekant med offret, inomhus	 182 	 125 	 57 	 12 	 8 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år	8 078 	5 159 	2 919 	 11 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, bekant med offret	6 541 	4 151 	2 390 	 9 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, bekant med offret, utomhus	1 764 	 738 	1 026 	 14 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, bekant med offret, inomhus	4 777 	3 413 	1 364 	 8 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, obekant med offret	1 537 	1 008 	 529 	 17 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, obekant med offret, utomhus	1 165 	 769 	 396 	 16 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, obekant med offret, inomhus	 372 	 239 	 133 	 20 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot barn 15-17 år	6 839 	5 894 	 945 	 18 	 15 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år	2 645 	2 370 	 275 	 17 	 15 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, bekant med offret	2 114 	1 920 	 194 	 17 	 16 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, bekant med offret, utomhus	 596 	 521 	 75 	 22 	 19 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, bekant med offret, inomhus	1 518 	1 399 	 119 	 15 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, obekant med offret	 531 	 450 	 81 	 17 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, obekant med offret, utomhus	 344 	 287 	 57 	 17 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, obekant med offret, inomhus	 187 	 163 	 24 	 17 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år	4 194 	3 524 	 670 	 18 	 15 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, bekant med offret	2 461 	2 069 	 392 	 19 	 16 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, bekant med offret, utomhus	1 075 	 907 	 168 	 21 	 18 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, bekant med offret, inomhus	1 386 	1 162 	 224 	 17 	 15 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, obekant med offret	1 733 	1 455 	 278 	 16 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, obekant med offret, utomhus	1 330 	1 121 	 209 	 16 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, obekant med offret, inomhus	 403 	 334 	 69 	 16 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre	29 298 	25 731 	3 567 	 15 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, närstående genom parrelation	13 248 	12 682 	 566 	 16 	 16 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	3 161 	2 820 	 341 	 16 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	6 856 	5 833 	1 023 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	1 841 	1 598 	 243 	 13 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	5 015 	4 235 	 780 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, obekant med offret	6 020 	4 383 	1 637 	 13 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, obekant med offret, utomhus	3 106 	2 311 	 795 	 12 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, obekant med offret, inomhus	2 914 	2 072 	 842 	 15 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre	30 038 	24 453 	5 585 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, närstående genom parrelation	2 875 	2 603 	 272 	 8 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, närstående genom släktskap/familj	1 721 	1 478 	 243 	 16 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	8 063 	7 032 	1 031 	 14 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	3 516 	3 131 	 385 	 14 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	4 547 	3 901 	 646 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, obekant med offret	17 374 	13 335 	4 039 	 13 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, obekant med offret, utomhus	11 929 	9 018 	2 911 	 12 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, obekant med offret, inomhus	5 445 	4 317 	1 128 	 15 	 11 
3 kap. 7, 10 § BrB Vållande till annans död	Vållande till annans död, totalt	 309 	 294 	 15 	 16 	 15 
3 kap. 7, 10 § BrB Vållande till annans död	I samband med trafikolycka	 114 	 111 	 3 	 30 	 29 
3 kap. 7, 10 § BrB Vållande till annans död	I samband med arbetsolycka	 44 	 42 	 2 	 10 	 9 
3 kap. 7, 10 § BrB Vållande till annans död	Övriga fall	 151 	 141 	 10 	 6 	 6 
3 kap. 8, 10 § BrB Vållande till kroppskada eller sjukdom (inte i samband med trafikolycka)	Vållande till kroppskada eller sjukdom, inte i samband med trafikolycka, totalt	3 851 	2 449 	1 402 	 5 	 3 
3 kap. 8, 10 § BrB Vållande till kroppskada eller sjukdom (inte i samband med trafikolycka)	I samband med arbetsolycka	2 102 	1 323 	 779 	 0 	 0 
3 kap. 8, 10 § BrB Vållande till kroppskada eller sjukdom (inte i samband med trafikolycka)	Övriga fall	1 749 	1 126 	 623 	 10 	 6 
3 kap. 9, 10 § BrB Framkallande av fara för annan	Framkallande av fara för annan, totalt	1 232 	 648 	 584 	 7 	 3 
3 kap. 9, 10 § BrB Framkallande av fara för annan	Som framkallats för arbetstagare	 136 	 72 	 64 	- 	- 
3 kap. 9, 10 § BrB Framkallande av fara för annan	Övriga fall	1 096 	 576 	 520 	 8 	 4 
4 kap. Brott mot frihet och frid	Brott mot frihet och frid, totalt	162 363 	99 629 	62 734 	 12 	 7 
4 kap. 1 § BrB Människorov 	Människorov, totalt	 492 	 427 	 65 	 16 	 14 
4 kap. 1 a § BrB Människohandel	Människohandel, totalt	 175 	 141 	 34 	 4 	 3 
4 kap. 1 a § BrB Människohandel	För sexuella ändamål 	 77 	 62 	 15 	- 	- 
4 kap. 1 a § BrB Människohandel	För sexuella ändamål, med barn under 18 år	 11 	 9 	 2 	- 	- 
4 kap. 1 a § BrB Människohandel	För sexuella ändamål , med person 18 år eller äldre	 66 	 53 	 13 	- 	- 
4 kap. 1 a § BrB Människohandel	För tvångsarbete	 24 	 21 	 3 	- 	- 
4 kap. 1 a § BrB Människohandel	För tvångsarbete, med barn under 18 år	 3 	 3 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För tvångsarbete, med person 18 år eller äldre	 21 	 18 	 3 	- 	- 
4 kap. 1 a § BrB Människohandel	För tiggeri	 7 	 7 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För tiggeri, med barn under 18 år	 1 	 1 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För tiggeri, med person 18 år eller äldre	 6 	 6 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För organhandel	- 	- 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För organhandel, med barn under 18 år	- 	- 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För organhandel, med person 18 år eller äldre	- 	- 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För krigstjänst	 2 	 1 	 1 	- 	- 
4 kap. 1 a § BrB Människohandel	För krigstjänst, med barn under 18 år	 1 	- 	 1 	- 	- 
4 kap. 1 a § BrB Människohandel	För krigstjänst, med person 18 år eller äldre	 1 	 1 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För övriga ändamål	 65 	 50 	 15 	 10 	 8 
4 kap. 1 a § BrB Människohandel	För övriga ändamål, med barn under 18 år	 23 	 19 	 4 	 21 	 17 
4 kap. 1 a § BrB Människohandel	För övriga ändamål, med person 18 år eller äldre	 42 	 31 	 11 	 3 	 2 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	Människoexploatering, totalt	 54 	 52 	 2 	 2 	 2 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tvångsarbete	 51 	 49 	 2 	 2 	 2 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tvångsarbete, med barn under 18 år	 1 	 1 	- 	- 	- 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tvångsarbete, med person 18 år eller äldre	 50 	 48 	 2 	 2 	 2 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tiggeri	 3 	 3 	- 	- 	- 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tiggeri, med barn under 18 år	 1 	 1 	- 	- 	- 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tiggeri, med person 18 år eller äldre	 2 	 2 	- 	- 	- 
4 kap. 2 § BrB Olaga frihetsberövande	Olaga frihetsberövande, totalt	1 609 	1 319 	 290 	 11 	 9 
4 kap. 2 § BrB Olaga frihetsberövande	Mot barn under 18 år	 390 	 357 	 33 	 7 	 7 
4 kap. 2 § BrB Olaga frihetsberövande	Mot flicka under 18 år	 182 	 168 	 14 	 4 	 4 
4 kap. 2 § BrB Olaga frihetsberövande	Mot pojke under 18 år	 208 	 189 	 19 	 10 	 9 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre	 839 	 656 	 183 	 12 	 9 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre, närstående genom parrelation	 365 	 350 	 15 	 14 	 14 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 66 	 52 	 14 	 8 	 6 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 180 	 141 	 39 	 7 	 6 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre, obekanta	 228 	 113 	 115 	 13 	 7 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre	 380 	 306 	 74 	 12 	 9 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre, närstående genom parrelation	 16 	 14 	 2 	 7 	 6 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre, närstående genom släktskap/familj	 16 	 13 	 3 	 15 	 13 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 112 	 96 	 16 	 10 	 9 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre, obekanta	 236 	 183 	 53 	 13 	 10 
4 kap. 3 § BrB Barnfridsbrott	Barnfridsbrott, totalt	9 003 	8 789 	 214 	 17 	 16 
4 kap. 3 § BrB Barnfridsbrott	Mot flicka under 18 år	4 564 	4 456 	 108 	 18 	 18 
4 kap. 3 § BrB Barnfridsbrott	Mot pojke under 18 år	4 439 	4 333 	 106 	 15 	 15 
4 kap 4 § BrB Olaga tvång	Olaga tvång, totalt	1 142 	 925 	 217 	 12 	 10 
4 kap 4 § BrB Olaga tvång	Mot barn under 18 år	 424 	 329 	 95 	 12 	 9 
4 kap 4 § BrB Olaga tvång	Mot flicka under 18 år	 166 	 136 	 30 	 8 	 7 
4 kap 4 § BrB Olaga tvång	Mot pojke under 18 år	 258 	 193 	 65 	 15 	 11 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre	 347 	 301 	 46 	 9 	 7 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre, närstående genom parrelation	 139 	 127 	 12 	 10 	 9 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 29 	 24 	 5 	 22 	 17 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 82 	 70 	 12 	 9 	 7 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre, obekanta	 96 	 79 	 17 	 1 	 1 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre	 371 	 295 	 76 	 15 	 12 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre, närstående genom parrelation	 19 	 9 	 10 	 11 	 5 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre, närstående genom släktskap/familj	 17 	 12 	 5 	 25 	 18 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 118 	 103 	 15 	 26 	 22 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre, obekanta	 214 	 168 	 46 	 8 	 7 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Grov fridskränkning, totalt	1 098 	1 076 	 22 	 15 	 15 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot barn under 18 år	 840 	 821 	 19 	 11 	 11 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot flicka under 18 år	 470 	 458 	 12 	 11 	 11 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot pojke under 18 år	 370 	 363 	 7 	 11 	 11 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot kvinna 18 år eller äldre	 163 	 162 	 1 	 40 	 40 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot kvinna 18 år eller äldre, närstående genom parrelation	 118 	 118 	- 	 47 	 47 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 45 	 44 	 1 	 23 	 22 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot man 18 år eller äldre	 95 	 93 	 2 	 11 	 11 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot man 18 år eller äldre, närstående genom parrelation	 72 	 70 	 2 	 10 	 10 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot man 18 år eller äldre, närstående genom släktskap/familj	 23 	 23 	- 	 13 	 13 
4 kap 4 a § 2 st. BrB Grov kvinnofridskränkning 	Grov kvinnofridskränkning, totalt	1 262 	1 253 	 9 	 22 	 22 
4 kap 4 b § BrB Olaga förföljelse	Olaga förföljelse, totalt	 499 	 406 	 93 	 37 	 29 
4 kap 4 b § BrB Olaga förföljelse	Mot barn under 18 år	 18 	 14 	 4 	 23 	 17 
4 kap 4 b § BrB Olaga förföljelse	Mot flicka under 18 år	 14 	 11 	 3 	 30 	 21 
4 kap 4 b § BrB Olaga förföljelse	Mot pojke under 18 år	 4 	 3 	 1 	- 	- 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre	 378 	 314 	 64 	 37 	 30 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre, närstående genom parrelation	 147 	 140 	 7 	 44 	 41 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 19 	 18 	 1 	 22 	 21 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 124 	 101 	 23 	 27 	 22 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre, obekanta	 88 	 55 	 33 	 41 	 25 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre	 103 	 78 	 25 	 39 	 29 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre, närstående genom parrelation	 13 	 12 	 1 	 42 	 38 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre, närstående genom släktskap/familj	 11 	 10 	 1 	 40 	 36 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 33 	 28 	 5 	 32 	 27 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre, obekanta	 46 	 28 	 18 	 44 	 26 
4 kap 4 c § 1-2 st. BrB Äktenskapstvång	Äktenskapstvång, vilseledande till äktenskapsresa, totalt	 46 	 44 	 2 	 5 	 4 
4 kap 4 c § 3 st. BrB Barnäktenskapsbrott	Barnäktenskapsbrott 	 70 	 62 	 8 	 3 	 3 
4 kap 4 d § BrB Vilseledande till äktenskapsresa	Vilseledande till äktenskapsresa 	 16 	 14 	 2 	- 	- 
4 kap. 5 § BrB Olaga hot	Olaga hot, totalt	49 329 	39 262 	10 067 	 14 	 10 
4 kap. 5 § BrB Olaga hot	Mot barn under 18 år	7 277 	5 140 	2 137 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot flicka under 18 år	3 026 	2 193 	 833 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot flicka under 18 år, internetrelaterat	 855 	 557 	 298 	 16 	 10 
4 kap. 5 § BrB Olaga hot	Mot flicka under 18 år, ej internetrelaterat	2 170 	1 635 	 535 	 12 	 9 
4 kap. 5 § BrB Olaga hot	Mot pojke under 18 år	4 251 	2 947 	1 304 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot pojke under 18 år, internetrelaterat	 623 	 352 	 271 	 10 	 6 
4 kap. 5 § BrB Olaga hot	Mot pojke under 18 år, ej internetrelaterat	3 628 	2 595 	1 033 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre	19 744 	16 606 	3 138 	 15 	 12 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom parrelation	7 637 	7 192 	 445 	 17 	 15 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom parrelation, internetrelaterat	 867 	 796 	 71 	 17 	 15 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom parrelation, ej internetrelaterat	6 770 	6 396 	 374 	 16 	 15 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom släktskap/familj	2 164 	1 900 	 264 	 18 	 16 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom släktskap/familj, internetrelatera	 218 	 187 	 31 	 18 	 15 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom släktskap/familj, ej internetrelat	1 946 	1 713 	 233 	 18 	 16 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	4 817 	3 919 	 898 	 13 	 10 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, internetrel	 873 	 724 	 149 	 13 	 11 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, ej internet	3 944 	3 195 	 749 	 13 	 10 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, obekanta	5 106 	3 575 	1 531 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, obekanta, internetrelaterat	 999 	 642 	 357 	 9 	 6 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, obekanta, ej internetrelaterat	4 107 	2 933 	1 174 	 14 	 10 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre	19 553 	15 327 	4 226 	 12 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom parrelation	1 111 	 954 	 157 	 11 	 10 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom parrelation, internetrelaterat	 152 	 131 	 21 	 13 	 11 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom parrelation, ej internetrelaterat	 959 	 823 	 136 	 11 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom släktskap/familj	1 486 	1 263 	 223 	 18 	 14 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom släktskap/familj, internetrelaterat	 167 	 136 	 31 	 21 	 16 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom släktskap/familj, ej internetrelater	1 319 	1 127 	 192 	 17 	 14 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	6 940 	5 772 	1 168 	 11 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, internetrelate	 867 	 699 	 168 	 12 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, ej internetrel	6 073 	5 073 	1 000 	 11 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, obekanta	10 005 	7 328 	2 677 	 12 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, obekanta, internetrelaterat	1 517 	1 062 	 455 	 8 	 6 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, obekanta, ej internetrelaterat	8 488 	6 266 	2 222 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot grupp	2 753 	2 187 	 566 	 13 	 10 
4 kap. 5 § BrB Olaga hot	Mot grupp, internetrelaterat	 576 	 437 	 139 	 11 	 8 
4 kap. 5 § BrB Olaga hot	Mot grupp, ej internetrelaterat	2 177 	1 750 	 427 	 13 	 10 
4 kap. 6 § BrB Hemfridsbrott, olaga intrång 	Hemfridsbrott, olaga intrång , totalt	10 224 	6 054 	4 170 	 12 	 6 
4 kap. 6 a § BrB Kränkande fotografering	Kränkande fotografering, totalt	 999 	 831 	 168 	 35 	 28 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Olovlig identitetsanvändning, totalt	20 392 	7 883 	12 509 	 3 	 1 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot barn under 18 år	 432 	 170 	 262 	 3 	 1 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot flicka under 18 år	 276 	 105 	 171 	 3 	 1 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot pojke under 18 år	 156 	 65 	 91 	 3 	 1 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot kvinna 18 år eller äldre	9 332 	3 457 	5 875 	 3 	 1 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot man 18 år eller äldre	10 628 	4 256 	6 372 	 4 	 1 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Olaga integritetsintrång, totalt	1 782 	1 298 	 484 	 8 	 6 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot barn under 18 år	 836 	 544 	 292 	 6 	 4 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot flicka under 18 år	 629 	 433 	 196 	 6 	 4 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot pojke under 18 år	 207 	 111 	 96 	 7 	 4 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre	 689 	 576 	 113 	 13 	 10 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre, närstående genom parrelation	 300 	 271 	 29 	 20 	 17 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 17 	 16 	 1 	 6 	 6 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 178 	 159 	 19 	 7 	 6 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre, obekanta	 194 	 130 	 64 	 5 	 3 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre	 257 	 178 	 79 	 1 	 1 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre, närstående genom parrelation	 40 	 29 	 11 	- 	- 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre, närstående genom släktskap/familj	 4 	 3 	 1 	- 	- 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 44 	 35 	 9 	- 	- 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre, obekanta	 169 	 111 	 58 	 2 	 1 
4 kap. 7 § BrB Ofredande 	Ofredande, totalt	52 694 	24 764 	27 930 	 7 	 3 
4 kap. 7 § BrB Ofredande 	Mot barn under 18 år	5 985 	3 406 	2 579 	 8 	 4 
4 kap. 7 § BrB Ofredande 	Mot flicka under 18 år	3 448 	1 999 	1 449 	 7 	 4 
4 kap. 7 § BrB Ofredande 	Mot pojke under 18 år	2 537 	1 407 	1 130 	 8 	 4 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre	27 978 	13 537 	14 441 	 7 	 3 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre, närstående genom parrelation	6 820 	5 087 	1 733 	 7 	 5 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	1 494 	 870 	 624 	 7 	 3 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	7 045 	3 552 	3 493 	 5 	 2 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre, obekanta	12 610 	4 019 	8 591 	 7 	 2 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre	15 691 	6 565 	9 126 	 8 	 3 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre, närstående genom parrelation	1 237 	 792 	 445 	 7 	 4 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre, närstående genom släktskap/familj	 708 	 380 	 328 	 6 	 3 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	4 025 	2 030 	1 995 	 10 	 4 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre, obekanta	9 718 	3 360 	6 358 	 8 	 3 
4 kap. 7 § BrB Ofredande 	Mot grupp	3 040 	1 256 	1 784 	 4 	 2 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Uppmaning till självmord	 144 	 104 	 40 	 6 	 4 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot barn under 18 år	 50 	 28 	 22 	- 	- 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot flicka under 18 år	 42 	 23 	 19 	- 	- 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot pojke under 18 år	 8 	 5 	 3 	- 	- 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot kvinna 18 år eller äldre	 74 	 59 	 15 	 9 	 7 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot man 18 år eller äldre	 20 	 17 	 3 	 6 	 5 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Oaktsam uppmaning till självmord 	 16 	 13 	 3 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot barn under 18 år	 6 	 5 	 1 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot flicka under 18 år	 4 	 3 	 1 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot pojke under 18 år	 2 	 2 	- 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot kvinna 18 år eller äldre	 8 	 7 	 1 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot man 18 år eller äldre	 2 	 1 	 1 	- 	- 
4 kap. 8-9 a § BrB Olovlig avlyssning m.m. 	Olovlig avlyssning m.m. totalt	1 230 	 357 	 873 	 9 	 2 
4 kap. 9 c § BrB Dataintrång 	Dataintrång, totalt	10 052 	4 521 	5 531 	 31 	 12 
4 kap. 9 c § BrB Dataintrång 	 Genom överbelastningsattack	 95 	 75 	 20 	- 	- 
4 kap. 9 c § BrB Dataintrång 	 Med hjälp av skadlig kod i utpressningssyfte	 245 	 148 	 97 	- 	- 
4 kap. 9 c § BrB Dataintrång 	 Genom olovlig registerslagning	1 843 	1 741 	 102 	 75 	 54 
4 kap. 9 c § BrB Dataintrång 	 I sociala medier eller e-tjänster	4 606 	1 345 	3 261 	 3 	 1 
4 kap. 9 c § BrB Dataintrång 	Övrigt dataintrång	3 111 	1 069 	2 042 	 14 	 5 
5 kap. BrB Ärekränkning	Ärekränkning, totalt	10 008 	2 461 	7 547 	 16 	 2 
5 kap. 1-4 § BrB Ärekränkning	Ärekränkning, totalt	10 008 	2 461 	7 547 	 16 	 2 
5 kap. 1-4 § BrB Ärekränkning	Mot barn under 18 år	1 111 	 320 	 791 	 15 	 3 
5 kap. 1-4 § BrB Ärekränkning	Mot flicka under 18 år	 598 	 173 	 425 	 14 	 3 
5 kap. 1-4 § BrB Ärekränkning	Mot flicka under 18 år, internetrelaterat	 341 	 102 	 239 	 12 	 3 
5 kap. 1-4 § BrB Ärekränkning	Mot flicka under 18 år, ej internetrelaterat	 257 	 71 	 186 	 19 	 4 
5 kap. 1-4 § BrB Ärekränkning	Mot pojke under 18 år	 513 	 147 	 366 	 16 	 3 
5 kap. 1-4 § BrB Ärekränkning	Mot pojke under 18 år, internetrelaterat	 239 	 71 	 168 	 21 	 4 
5 kap. 1-4 § BrB Ärekränkning	Mot pojke under 18 år, ej internetrelaterat	 274 	 76 	 198 	 12 	 2 
5 kap. 1-4 § BrB Ärekränkning	Mot kvinna 18 år eller äldre	4 272 	1 051 	3 221 	 15 	 2 
5 kap. 1-4 § BrB Ärekränkning	Mot kvinna 18 år eller äldre, internetrelaterat	1 757 	 465 	1 292 	 22 	 3 
5 kap. 1-4 § BrB Ärekränkning	Mot kvinna 18 år eller äldre, ej internetrelaterat	2 515 	 586 	1 929 	 9 	 1 
5 kap. 1-4 § BrB Ärekränkning	Mot man 18 år eller äldre	4 625 	1 090 	3 535 	 18 	 2 
5 kap. 1-4 § BrB Ärekränkning	Mot man 18 år eller äldre, internetrelaterat	1 998 	 530 	1 468 	 26 	 4 
5 kap. 1-4 § BrB Ärekränkning	Mot man 18 år eller äldre, ej internetrelaterat	2 627 	 560 	2 067 	 11 	 1 
6 kap. BrB Sexualbrott	Sexualbrott, totalt	26 216 	23 386 	2 830 	 24 	 21 
6 kap. 1, 1 a, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov, oaktsam våldtäkt 	Våldtäkt, våldtäkt mot barn, oaktsam våldtäkt, totalt	9 702 	9 221 	 481 	 22 	 20 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Våldtäkt, totalt	9 436 	8 963 	 473 	 22 	 21 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot barn under 15 år, totalt	2 891 	2 713 	 178 	 43 	 40 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, totalt	2 596 	2 456 	 140 	 44 	 42 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, totalt	2 452 	2 316 	 136 	 45 	 42 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, utomhus	 181 	 161 	 20 	 34 	 30 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, inomhus	2 271 	2 155 	 116 	 46 	 43 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, totalt	 144 	 140 	 4 	 31 	 30 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, utomhus	 29 	 28 	 1 	 21 	 21 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, inomhus	 115 	 112 	 3 	 33 	 32 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, totalt	 295 	 257 	 38 	 28 	 25 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, totalt	 275 	 240 	 35 	 28 	 24 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, utomhus	 29 	 23 	 6 	 43 	 34 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, inomhus	 246 	 217 	 29 	 26 	 23 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, totalt	 20 	 17 	 3 	 35 	 30 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, utomhus	 5 	 5 	- 	 40 	 40 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, inomhus	 15 	 12 	 3 	 33 	 27 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot barn 15–17 år, totalt	1 207 	1 171 	 36 	 13 	 12 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, totalt	1 152 	1 122 	 30 	 13 	 13 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, totalt	1 095 	1 069 	 26 	 13 	 13 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, utomhus	 150 	 147 	 3 	 10 	 10 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, inomhus	 945 	 922 	 23 	 14 	 14 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, totalt	 57 	 53 	 4 	 9 	 9 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, utomhus	 13 	 13 	- 	 8 	 8 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, inomhus	 44 	 40 	 4 	 10 	 9 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, totalt	 55 	 49 	 6 	 2 	 2 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, totalt	 47 	 42 	 5 	 2 	 2 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, utomhus	 6 	 5 	 1 	- 	- 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, inomhus	 41 	 37 	 4 	 3 	 2 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, totalt	 8 	 7 	 1 	- 	- 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, utomhus	- 	- 	- 	- 	- 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, inomhus	 8 	 7 	 1 	- 	- 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, totalt	5 030 	4 817 	 213 	 14 	 13 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom parrelation	1 802 	1 760 	 42 	 13 	 12 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom parrelation	1 725 	1 685 	 40 	 13 	 12 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom parrelation	 77 	 75 	 2 	 13 	 13 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 107 	 98 	 9 	 21 	 19 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 98 	 89 	 9 	 21 	 19 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 9 	 9 	- 	 13 	 11 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	1 848 	1 779 	 69 	 15 	 14 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	1 731 	1 666 	 65 	 14 	 14 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 103 	 98 	 5 	 8 	 8 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	1 628 	1 568 	 60 	 14 	 14 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 117 	 113 	 4 	 20 	 20 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 24 	 23 	 1 	 26 	 25 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 93 	 90 	 3 	 19 	 18 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, totalt	1 254 	1 161 	 93 	 13 	 12 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta	1 087 	1 006 	 81 	 12 	 11 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, utomhus	 288 	 274 	 14 	 10 	 10 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, inomhus	 799 	 732 	 67 	 13 	 12 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, totalt	 167 	 155 	 12 	 17 	 16 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, utomhus	 85 	 80 	 5 	 19 	 18 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, inomhus	 82 	 75 	 7 	 15 	 13 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, totalt	 307 	 261 	 46 	 7 	 6 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom parrelation	 52 	 46 	 6 	 2 	 2 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom parrelation	 51 	 45 	 6 	 2 	 2 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom parrelation	 1 	 1 	- 	- 	- 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom släktskap/familj	 11 	 9 	 2 	- 	- 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom släktskap/familj	 11 	 9 	 2 	- 	- 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom släktskap/familj	- 	- 	- 	- 	- 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 126 	 113 	 13 	 7 	 6 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 116 	 105 	 11 	 6 	 5 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 7 	 7 	- 	- 	- 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 109 	 98 	 11 	 6 	 6 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 10 	 8 	 2 	 25 	 20 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	- 	- 	- 	- 	- 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 10 	 8 	 2 	 25 	 20 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, totalt	 117 	 92 	 25 	 8 	 6 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta	 103 	 83 	 20 	 7 	 6 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, utomhus	 19 	 18 	 1 	 6 	 5 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, inomhus	 84 	 65 	 19 	 8 	 6 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta	 14 	 9 	 5 	 11 	 7 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, utomhus	 3 	 2 	 1 	- 	- 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, inomhus	 11 	 7 	 4 	 14 	 9 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Oaktsam våldtäkt, totalt	 266 	 258 	 8 	 4 	 4 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot flicka 15-17 år	 66 	 64 	 2 	 2 	 2 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot flicka 15-17 år, utomhus	 3 	 3 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot flicka 15-17 år, inomhus	 63 	 61 	 2 	 2 	 2 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot pojke 15-17 år	 6 	 6 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot pojke 15-17 år, utomhus	 1 	 1 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot pojke 15-17 år, inomhus	 5 	 5 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre	 184 	 179 	 5 	 5 	 5 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, närstående genom parrelation	 77 	 77 	- 	 6 	 6 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	- 	- 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 64 	 62 	 2 	 2 	 2 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 5 	 5 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 59 	 57 	 2 	 2 	 2 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, obekanta	 43 	 40 	 3 	 8 	 7 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, obekanta, utomhus	 2 	 1 	 1 	 100 	 50 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, obekanta, inomhus	 41 	 39 	 2 	 5 	 5 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre	 10 	 9 	 1 	 11 	 10 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, närstående genom parrelation	 1 	 1 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre ,närstående genom släktskap/familj	 1 	 1 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 6 	 5 	 1 	 20 	 17 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 1 	 1 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 5 	 4 	 1 	 25 	 20 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, obekanta	 2 	 2 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, obekanta, utomhus	 1 	 1 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, obekanta, inomhus	 1 	 1 	- 	- 	- 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Sexuellt övergrepp, totalt	 365 	 346 	 19 	 22 	 21 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot flicka 15-17 år	 90 	 86 	 4 	 13 	 12 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot pojke 15-17 år	 15 	 14 	 1 	 14 	 13 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre	 235 	 224 	 11 	 27 	 26 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre, närstående genom parrelation	 56 	 54 	 2 	 24 	 23 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 13 	 13 	- 	 31 	 31 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 84 	 82 	 2 	 27 	 26 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre, obekanta	 82 	 75 	 7 	 29 	 26 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre	 25 	 22 	 3 	 14 	 12 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre, närstående genom parrelation	 6 	 6 	- 	- 	- 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre, närstående genom släktskap/familj	- 	- 	- 	- 	- 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 11 	 9 	 2 	 33 	 27 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre, obekanta	 8 	 7 	 1 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Oaktsamt sexuellt övergrepp, totalt	 11 	 11 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot flicka 15-17 år	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot pojke 15-17 år	 1 	 1 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldre	 10 	 10 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldr, närstående genom parrelation	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 5 	 5 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldre, obekanta	 5 	 5 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre, närstående genom parrelation	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre, närstående genom släktskap/familj	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre, obekanta	- 	- 	- 	- 	- 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Sexuellt utnyttjande av barn, totalt	 209 	 199 	 10 	 43 	 40 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Av flicka under 15 år	 174 	 169 	 5 	 50 	 48 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Av pojke under 15 år	 24 	 20 	 4 	- 	- 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Av flicka 15-17 år	 8 	 7 	 1 	 14 	 13 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Av pojke 15-17 år	 3 	 3 	- 	- 	- 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Sexuellt övergrepp mot barn, totalt	 828 	 776 	 52 	 29 	 27 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Mot flicka under 15 år	 592 	 558 	 34 	 25 	 23 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Mot pojke under 15 år	 205 	 191 	 14 	 43 	 38 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Mot flicka 15-17 år	 30 	 26 	 4 	 27 	 23 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Mot pojke 15-17 år	 1 	 1 	- 	- 	- 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Samlag med avkomling eller syskon, totalt	 9 	 9 	- 	 11 	 11 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Med flicka 15-17 år	 3 	 3 	- 	- 	- 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Med pojke 15-17 år	 1 	 1 	- 	- 	- 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Med kvinna 18 år eller äldre	 2 	 2 	- 	 50 	 50 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Med man 18 år eller äldre	 3 	 3 	- 	- 	- 
6 kap. 8 § BrB Utnyttjande av barn under 18 år för sexuell posering, inkl grov 	Utnyttjande av barn under 18 år för sexuell posering, totalt	2 148 	2 034 	 114 	 34 	 31 
6 kap. 9 § BrB Utnyttjande av barn under 18 år genom köp av sexuell handling.	Utnyttjande av barn under 18 år genom köp av sexuell handling.	 129 	 120 	 9 	 19 	 18 
6 kap. 10 § BrB Sexuellt ofredande	Sexuellt ofredande, totalt	10 945 	8 900 	2 045 	 20 	 16 
6 kap. 10 § BrB Sexuellt ofredande	Exhibitionism. Totalt	 176 	 156 	 20 	 47 	 40 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, totalt	10 769 	8 744 	2 025 	 19 	 15 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot barn under 15 år	3 198 	2 597 	 601 	 15 	 12 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot flicka under 15 år	2 689 	2 227 	 462 	 15 	 12 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, pojke under 15 år	 507 	 368 	 139 	 13 	 9 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot barn 15-17 år	1 400 	1 222 	 178 	 22 	 19 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot flicka 15-17 år	1 279 	1 120 	 159 	 22 	 19 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot pojke 15-17 år	 121 	 102 	 19 	 16 	 13 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot person 18 år eller äldre	6 171 	4 925 	1 246 	 22 	 17 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot kvinna 18 år eller äldre	5 651 	4 540 	1 111 	 22 	 17 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot kvinna 18 år eller äldre, närstående genom parrela	 341 	 323 	 18 	 14 	 13 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot kvinna 18 år eller äldre, närstående genom släktsk	 96 	 81 	 15 	 21 	 18 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande,  mot kvinna 18 år eller äldrea, annan sorts relation e	1 695 	1 524 	 171 	 26 	 22 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande,  mot kvinna 18 år eller äldre, obekanta	3 481 	2 574 	 907 	 21 	 15 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre	 520 	 385 	 135 	 16 	 11 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre, närstående genom parrelatio	 16 	 13 	 3 	 8 	 6 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre, närstående genom släktskap/	 16 	 16 	- 	 6 	 6 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre, annan sorts relation eller 	 166 	 138 	 28 	 11 	 8 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre, obekanta	 322 	 218 	 104 	 21 	 13 
6 kap. 10 a § BrB Kontakt för att träffa ett barn i sexuellt syfte	Kontakt för att träffa ett barn i sexuellt syfte, totalt	 223 	 195 	 28 	 6 	 5 
6 kap. 10 a § BrB Kontakt för att träffa ett barn i sexuellt syfte	Med flicka under 15 år	 189 	 169 	 20 	 5 	 5 
6 kap. 10 a § BrB Kontakt för att träffa ett barn i sexuellt syfte	Med pojke under 15 år	 34 	 26 	 8 	 8 	 6 
6 kap. 11 § BrB Köp av sexuell tjänst	Köp av sexuell tjänst, totalt	1 446 	1 389 	 57 	 56 	 52 
6 kap. 12 § BrB Koppleri, grovt koppleri	Koppleri, totalt	 200 	 185 	 15 	 19 	 18 
7 kap. Brott mot familj	Brott mot familj, totalt	1 478 	 737 	 741 	 5 	 2 
7 kap. 4 § BrB Egenmäktighet med barn	Egenmäktighet med barn	1 466 	 728 	 738 	 5 	 2 
7 kap. 1-3 § BrB Övriga brott mot familj	Övriga brott	 12 	 9 	 3 	- 	- 
8-12 kap. Brott mot förmögenhet	Brott mot förmögenhet, totalt	826 986 	222 606 	604 380 	 19 	 4 
8 kap. Stöld, rån m.m.	Stöld, rån m.m. totalt	394 266 	100 836 	293 430 	 23 	 5 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Tillgrepp av motordrivet fortskaffningsmedel, totalt	17 343 	6 131 	11 212 	 10 	 3 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av bil	8 264 	3 413 	4 851 	 14 	 5 
8 kap. 7 § BrB Försök till tillgrepp av motordrivet fortskaffningsmedel	Av bil	1 005 	 274 	 731 	 22 	 5 
8 kap. 7 § BrB Fullbordat tillgrepp av motordrivet fortskaffningsmedel	Av bil, totalt	7 259 	3 139 	4 120 	 13 	 5 
8 kap. 7 § BrB Fullbordat tillgrepp av motordrivet fortskaffningsmedel	Av bil avsedd för yrkesmässig godsbefordran (Lastbil, släpfordon, järnvägsvagn e	1 028 	 303 	 725 	 10 	 3 
8 kap. 7 § BrB Fullbordat tillgrepp av motordrivet fortskaffningsmedel	Av övriga bilar	6 231 	2 836 	3 395 	 13 	 5 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av motorcykel	1 915 	 585 	1 330 	 5 	 1 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av  moped	4 503 	1 382 	3 121 	 4 	 1 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av båt	 751 	 256 	 495 	 4 	 1 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av annat fordon	1 910 	 495 	1 415 	 8 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Tillgrepp av icke motordrivet fortskaffningsmedel, totalt	69 884 	5 446 	64 438 	 5 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av cykel	62 834 	4 716 	58 118 	 5 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av elcykel	14 801 	1 633 	13 168 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av annan cykel än elcykel	47 993 	3 043 	44 950 	 5 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av båt	 414 	 57 	 357 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av annat icke motordrivet fordon	6 636 	 673 	5 963 	 4 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld, inte av skjutvapen, totalt	69 353 	18 756 	50 597 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i skola, kyrka, idrottsanläggning och lokal för kultur, totalt	3 752 	1 007 	2 745 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i skola, bibliotek, fritidshem, m.m.	2 328 	 671 	1 657 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld idrottsanläggning, kyrka, museum m.m.	1 424 	 336 	1 088 	 10 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i hotell, kafé, restaurang, biograf, teater, nöjes-, samlings- och	2 562 	 869 	1 693 	 15 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i butik, apotek, kiosk m.m.,totalt	2 324 	1 469 	 855 	 19 	 11 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i butik, varuhus o.d.	1 988 	1 292 	 696 	 20 	 12 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i kiosk, automat och skyltskåp	 172 	 56 	 116 	 16 	 5 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i apotek och läkemedelsförråd	 164 	 121 	 43 	 5 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i industri, verkstad, byggplats, lager, garage, hamnområde, kontor	14 631 	3 972 	10 659 	 8 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i kontor	1 947 	 820 	1 127 	 8 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i industri, verkstad, byggplats, lager, garage, hamnområde, ej i k	12 684 	3 152 	9 532 	 8 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i bostad, fritidshus m.m., totalt	34 351 	8 685 	25 666 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i bostad (lägenhet, villa)	10 960 	6 446 	4 514 	 6 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i villa, radhus o.d., totalt	5 840 	3 812 	2 028 	 6 	 4 
8 kap. 1, 2, 4 § BrB Fullbordad stöld inkl. grov	Inbrottsstöld i villa, radhus o.d.	4 321 	3 213 	1 108 	 6 	 4 
8 kap. 1, 2, 4 § BrB Försök till stöld inkl. grov	Inbrottsstöld i villa, radhus o.d.	1 519 	 599 	 920 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i lägenhet, totalt	5 120 	2 634 	2 486 	 5 	 3 
8 kap. 1, 2, 4 § BrB Fullbordad stöld inkl. grov	Inbrottsstöld i lägenhet	3 551 	2 127 	1 424 	 5 	 3 
8 kap. 1, 2, 4 § BrB Försök till stöld inkl. grov	Inbrottsstöld i lägenhet	1 569 	 507 	1 062 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i källare och på vind	20 415 	1 622 	18 793 	 7 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i fritidshus	2 976 	 617 	2 359 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i övriga platser	11 733 	2 754 	8 979 	 10 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen	 105 	 69 	 36 	 12 	 8 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen från militär	 2 	 2 	- 	- 	- 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen från skytteo	 3 	 2 	 1 	- 	- 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen från bostad 	 52 	 41 	 11 	 15 	 12 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen från övriga 	 48 	 24 	 24 	 9 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld, totalt	212 810 	59 886 	152 924 	 34 	 8 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Från fordon m.m.	60 658 	6 509 	54 149 	 8 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Ur och från motordrivet fordon, totalt	50 500 	5 224 	45 276 	 8 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Ur och från motordrivet fordon, av fast interiör/exteriör	26 659 	2 286 	24 373 	 8 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Ur och från motordrivet fordon, av andra föremål än fast interiör/exteriör	23 835 	2 932 	20 903 	 7 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Från cykel	3 848 	 367 	3 481 	 10 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Från båt (annat än båtmotor)	1 946 	 218 	1 728 	 5 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av båtmotor	1 260 	 286 	 974 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Under yrkesmässig transport, totalt	3 104 	 414 	2 690 	 9 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Under yrkesmässig transport, avsedd för yrkesmässig godsbefordran (lastbil, släp	1 054 	 280 	 774 	 11 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Under yrkesmässig transport, avsedd för övrig yrkesmässig transport	2 050 	 134 	1 916 	 5 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av drivmedel, totalt	9 764 	2 506 	7 258 	 11 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av diesel	5 039 	 906 	4 133 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av diesel ur större fordonstank (även entreprenadmaskin m.m.)	4 631 	 783 	3 848 	 9 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av diesel ur större tankar (ej kopplade till fordon)	 408 	 123 	 285 	 14 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld av drivmedel (även diesel), totalt	4 725 	1 600 	3 125 	 12 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld av drivmedel genom smitning (från bensinstation)	1 423 	1 102 	 321 	 7 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld av drivmedel, ej genom smitning	3 302 	 498 	2 804 	 23 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I skola, kyrka, idrottsanläggning och lokal för kultur, totalt	9 749 	1 031 	8 718 	 9 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I skola, bibliotek, fritidshem m.m.	5 188 	 435 	4 753 	 9 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I idrottsanläggning, kyrka, museum m.m.	4 561 	 596 	3 965 	 10 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I hotell, kafé, restaurang, biograf, teater, nöjes-, samlings- och ungdomslokal 	7 599 	1 337 	6 262 	 11 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I butik, varuhus o.d.	43 216 	31 614 	11 602 	 60 	 34 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I industri, verkstad, byggplats, lager, hamnområde, kontor m.m., totalt	3 574 	1 017 	2 557 	 16 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I kontor	1 167 	 397 	 770 	 17 	 5 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I industri, verkstad, byggplats, lager, hamnområde, ej i kontor	2 407 	 620 	1 787 	 15 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I bostad m.m.	12 201 	4 057 	8 144 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I bostad (lägenhet, villa), totalt	10 835 	3 923 	6 912 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I bostad mot äldre eller funktionsnedsatt	4 708 	1 843 	2 865 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I bostad mot ej äldre eller funktionsnedsatt	6 127 	2 080 	4 047 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I källare och på vind	1 366 	 134 	1 232 	 8 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Väskryckning (inte rån), totalt	 791 	 289 	 502 	 9 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Väskryckning mot äldre eller funktionsnedsatt	 150 	 75 	 75 	 13 	 6 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Väskryckning mot ej äldre eller funktionsnedsatt	 641 	 214 	 427 	 8 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Fickstöld, totalt	22 812 	3 567 	19 245 	 7 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Fickstöld mot äldre eller funktionsnedsatt	2 266 	 795 	1 471 	 8 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Fickstöld mot ej äldre eller funktionsnedsatt	20 546 	2 772 	17 774 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld	42 446 	7 959 	34 487 	 13 	 2 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån, totalt	6 433 	5 191 	1 242 	 15 	 12 
8 kap. 5, 6 § BrB Rån inkl. grovt	Bankrån, totalt	 2 	 2 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Bankrån med användning av skjutvapen	 2 	 2 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Bankrån utan användning av skjutvapen	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Butiksrån, totalt	 362 	 354 	 8 	 35 	 34 
8 kap. 5, 6 § BrB Rån inkl. grovt	Butiksrån med användning av skjutvapen	 54 	 52 	 2 	 31 	 30 
8 kap. 5, 6 § BrB Rån inkl. grovt	Butiksrån utan användning av skjutvapen	 308 	 302 	 6 	 36 	 34 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdebefordran, totalt	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdebefordran med användning av skjutvapen	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdebefordran utan användning av skjutvapen	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdetransport, totalt	 2 	 2 	- 	 50 	 50 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdetransport med användning av skjutvapen	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdetransport utan användning av skjutvapen	 2 	 2 	- 	 50 	 50 
8 kap. 5, 6 § BrB Rån inkl. grovt	Taxirån, totalt	 19 	 18 	 1 	 28 	 26 
8 kap. 5, 6 § BrB Rån inkl. grovt	Taxirån med användning av skjutvapen	 5 	 5 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Taxirån utan användning av skjutvapen	 14 	 13 	 1 	 38 	 36 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson (äldre eller funktionsnedsatt), totalt	 482 	 398 	 84 	 12 	 10 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson (äldre eller funktionsnedsatt) med användning av skjutvapen	 73 	 69 	 4 	 19 	 18 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson (fäldre eller unktionsnedsatt) utan användning av skjutvape	 409 	 329 	 80 	 11 	 9 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson (ej äldre eller funktionsnedsatt), totalt	4 962 	3 951 	1 011 	 13 	 10 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år, totalt	1 349 	1 164 	 185 	 19 	 17 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år utomhus, totalt	1 207 	1 038 	 169 	 18 	 16 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år utomhus med användning av skjutvapen	 75 	 69 	 6 	 25 	 23 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år utomhus utan användning av skjutvapen	1 132 	 969 	 163 	 18 	 15 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år inomhus, totalt	 142 	 126 	 16 	 29 	 25 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år inomhus med användning av skjutvapen	 12 	 12 	- 	 42 	 42 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år inomhus utan användning av skjutvapen	 130 	 114 	 16 	 27 	 24 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre, totalt	3 612 	2 786 	 826 	 10 	 8 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre utomhus, totalt	2 934 	2 173 	 761 	 8 	 6 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre utomhus med användning av skjutvapen	 311 	 253 	 58 	 15 	 13 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre utomhus utan användning av skjutvapen	2 623 	1 920 	 703 	 8 	 6 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre inomhus, totalt	 678 	 613 	 65 	 17 	 15 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre inomhus med användning av skjutvapen	 116 	 106 	 10 	 18 	 16 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre inomhus utan användning av skjutvapen	 562 	 507 	 55 	 17 	 15 
8 kap. 5, 6 § BrB Rån inkl. grovt	Övriga rån, totalt	 604 	 466 	 138 	 19 	 14 
8 kap. 5, 6 § BrB Rån inkl. grovt	Övriga rån med användning av skjutvapen	 116 	 91 	 25 	 18 	 14 
8 kap. 5, 6 § BrB Rån inkl. grovt	Övriga rån utan användning av skjutvapen	 488 	 375 	 113 	 19 	 15 
8 kap. 8-10 § BrB Övriga brott mot 8 kap. 	Övriga brott mot 8 kap.	18 338 	5 357 	12 981 	 6 	 1 
9 kap. BrB Bedrägeri och annan oredlighet	Bedrägeri och annan oredlighet, totalt	198 829 	84 604 	114 225 	 12 	 4 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Bedrägeri, bedrägligt beteende, totalt	183 422 	72 316 	111 106 	 11 	 3 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Genom social manipulation, totalt	32 450 	13 610 	18 840 	 4 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Romansbedrägeri, totalt	1 151 	 817 	 334 	 3 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Romansbedrägeri mot äldre eller funktionsnedsatt	 408 	 293 	 115 	 3 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Romansbedrägeri ej mot äldre eller funktionsnedsatt	 743 	 524 	 219 	 3 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Investeringsbedrägeri, totalt	2 311 	1 473 	 838 	 6 	 4 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Investeringsbedrägeri mot äldre/funktionsnedsatt	 655 	 410 	 245 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Investeringsbedrägeri ej mot äldre/funktionsnedsatt	1 656 	1 063 	 593 	 8 	 5 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Befogenhetsbedrägeri, totalt	10 070 	3 215 	6 855 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Befogenhetsbedrägeri mot äldre/funktionsnedsatt	7 526 	2 332 	5 194 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Befogenhetsbedrägeri ej mot äldre/funktionsnedsatt	2 544 	 883 	1 661 	 2 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Genom social manipulation av  annan typ, totalt	18 918 	8 105 	10 813 	 6 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Genom social manipulation av  annan typ mot äldre/funktionsnedsatt	11 263 	4 733 	6 530 	 5 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Genom social manipulation av  annan typ ej mot äldre/funktionsnedsatt	7 655 	3 372 	4 283 	 6 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Identitetsbedrägeri, totalt	15 955 	6 751 	9 204 	 6 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Identitetsbedrägeri mot äldre/funktionsnedsatt	2 460 	1 016 	1 444 	 8 	 3 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Identitetsbedrägeri ej mot äldre/funktionsnedsatt	13 495 	5 735 	7 760 	 5 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Fakturabedrägeri, totalt	7 834 	2 711 	5 123 	 2 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Fakturabedrägeri mot äldre/funktionsnedsatt	1 972 	 689 	1 283 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Fakturabedrägeri ej mot äldre/funktionsnedsatt	5 862 	2 022 	3 840 	 2 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri (bank, betal- och kreditkort), totalt	72 091 	14 887 	57 204 	 8 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri med fysiskt kort, totalt	14 171 	8 808 	5 363 	 12 	 6 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri med fysiskt kort mot äldre/funktionsnedsatt	2 798 	2 307 	 491 	 19 	 14 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri med fysiskt kort ej mot äldre/funktionsnedsatt	11 373 	6 501 	4 872 	 9 	 5 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri utan fysiskt kort, totalt	57 920 	6 079 	51 841 	 3 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Annonsbedrägeri, totalt	25 525 	18 850 	6 675 	 25 	 8 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Annonsbedrägeri mot äldre/funktionsnedsatt	1 147 	 595 	 552 	 24 	 7 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Annonsbedrägeri, ej mot äldre/funktionsnedsatt	24 378 	18 255 	6 123 	 25 	 8 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Försäkringsbedrägeri	 661 	 625 	 36 	 33 	 22 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Snyltningsbrott	1 092 	 781 	 311 	 5 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Grovt fordringsbedrägeri	 16 	 11 	 5 	- 	- 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Övrigt bedrägeri, totalt	26 822 	13 130 	13 692 	 17 	 7 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Övrigt bedrägeri mot äldre/funktionsnedsatt	6 270 	2 453 	3 817 	 13 	 5 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Övrigt bedrägeri ej mot äldre/funktionsnedsatt	20 552 	10 677 	9 875 	 18 	 7 
9 kap. 3 a § BrB Subventionsmissbruk 	Subventionsmissbruk, totalt	 1 	 1 	- 	- 	- 
9 kap. 3 c § BrB Olovlig befattning med betalningsverktyg	Olovlig befattning med betalningsverktyg, totalt	 77 	 60 	 17 	 4 	 3 
9 kap. 4 § BrB Utpressning 	Utpressning, totalt	7 174 	4 919 	2 255 	 14 	 9 
9 kap. 5 § BrB Ocker 	Ocker, totalt	 138 	 121 	 17 	 4 	 4 
9 kap. 6, 7 § BrB Häleri, häleriförseelse 	Häleri, häleriförseelse, totalt	6 951 	6 734 	 217 	 24 	 18 
9 kap. 6 § BrB Häleri, häleriförseelse, inkl. grovt	Häleri	2 289 	2 229 	 60 	 26 	 21 
9 kap. 7 § BrB Häleri, häleriförseelse 	Häleriförseelse	4 662 	4 505 	 157 	 23 	 17 
9 kap. 8-10 § Oredligt förfarande, svindleri, ockerpantning 	Oredligt förfarande, svindleri, ockerpantning, totalt	1 066 	 453 	 613 	 38 	 15 
10 kap. BrB Förskingring och annan trolöshet	Förskingring och annan trolöshet, totalt	14 364 	8 504 	5 860 	 14 	 7 
10 kap. 1-3 § BrB Förskingring, grov förskingring, undandräkt	Förskingring, undandräkt, totalt	1 076 	 943 	 133 	 14 	 10 
10 kap. 3 § BrB Olovligt förfogande	Olovligt förfogande, totalt	9 659 	4 599 	5 060 	 2 	 1 
10 kap. 5 § BrB Trolöshet mot huvudman 	Trolöshet mot huvudman, totalt	1 443 	1 221 	 222 	 52 	 42 
10 kap. 5 a, 5 c § BrB Tagande av muta inkl. grov 	Tagande av muta	 381 	 336 	 45 	 13 	 7 
10 kap. 5 b, 5 c § BrB Givande av muta inkl. grov	Givande av muta	 153 	 109 	 44 	 42 	 29 
10 kap. 5 d, 5 e § BrB Handel med inflytande och/eller vårdslös finansiering av mutbrott 	Handel med inflytande och/eller vårdslös finansiering av mutbrott 	 3 	 1 	 2 	- 	- 
10 kap. 7 § BrB Olovligt brukande 	Olovligt brukande, totalt	1 401 	1 118 	 283 	 16 	 9 
10 kap. 8 § BrB Fyndförseelse	Fyndförseelse, totalt	 179 	 114 	 65 	 15 	 6 
10 kap. 6 § BrB Behörighetsmissbruk	Behörighetsmissbruk, totalt	 69 	 63 	 6 	 2 	 1 
11 kap. BrB Brott mot borgenärer m.m.	Brott mot borgenärer m.m., totalt	7 816 	7 600 	 216 	 45 	 34 
11 kap. 1, 2  § BrB 	Oredlighet mot borgenärer	 173 	 163 	 10 	 16 	 12 
11 kap. 2 § BrB 	Försvårande av konkurs eller exekutiv förrättning 	 10 	 9 	 1 	 38 	 30 
11 kap. 3  § BrB 	Vårdslöshet mot borgenärer	 9 	 6 	 3 	 33 	 11 
11 kap. 4 § BrB 	Otillbörligt gynnande av borgenär	 31 	 30 	 1 	 21 	 19 
11 kap. 5 § BrB 	Bokföringsbrott 	7 593 	7 392 	 201 	 46 	 34 
12 kap. BrB Skadegörelsebrott	Skadegörelsebrott, totalt	211 711 	21 062 	190 649 	 16 	 1 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Skadegörelse, åverkan, totalt	211 665 	21 034 	190 631 	 16 	 1 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Genom brand (även på motorfordon), totalt	5 215 	1 609 	3 606 	 5 	 2 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Bilbrand eller brand på andra motorfordon	2 106 	 729 	1 377 	 4 	 1 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Brand på annat än motorfordon	3 109 	 880 	2 229 	 7 	 2 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	På motorfordon (inte genom brand)	30 677 	4 186 	26 491 	 17 	 2 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Klotter mot kollektivtrafik	36 984 	 860 	36 124 	 15 	 0 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Övrigt klotter, ej mot kollektivtrafik	55 446 	1 451 	53 995 	 20 	 0 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Mot stat, kommun, landsting (ej klotter)	42 916 	1 656 	41 260 	 16 	 1 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Annan skadegörelse (ej klotter)	40 427 	11 272 	29 155 	 17 	 4 
12 kap. 4 § BrB Tagande av olovlig väg	Tagande av olovlig väg 	 46 	 28 	 18 	- 	- 
13-15 kap. BrB Brott mot allmänheten	Brott mot allmänheten, totalt	17 605 	13 824 	3 781 	 17 	 12 
13 kap. BrB Allmänfarliga brott	Allmänfarliga brott, totalt	4 816 	3 445 	1 371 	 13 	 9 
13 kap 1, 2 § BrB Mordbrand inkl. grov	Mordbrand	1 222 	1 048 	 174 	 15 	 13 
13 kap 3 § BrB Allmänfarlig ödeläggelse	Allmänfarlig ödeläggelse, totalt	 221 	 196 	 25 	 15 	 14 
13 kap 3 § BrB Allmänfarlig ödeläggelse	Genom sprängning	 191 	 176 	 15 	 17 	 16 
14 kap 3 § BrB Allmänfarlig ödeläggelse	Genom sprängning, fullbordat brott	 80 	 72 	 8 	 21 	 19 
15 kap 3 § BrB Allmänfarlig ödeläggelse	Genom sprängning, försök med mera till brott	 100 	 93 	 7 	 15 	 14 
13 kap 3 § BrB Allmänfarlig ödeläggelse	Ej genom sprängning	 30 	 20 	 10 	- 	- 
13 kap 5 c § BrB Sabotage mot blåljusverksamhet inkl. grovt 	Sabotage mot blåljusverksamhet, totalt	 495 	 402 	 93 	 29 	 23 
13 kap. 6 § BrB Allmänfarlig vårdslöshet	Allmänfarlig vårdslöshet, totalt	2 474 	1 642 	 832 	 7 	 5 
13 kap. 6 § BrB Allmänfarlig vårdslöshet	Vållande av brand	2 121 	1 419 	 702 	 8 	 5 
13 kap. 6 § BrB Allmänfarlig vårdslöshet	Annan allmänfarlig vårdslöshet	 353 	 223 	 130 	 5 	 3 
13 kap. 7-9 § BrB Spridande av gift eller smitta förgöring, vårdslöshet med gift eller smittämne 	Spridande av gift eller smitta förgöring, vårdslöshet med gift eller smittämne, 	 120 	 41 	 79 	- 	- 
13 kap. 3-5 b, 10 Övriga brott mot 13 kap.	Övriga brott mot 13 kap.	 282 	 114 	 168 	 18 	 7 
14 kap. BrB Förfalskningsbrott	Förfalskningsbrott, totalt	8 145 	7 081 	1 064 	 17 	 14 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Urkundsförfalskning m.m., totalt	4 737 	4 035 	 702 	 27 	 21 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Check	 6 	 5 	 1 	- 	- 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Legitimationshandling	1 014 	 987 	 27 	 46 	 43 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Handling som  använts för illegal invandring (pass, resedokument, uppehållstills	 328 	 324 	 4 	 36 	 35 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Övrig legitimationshandling	 686 	 663 	 23 	 51 	 46 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Övrig urkundsförfalskning	3 717 	3 043 	 674 	 21 	 15 
14 kap. 5, 10 § BrB Signaturförfalskning	Signaturförfalskning, totalt	 37 	 24 	 13 	- 	- 
14 kap. 6, 7, 10, 11 § BrB Penningförfalskning m.m. 	Penningförfalskning m.m., totalt	2 240 	2 156 	 84 	 2 	 2 
14 kap. 8-11 § BrB Övriga brott	Övriga brott mot 14 kap.	1 131 	 866 	 265 	 11 	 6 
15 kap. Mened, falskt åtal m.m.	15 kap. Mened, falskt åtal m.m. totalt	4 644 	3 298 	1 346 	 20 	 13 
15 kap. 1-3 § BrB Mened, osann partsutsaga m.m.	Mened, osann partsutsaga m.m., totalt	 279 	 200 	 79 	 23 	 16 
15 kap. 7 § BrB Falsk tillvitelse, vårdslös tillvitelse	Falsk tillvitelse, vårdslös tillvitelse, totalt	2 364 	1 424 	 940 	 8 	 5 
15 kap. 11, 12 § BrB Osant intygande, brukande av osann urkund	Missbruk av urkund avs. pass och övr. resedokument samt utfärdat pass på falska 	 740 	 704 	 36 	 39 	 34 
15 kap. 4 a, 4 b, 5, 6, 8-13 § BrB Övriga brott	Övriga brott mot 15 kap.	1 261 	 970 	 291 	 24 	 17 
16-20 kap. BrB Brott mot staten	Brott mot staten, totalt	40 184 	26 719 	13 465 	 33 	 20 
16 kap. BrB Brott mot allmän ordning	Brott mot allmän ordning, totalt	6 859 	5 106 	1 753 	 27 	 19 
16 kap. 15 § 1, 2 st. BrB Falskt larm	Falskt larm, totalt	 763 	 575 	 188 	 24 	 14 
16 kap. 15 § 3 st. BrB Missbruk av larmanordning	Missbruk av larmanordning, totalt	 204 	 76 	 128 	 17 	 6 
16 kap. 8 § BrB Hets mot folkgrupp	Hets mot folkgrupp, totalt	1 000 	 402 	 598 	 18 	 7 
16 kap. 9 § BrB Olaga diskriminering	Olaga diskriminering, totalt	 90 	 38 	 52 	- 	- 
16 kap. 10 a § BrB Barnpornografibrott 	Barnpornografibrott, totalt	2 816 	2 703 	 113 	 33 	 31 
16 kap. 10 a § BrB Barnpornografibrott 	Internetrelaterat barnpornografibrott	2 144 	2 069 	 75 	 28 	 27 
16 kap. 10 a § BrB Barnpornografibrott 	Övriga barnpornografibrott	 672 	 634 	 38 	 47 	 43 
16 kap. 13 § BrB Djurplågeri 	Djurplågeri, totalt	1 484 	 977 	 507 	 21 	 13 
16 kap. 1-6, 10-14 § BrB Övriga brott 	Övriga brott mot 16 kap. 	 502 	 335 	 167 	 25 	 13 
17 kap. BrB Brott mot allmän verksamhet	Brott mot allmän verksamhet, totalt	24 803 	19 659 	5 144 	 38 	 26 
17 kap. 1, 5 § BrB Våld mot tjänsteman o.d.	Våld mot tjänsteman, totalt	3 706 	3 510 	 196 	 45 	 38 
17 kap. 1 § BrB Våld mot tjänsteman	Mot polis	1 285 	1 214 	 71 	 61 	 54 
17 kap. 1 § BrB Våld mot tjänsteman	Mot ordningsvakt 	1 124 	1 090 	 34 	 38 	 35 
17 kap. 1, 5 § BrB Våld mot tjänsteman o.d.	Mot annan person	1 297 	1 206 	 91 	 33 	 26 
17 kap. 1, 5 § BrB Hot m.m. mot tjänsteman o.d.	Hot m.m. mot tjänsteman o.d.	6 150 	5 706 	 444 	 42 	 34 
17 kap. 4, 5 § BrB Våldsamt motstånd	Våldsamt motstånd, totalt	4 852 	4 719 	 133 	 66 	 45 
17 kap. 10 § BrB Övergrepp i rättssak	Övergrepp i rättssak, totalt	4 767 	4 380 	 387 	 16 	 15 
17 kap. BrB 8, 9, 11-13, 15 § Övriga brott	Övriga brott mot 17 kap.	5 328 	1 344 	3 984 	 8 	 2 
18 kap. BrB Högmålsbrott	Högmålsbrott, totalt	 7 	 6 	 1 	 17 	 14 
19 kap. BrB Brott mot rikets säkerhet	Brott mot rikets säkerhet, totalt	 13 	 9 	 4 	 56 	 38 
20 kap. BrB Tjänstefel m.m.	Tjänstefel m.m. totalt	8 502 	1 939 	6 563 	 3 	 1 
20 kap. 1 § BrB Tjänstefel inkl.grovt 	Tjänstefel	8 172 	1 724 	6 448 	 2 	 0 
20 kap. 3 § BrB Brott mot tystnadsplikt	Brott mot tystnadsplikt	 330 	 215 	 115 	 13 	 8 
22 kap. BrB Om landsförräderi m.m.	Om landsförräderi m.m. totalt	 35 	 28 	 7 	 7 	 6 
Brott mot specialstraffrättsliga författningar	Brott mot specialstraffrättsliga författningar, totalt	282 160 	258 014 	24 146 	 49 	 39 
Lag (1951:649) om straff för vissa trafikbrott	Trafikbrottslagen, totalt	70 594 	54 155 	16 439 	 65 	 46 
1 § 2 st. TBL Grov vårdslöshet i trafik 	Grov vårdslöshet i trafik, totalt	 882 	 838 	 44 	 59 	 53 
3 § 1 st. TBL Olovlig  körning, grov olovlig körning 	Olovlig  körning, totalt	23 207 	22 752 	 455 	 84 	 74 
4, 4 a § TBL Rattfylleri, grovt rattfylleri	Rattfylleri, totalt	10 279 	10 205 	 74 	 77 	 76 
4 § 2 st. TBL Rattfylleri under påverkan av narkotika	Rattfylleri under påverkan av narkotika, totalt	13 227 	13 149 	 78 	 53 	 48 
5 § TBL Smitning, trafikolycka	Smitning, trafikolycka, totalt	21 683 	5 932 	15 751 	 9 	 2 
5 § TBL Smitning, trafikolycka	Med betydande materialskador, personskador eller dödligt utfall	1 567 	 654 	 913 	 15 	 6 
5 § TBL Smitning, trafikolycka	Med inga eller lindriga material- och personskador	20 109 	5 271 	14 838 	 9 	 2 
3 § 2 och 3 st. TBL Övriga brott 	Övriga brott mot trafikbrottslagen	1 316 	1 279 	 37 	 43 	 38 
Narkotikastrafflag (1968:64)	Narkotikastrafflagen, totalt	115 280 	114 079 	1 201 	 47 	 41 
1-3 a § NSL Narkotikabrott inkl. grovt, vårdslöshet med narkotika	Överlåtelse m.m. 	8 094 	7 779 	 315 	 26 	 24 
1-3 § NSL Narkotikabrott inkl. grovt	Innehav 	58 254 	57 784 	 470 	 47 	 40 
1-3 § NSL Narkotikabrott inkl. grovt	Eget bruk	48 435 	48 025 	 410 	 51 	 44 
1-3 § NSL Narkotikabrott inkl. grovt	Framställning	 497 	 491 	 6 	 59 	 53 
Miljöbalken (1998:808)	Miljöbalken, totalt	4 626 	2 745 	1 881 	 6 	 3 
29 kap. 1 § MB Miljöbrott inkl. grovt	Miljöbrott	 963 	 618 	 345 	 5 	 3 
29 kap. 2, 2 a § MB Brott eller förseelse mot områdesskydd 	Brott eller förseelse mot områdesskydd	 528 	 402 	 126 	 13 	 8 
29 kap. 2 b § MB Artskydd inkl grovt 	Artskydd	 298 	 272 	 26 	 10 	 9 
29 kap. 2 c § MB Otillåten hantering av invasiv främmande art	Otillåten hantering av invasiv främmande art 	 4 	 4 	- 	- 	- 
29 kap. 3, 3 a § MB Miljöfarlig eller olovlig kemikaliehantering 	Miljöfarlig eller olovlig kemikaliehantering 	 108 	 97 	 11 	- 	- 
29 kap. 1 § MB Otillåten miljöverksamhet	Otillåten miljöverksamhet 	 734 	 667 	 67 	 3 	 2 
29 kap. 4 a § 1–15 p MB Otillåten avfallstransport	Otillåten avfallstransport 	 74 	 72 	 2 	 7 	 5 
29 kap. 5 § MB Försvårande av miljökontroll	Försvårande av miljökontroll 	 92 	 85 	 7 	- 	- 
29 kap. 6 § MB Bristfällig miljöinformation	Bristfällig miljöinformation	 26 	 24 	 2 	- 	- 
29 kap. 7 § MB Nedskräpning	Nedskräpning	1 730 	 455 	1 275 	 5 	 1 
29 kap. 8 § MB Övriga brott mot miljöbalken	Övriga brott mot miljöbalken 	 69 	 49 	 20 	- 	- 
Skattebrottslag (1971:69) 2-10 §	Skattebrottslagen 	5 792 	5 620 	 172 	 21 	 13 
4 § SBL Grovt skattebrott	Grovt skattebrott, totalt	1 529 	1 512 	 17 	 32 	 22 
SBL 2-4 § Skattebrott, skatteförseelse, grovt skattebrott	Avseende mervärdesskattelagen 	1 013 	 985 	 28 	 17 	 9 
SBL 2-4 § Skattebrott, skatteförseelse, grovt skattebrott	Avseende övrig skattelagstiftninig 	2 071 	2 009 	 62 	 13 	 8 
SBL 5 § Vårdslös skatteuppgift 	Vårdslös skatteuppgift	 15 	 13 	 2 	 77 	 67 
SBL 6 § Skatteavdragsbrott 	Skatteavdragsbrott	 33 	 30 	 3 	- 	- 
SBL 7, 8 § Skatteredovisningsbrott, vårdslös skatteredovisning 	Skatteredovisningsbrott, vårdslös skatteredovisning 	 78 	 75 	 3 	 7 	 4 
SBL 10 § Försvårande av skattekontroll	Försvårande av skattekontroll 	1 053 	 996 	 57 	 25 	 16 
Lag (1986:436) om näringsförbud, 47 §	Överträdelse av lagen om näringsförbud	 51 	 46 	 5 	 41 	 35 
Aktiebolagslag (2005:551)	Aktiebolagslagen, totalt	 269 	 254 	 15 	 18 	 14 
ABL 30 kap. 1 § 2 st. 2 p. Underlåtenhet att föra/hålla aktiebok tillgänglig 	Underlåtenhet att föra/hålla aktiebok tillgänglig	 6 	 5 	 1 	 20 	 17 
ABL 30 kap. 1 § 1 st. 4 p. Brott mot låneförbud m.m. 	Brott mot låneförbud m.m. 	 119 	 117 	 2 	 7 	 6 
ABL 30 kap. 1 § 3 st. Brott mot bulvan/målvaktsbestämmelser 	Brott mot bulvan/målvaktsbestämmelser 	 131 	 121 	 10 	 31 	 22 
ABL 30 kap. 1 § 1 st. 1 p., 3 p. och 2 § Övriga brott 	Övriga brott mot aktiebolagslagen 	 13 	 11 	 2 	- 	- 
Lag (2016:1307) om straff för marknadsmissbruk på värdepappersmarknaden	Lag om straff för marknadsmissbruk m.m, totalt	 108 	 100 	 8 	 24 	 21 
Lag 2016:1307 2 kap. 2-4, 7 § Insiderbrott m.m.	Insiderbrott m.m.	 76 	 71 	 5 	 13 	 12 
Lag 2016:1307 2 kap.3 § Obehörigt röjande av insiderinformation 	Obehörigt röjande av insiderinformation	 8 	 8 	- 	 38 	 38 
Lag 2016:1307 2 kap.4, 7 § Marknadsmanipulation, inkl. grov	Marknadsmanipulation	 24 	 21 	 3 	 58 	 46 
Lag om straff för finansiering av särskilt allvarlig brottslighet i vissa fall, m.m.	Lag om straff för finansiering av särskilt allvarlig brottslighet i vissa fall, 	 1 	- 	 1 	- 	- 
Lag (2014:307) om straff för penningtvättsbrott	Penningtvättsbrott, totalt	14 474 	14 190 	 284 	 38 	 29 
Lag 2014:307, 3-4 § Penningtvättsbrott 	Penningtvättsbrott 	11 935 	11 708 	 227 	 39 	 28 
Lag 2014:307, 5 § Penningtvättsbrott, grovt brott	Penningtvättsbrott	1 291 	1 259 	 32 	 42 	 40 
Lag 2014:307, 6 § Penningtvättsförseelse 	Penningtvättsförseelse	 504 	 491 	 13 	 33 	 29 
Lag 2014:307, 7 § 1-3 st Näringspenningtvätt	Näringspenningtvätt 	 744 	 732 	 12 	 21 	 19 
Bidragsbrottslag (2007:612)	Bidragsbrottslagen, totalt	27 489 	26 877 	 612 	 47 	 40 
Lag 2007:612, 2-4 § Bidragsbrottslag	Mot Försäkringskassan	20 370 	19 887 	 483 	 50 	 43 
Lag 2007:612, 2-4 § Bidragsbrottslag	Mot kommunerna	2 089 	2 031 	 58 	 26 	 20 
Lag 2007:612, 2-4 § Bidragsbrottslag	Mot a-kassorna och Arbetsförmedlingen	3 846 	3 798 	 48 	 50 	 43 
Lag 2007:612, 2-4 § Bidragsbrottslag	Mot PPM, CSN och Migrationsverket	1 184 	1 161 	 23 	 28 	 22 
Lag (2000:1225) om straff för smuggling	Smugglingslagen, totalt	2 894 	2 717 	 177 	 74 	 67 
Lag (2000:1225) 3-5, 7, 14 § Smugglingsbrott och olovlig in- och utförsel	Smugglingsbrott och olovlig in- och utförsel, ej narkotika	1 216 	1 107 	 109 	 71 	 62 
Lag (2000:1225) 6, 7, 14 § Narkotikasmuggling och olovlig in- och utförsel av narkotika 	Narkotikasmuggling och olovlig in- och utförsel av narkotika 	1 257 	1 208 	 49 	 80 	 75 
Lag (2000:1225)6 a, 7 , 14 § Vapensmuggling, olovlig in- och utförsel	Vapensmuggling, olovlig in- och utförsel	 100 	 93 	 7 	 79 	 71 
Lag (2000:1225) 6 b, 7, 14 § Smuggling av explosiv vara, olovlig in- och utförsel	Smuggling av explosiv vara, olovlig in- och utförsel	 44 	 41 	 3 	 83 	 77 
Lag (2000:1225) 8-11, 14 § Tullbrott och vårdslös tullredovisning 	Tullbrott och vårdslös tullredovisning	 116 	 111 	 5 	 87 	 78 
Lag (2000:1225) 12-14 § Olovlig befattning med smuggelgods 	Olovlig befattning med smuggelgods 	 161 	 157 	 4 	 41 	 37 
Lag (1998:506) om punktskattekontroll av transporter m.m. av alkoholvaror, tobaksvaror och energiprodukter 5 kap. 1, 1 a-c §	Lagen om punktskattekontroll 	 177 	 160 	 17 	 47 	 37 
Lag (1992:860) om kontroll av narkotika	Lagen om kontroll av narkotika (13 §)	 3 	 2 	 1 	- 	- 
Alkohollag (2010:1622) 11 kap.	Alkohollagen, totalt	 870 	 649 	 221 	 28 	 19 
Lag (2010:1622) 11 kap. (1 § 1 p., 2 , 4 §) Olovlig befattning med sprit genom tillverkning, inkl. grov 	Olovlig befattning med sprit genom tillverkning	 43 	 41 	 2 	 59 	 51 
Lag (2010:1622) 11 kap.  (1 § 2 p., 4 §) Olovlig befattning med olovligt tillverkad sprit genom förvärv, innehav m.m.	Olovlig befattning med olovligt tillverkad sprit genom förvärv, innehav m.m.	 83 	 72 	 11 	 39 	 29 
Lag (2010:1622) 11 kap.(3, 4, 6 §) Olovlig försäljning av alkohol inkl. grov, olovligt innehav av alkohol 	Olovlig försäljning av alkohol, olovligt innehav av alkohol 	 286 	 251 	 35 	 34 	 28 
Lag (2010:1622) 11 kap. (5 §) Olovlig vin- och öltillverkning m.m.	Olovlig vin- och öltillverkning m.m. 	 5 	 4 	 1 	- 	- 
Lag (2010:1622) 11 kap.  (7, 9 §)Olovligt anskaffande av alkohol, olovlig hantering av alkohol	Olovligt anskaffande av alkohol, olovlig hantering av alkohol 	 444 	 273 	 171 	 17 	 9 
Lag (2010:1622) 11 kap.(8 §) Olovlig försäljning av teknisk sprit m.m. 	Olovlig försäljning av teknisk sprit m.m. 	 9 	 8 	 1 	- 	- 
Lag (2018:2088) om tobak och liknande produkter	Tobakslagen	 318 	 268 	 50 	 19 	 15 
Lag om förbud mot vissa hälsofarliga varor (3 § 1 st. och 4 §)	Lag om förbud mot vissa hälsofarliga varor	 61 	 60 	 1 	 31 	 25 
Lag om brandfarliga och explosiva varor (6 §, 16 § 1 st, 28 § 1 st, 29 § 2 st, 29a §)	Lag om brandfarliga och explosiva varor	 471 	 406 	 65 	 28 	 22 
Läkemedelslag (2015:315) 16 kap. 1 §	Läkemedelslag	 57 	 54 	 3 	 9 	 7 
Lag (2009:366) om handel med läkemedel (9 kap. 1, 1 a §)	Lag om handel med läkemedel 	 27 	 26 	 1 	 24 	 19 
Lag (2009:730) om handel med vissa receptfria läkemedel 24 §	Lag om handel med vissa receptfria läkemedel	 5 	 5 	- 	 50 	 40 
Vapenlag (1996:67) 9 kap. 1-3 §	Vapenlagen, totalt	9 002 	8 593 	 409 	 24 	 21 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Vapenbrott; innehav, totalt	7 259 	6 891 	 368 	 23 	 20 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Av pistol, revolver, kpist, totalt	3 714 	3 499 	 215 	 18 	 17 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Av pistol, revolver, kpist	1 461 	1 379 	 82 	 16 	 14 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Av pistol, revolver, kpist	2 252 	2 119 	 133 	 19 	 18 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Av jaktvapen, totalt	 730 	 695 	 35 	 16 	 14 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Av jaktvapen	 616 	 586 	 30 	 12 	 11 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Av jaktvapen	 114 	 109 	 5 	 34 	 32 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Av annat vapen, totalt	2 815 	2 697 	 118 	 32 	 27 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Av annat vapen	2 265 	2 189 	 76 	 34 	 28 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Av annat vapen	 550 	 508 	 42 	 23 	 21 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Vapenbrott; överlåtelse, utlåning av skjutvapen, totalt	 75 	 66 	 9 	 13 	 11 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Vapenbrott; överlåtelse, utlåning av skjutvapen	 50 	 44 	 6 	 8 	 6 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Vapenbrott; överlåtelse, utlåning av skjutvapen	 25 	 22 	 3 	 23 	 20 
Vapenlag (1996:67) 1 b, 2 § Annat brott	Annat brott mot Vapenlagen	1 667 	1 635 	 32 	 27 	 22 
Lag (1988:254)  1, 2, 4 § om förbud beträffande knivar och andra farliga föremål	Lagen om förbud betr. knivar m.m. 	11 097 	10 734 	 363 	 77 	 59 
Jaktlag (1987:259) 43, 44, 46 §	Jaktlagen, totalt	 397 	 236 	 161 	 15 	 9 
Jaktlag (1987:259) 43, 44, 46 §	Illegal rovdjursjakt (varg, björn, järv, lodjur och kungsörn)	 54 	 43 	 11 	 2 	 2 
Jaktlag (1987:259) 43, 44, 46 §	Övriga brott mot jaktlagen	 343 	 193 	 150 	 19 	 10 
Fiskelag (1993:787) 37, 38, 40 §	Fiskelagen	 291 	 242 	 49 	 33 	 25 
Lag (1980:424) om åtgärder mot förorening från fartyg	Lagen om åtgärder mot förorening från fartyg	 73 	 49 	 24 	 4 	 3 
Arbetsmiljölag (1977:1160) 8 kap. 1,  2 §	Arbetsmiljölagen 	 126 	 92 	 34 	- 	- 
Utlänningslag (2005:716),  20 kap.	Utlänningslagen, totalt	1 111 	1 061 	 50 	 24 	 21 
UtlL 20 kap. 2 § Uppsåtligen uppehåller sig i Sverige trots beslut om utvisning 	Uppsåtligen uppehåller sig i Sverige trots beslut om utvisning 	 71 	 70 	 1 	 71 	 65 
UtlL 20 kap. 5 § Har utlänning anställd som inte har rätt att vistas i Sverige, eller saknar arbetstillstånd 	Har utlänning anställd som inte har rätt att vistas i Sverige, eller saknar arbe	 706 	 685 	 21 	 25 	 22 
UtlL 20 kap. 7 § Hjälp till utlänning att olovligen uppehålla sig i Sverige, annan EU-stat eller Schengenområdet	Hjälp till utlänning att olovligen uppehålla sig i Sverige, annan EU-stat eller 	 15 	 15 	- 	 47 	 47 
UtlL 20 kap. 8 § Människosmuggling	Människosmuggling	 153 	 146 	 7 	 14 	 13 
UtlL 20 kap. 9 § Organiserande av människosmuggling	Organiserande av människosmuggling	 7 	 5 	 2 	- 	- 
UtlL 20 kap. 4-7 § Övriga brott	Övriga brott mot utlänningslagen	 159 	 140 	 19 	 4 	 3 
Lag (1988:688) om kontaktförbud	Lagen om kontaktförbud, totalt	4 386 	4 267 	 119 	 28 	 24 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Med elektronisk övervakning	 27 	 23 	 4 	 5 	 4 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Utan elektronisk övervakning	3 858 	3 750 	 108 	 31 	 27 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot barn under 18 år, totalt	 116 	 103 	 13 	 38 	 30 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot flicka under 18 år	 74 	 62 	 12 	 40 	 32 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot pojke under 18 år	 42 	 41 	 1 	 34 	 26 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot kvinna 18 år eller äldre, totalt	3 166 	3 083 	 83 	 30 	 26 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Närstående genom parrelation	2 245 	2 185 	 60 	 26 	 25 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Närstående genom släktskap/familj	 150 	 146 	 4 	 37 	 33 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Annan sorts relation eller bekantskap	 438 	 426 	 12 	 43 	 37 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Obekanta	 333 	 326 	 7 	 37 	 23 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot man 18 år eller äldre, totalt	 575 	 563 	 12 	 38 	 31 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Närstående genom parrelation	 185 	 176 	 9 	 55 	 50 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Närstående genom släktskap/familj	 79 	 79 	- 	 43 	 37 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Annan sorts relation eller bekantskap	 185 	 182 	 3 	 23 	 19 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Obekanta	 126 	 126 	- 	 26 	 18 
Lag (1988:688) 25 § Hindrande av elektronisk övervakning 	Hindrande av elektronisk övervakning	 501 	 494 	 7 	 1 	 1 
Lag (2005:321) om tillträdesförbud vid idrottsarrangemang	Lagen om tillträdesförbud vid idrottsarrangemang	 34 	 34 	- 	 87 	 79 
Kulturmiljölag (1988:950) 2 kap. 21, 21 a §	Kulturmiljölagen	 108 	 84 	 24 	 22 	 16 
Spellag (2018:1138) 	Spellagen, totalt	 27 	 25 	 2 	- 	- 
Spellag (2018:1138), 19 kap. 1, 3 §, inkl. grovt	Olovlig spelverksamhet	 18 	 17 	 1 	- 	- 
Spellag (2018:1138), 19 kap. 2, 3 §, inkl. grovt	Främjande av olovligt spel	 2 	 2 	- 	- 	- 
Spellag (2018:1138), 19 kap. 4,5 §, inkl. grovt	Spelfusk	 7 	 6 	 1 	- 	- 
Lag (1991:1969) om förbud mot vissa dopningsmedel	Lagen om förbud mot vissa dopningmedel	2 454 	2 431 	 23 	 47 	 39 
Lag (1991:1969) om förbud mot vissa dopningsmedel, 2 § 4, 5 p., 3, 3 a §, inkl. grovt	Överlåtelse	 179 	 175 	 4 	 11 	 10 
Lag (1991:1969) om förbud mot vissa dopningsmedel,  2 § 6 p., 3, 3 a §, inkl. grovt	Innehav	1 555 	1 546 	 9 	 64 	 51 
Lag (1991:1969) om förbud mot vissa dopningsmedel, 2 § 7 p., 3, 3 a §, inkl. grovt	Eget bruk	 719 	 709 	 10 	 22 	 20 
Lag (1991:1969) om förbud mot vissa dopningsmedel, 2 § 3 p., 3, 3 a §, inkl. grovt	Framställning	 1 	 1 	- 	- 	- 
Folkbokföringslag (1991:481) 42 §	Folkbokföringslagen	3 909 	3 661 	 248 	 10 	 6 
Övriga trafikbrott (ej TBL) med fängelse i straffskalan	Övriga trafikbrott (ej TBL) med fängelse i straffskalan	 187 	 185 	 2 	 31 	 28 
Sjölag (1994:1009) 20 kap.	Sjölagen, totalt	 242 	 231 	 11 	 53 	 49 
Lag (1994:1009) 20 kap. 4, 5 § Sjöfylleri 	Sjöfylleri	 146 	 144 	 2 	 72 	 70 
Lag (1994:1009) 20 kap. 1, 2, 6-9 § Övriga brott	Övriga brott mot sjölagen 	 96 	 87 	 9 	 20 	 17 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser	Lagen om straff för folkmord, brott mot mänskligheten och krigsförbrytelser, tot	 97 	 59 	 38 	 5 	 3 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser, 1 §	Folkmord	 12 	 8 	 4 	- 	- 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser,  2 §	Brott mot mänskligheten	 24 	 13 	 11 	- 	- 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser,  4-11 §	Krigsförbrytelse	 49 	 32 	 17 	 6 	 4 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser, 14-15 §	Övriga brott	 8 	 2 	 6 	- 	- 
Lag (1982:316) med förbud mot könsstympning av kvinnor	Lagen med förbud mot könsstympning av kvinnor	 42 	 42 	- 	 2 	 2 
Lag (2003:148) om straff för terroristbrott 2 §	Lag om straff för terroristbrott 	 10 	 7 	 3 	 29 	 20 
Lag (2010:299) om straff för offentlig uppmaning, rekrytering och utbildning avseende terroristbrott och annan särskild allvarlig brottslighet (5 §)	Lag om straff för offentlig uppmaning, rekrytering och utbildning avseende terro	 2 	 2 	- 	 50 	 50 
Skyddslag (2010:305) 30-31 §	Skyddslag, totalt	 455 	 348 	 107 	 21 	 15 
Lag (1996:95) om vissa internationella sanktioner, 8, 15 §	Lag om vissa internationella sanktioner 	 11 	 11 	- 	- 	- 
Ordningslagen (1993:1617) 2 kap. 29 §, 5 kap. 3-5 §§	Ordningslagen	1 780 	 963 	 817 	 19 	 10 
Lag (1960:729) om upphovsrätt till litterära och konstnärliga verk, lag(2000:171) om förbud beträffande viss avkodningsutrustning 	Brott mot upphovsrätten	 166 	 89 	 77 	 14 	 5 
Lag (1992:1685) om skydd för kretsmönster för halvledarprodukter, lag (2018:1653) om företagsnamn, patentlagen (1967:837), mönsterskyddslagen (1970:485), växtförädlarrättslagen (1997:306), varumärkeslagen (2010:1877)	Brott mot det industriella rättsskyddet	 71 	 39 	 32 	- 	- 
Övriga författningar	Övriga författningar	2 515 	2 116 	 399 	 23 	 17 `;

const jsonData = dataToJson(data);
writeDataToFile(jsonData, 'output.json');
