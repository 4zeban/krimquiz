const fs = require('fs');
const short = require('short-uuid')

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
            id: short.generate(),
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

const data = `SAMTLIGA BROTT	SAMTLIGA BROTT	1517 058 	737 673 	779 385 	 28 	 12 
Brott mot brottsbalken	Brott mot brottsbalken, totalt	1230 033 	474 910 	755 123 	 17 	 6 
BrB 3-7 kap. Brott mot person	Brott mot person, totalt	298 353 	202 446 	95 907 	 14 	 9 
3 kap. Brott mot liv och hälsa	Brott mot liv och hälsa, totalt	94 114 	76 582 	17 532 	 13 	 11 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Fullbordat mord och dråp samt misshandel med dödlig utgång, totalt	 492 	 463 	 29 	 21 	 19 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot kvinna/flicka	 175 	 156 	 19 	 15 	 14 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot kvinna/flicka, med användning av skjutvapen	 15 	 13 	 2 	 15 	 13 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot kvinna/flicka, utan användning av skjutvapen	 160 	 143 	 17 	 15 	 14 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot man/pojke	 317 	 307 	 10 	 23 	 22 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot man/pojke, med användning av skjutvapen	 107 	 103 	 4 	 31 	 30 
3 kap. 1-2, 5-6 § BrB Fullbordat mord och dråp samt misshandel med dödlig utgång	Mot man/pojke, utan användning av skjutvapen	 210 	 204 	 6 	 19 	 19 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Försök till mord eller dråp, totalt	1 227 	1 156 	 71 	 31 	 29 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot barn under 18 år	 114 	 106 	 8 	 35 	 32 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot flicka under 18 år	 26 	 21 	 5 	 24 	 19 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot pojke under 18 år	 88 	 85 	 3 	 38 	 36 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre	 199 	 180 	 19 	 32 	 29 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre, närstående genom parrelation	 49 	 46 	 3 	 33 	 31 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 18 	 17 	 1 	 47 	 44 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 43 	 36 	 7 	 36 	 30 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot kvinna 18 år eller äldre, obekanta	 89 	 81 	 8 	 26 	 24 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre	 903 	 859 	 44 	 30 	 29 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre, närstående genom parrelation	 29 	 27 	 2 	 22 	 21 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre, närstående genom släktskap/familj	 30 	 30 	- 	 40 	 40 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 220 	 202 	 18 	 40 	 36 
3 kap. 1, 2 § BrB Försök till mord eller dråp	Mot man 18 år eller äldre, obekanta	 624 	 600 	 24 	 27 	 26 
3 kap. 3 § BrB Barnadråp 3 §	Barnadråp, totalt	- 	- 	- 	- 	- 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Misshandel, ej med dödlig utgång, totalt	87 210 	71 484 	15 726 	 13 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot barn 0-6 år	4 037 	3 696 	 341 	 6 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år	1 587 	1 458 	 129 	 6 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, bekant med offret	1 543 	1 431 	 112 	 5 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, bekant med offret, utomhus	 92 	 64 	 28 	 16 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, bekant med offret inomhus	1 451 	1 367 	 84 	 5 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, obekant med offret	 44 	 27 	 17 	 9 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, obekant med offret, utomhus	 23 	 13 	 10 	 8 	 4 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 0-6 år, obekant med offret, inomhus	 21 	 14 	 7 	 10 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år	2 450 	2 238 	 212 	 6 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, bekant med offret	2 356 	2 171 	 185 	 6 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, bekant med offret, utomhus	 167 	 120 	 47 	 12 	 8 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, bekant med offret, inomhus	2 189 	2 051 	 138 	 5 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, obekant med offret	 94 	 67 	 27 	 3 	 2 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, obekant med offret, utomhus	 54 	 34 	 20 	 3 	 2 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 0-6 år, obekant med offret, inomhus	 40 	 33 	 7 	 3 	 3 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot barn 7-14 år	14 341 	9 442 	4 899 	 10 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år	5 540 	3 981 	1 559 	 9 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, bekant med offret	4 944 	3 608 	1 336 	 8 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, bekant med offret, utomhus	 906 	 393 	 513 	 15 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, bekant med offret, inomhus	4 038 	3 215 	 823 	 8 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, obekant med offret	 596 	 373 	 223 	 14 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, obekant med offret, utomhus	 408 	 249 	 159 	 12 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 7-14 år, obekant med offret, inomhus	 188 	 124 	 64 	 19 	 12 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år	8 801 	5 461 	3 340 	 11 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, bekant med offret	7 214 	4 375 	2 839 	 10 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, bekant med offret, utomhus	1 976 	 777 	1 199 	 14 	 5 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, bekant med offret, inomhus	5 238 	3 598 	1 640 	 9 	 6 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, obekant med offret	1 587 	1 086 	 501 	 14 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, obekant med offret, utomhus	1 161 	 798 	 363 	 13 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 7-14 år, obekant med offret, inomhus	 426 	 288 	 138 	 18 	 12 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot barn 15-17 år	7 047 	6 035 	1 012 	 18 	 15 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år	2 787 	2 438 	 349 	 16 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, bekant med offret	2 254 	2 018 	 236 	 16 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, bekant med offret, utomhus	 616 	 532 	 84 	 18 	 15 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, bekant med offret, inomhus	1 638 	1 486 	 152 	 16 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, obekant med offret	 533 	 420 	 113 	 15 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, obekant med offret, utomhus	 329 	 265 	 64 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot flicka 15-17 år, obekant med offret, inomhus	 204 	 155 	 49 	 17 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år	4 260 	3 597 	 663 	 19 	 16 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, bekant med offret	2 591 	2 194 	 397 	 20 	 17 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, bekant med offret, utomhus	1 093 	 929 	 164 	 22 	 18 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, bekant med offret, inomhus	1 498 	1 265 	 233 	 19 	 16 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, obekant med offret	1 669 	1 403 	 266 	 16 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, obekant med offret, utomhus	1 293 	1 067 	 226 	 15 	 12 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot pojke 15-17 år, obekant med offret, inomhus	 376 	 336 	 40 	 18 	 15 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre	30 804 	26 923 	3 881 	 15 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, närstående genom parrelation	14 885 	14 228 	 657 	 16 	 15 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	2 799 	2 428 	 371 	 16 	 14 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	7 066 	5 901 	1 165 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	1 901 	1 601 	 300 	 12 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	5 165 	4 300 	 865 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, obekant med offret	6 054 	4 366 	1 688 	 13 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, obekant med offret, utomhus	3 034 	2 227 	 807 	 12 	 9 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot kvinna 18 år eller äldre, obekant med offret, inomhus	3 020 	2 139 	 881 	 15 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre	30 981 	25 388 	5 593 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, närstående genom parrelation	3 310 	2 973 	 337 	 8 	 7 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, närstående genom släktskap/familj	1 705 	1 462 	 243 	 14 	 12 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	8 406 	7 306 	1 100 	 14 	 12 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	3 588 	3 167 	 421 	 15 	 13 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	4 818 	4 139 	 679 	 13 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, obekant med offret	17 557 	13 644 	3 913 	 14 	 11 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, obekant med offret, utomhus	11 919 	9 212 	2 707 	 13 	 10 
3 kap. 5, 6 § BrB Misshandel inkl. grov	Mot man 18 år eller äldre, obekant med offret, inomhus	5 638 	4 432 	1 206 	 17 	 13 
3 kap. 7, 10 § BrB Vållande till annans död	Vållande till annans död, totalt	 347 	 329 	 18 	 16 	 15 
3 kap. 7, 10 § BrB Vållande till annans död	I samband med trafikolycka	 121 	 119 	 2 	 36 	 35 
3 kap. 7, 10 § BrB Vållande till annans död	I samband med arbetsolycka	 47 	 46 	 1 	 4 	 4 
3 kap. 7, 10 § BrB Vållande till annans död	Övriga fall	 179 	 164 	 15 	 5 	 4 
3 kap. 8, 10 § BrB Vållande till kroppskada eller sjukdom (inte i samband med trafikolycka)	Vållande till kroppskada eller sjukdom, inte i samband med trafikolycka, totalt	3 770 	2 548 	1 222 	 6 	 3 
3 kap. 8, 10 § BrB Vållande till kroppskada eller sjukdom (inte i samband med trafikolycka)	I samband med arbetsolycka	1 933 	1 334 	 599 	 0 	 0 
3 kap. 8, 10 § BrB Vållande till kroppskada eller sjukdom (inte i samband med trafikolycka)	Övriga fall	1 837 	1 214 	 623 	 11 	 7 
3 kap. 9, 10 § BrB Framkallande av fara för annan	Framkallande av fara för annan, totalt	1 068 	 602 	 466 	 8 	 4 
3 kap. 9, 10 § BrB Framkallande av fara för annan	Som framkallats för arbetstagare	 117 	 60 	 57 	 2 	 1 
3 kap. 9, 10 § BrB Framkallande av fara för annan	Övriga fall	 951 	 542 	 409 	 9 	 5 
4 kap. Brott mot frihet och frid	Brott mot frihet och frid, totalt	168 186 	100 705 	67 481 	 13 	 7 
4 kap. 1 § BrB Människorov 	Människorov, totalt	 494 	 455 	 39 	 21 	 19 
4 kap. 1 a § BrB Människohandel	Människohandel, totalt	 239 	 186 	 53 	 7 	 5 
4 kap. 1 a § BrB Människohandel	För sexuella ändamål 	 121 	 92 	 29 	 1 	 1 
4 kap. 1 a § BrB Människohandel	För sexuella ändamål, med barn under 18 år	 13 	 11 	 2 	- 	- 
4 kap. 1 a § BrB Människohandel	För sexuella ändamål , med person 18 år eller äldre	 108 	 81 	 27 	 1 	 1 
4 kap. 1 a § BrB Människohandel	För tvångsarbete	 50 	 41 	 9 	 27 	 22 
4 kap. 1 a § BrB Människohandel	För tvångsarbete, med barn under 18 år	 1 	- 	 1 	- 	- 
4 kap. 1 a § BrB Människohandel	För tvångsarbete, med person 18 år eller äldre	 49 	 41 	 8 	 27 	 22 
4 kap. 1 a § BrB Människohandel	För tiggeri	 2 	 2 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För tiggeri, med barn under 18 år	- 	- 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För tiggeri, med person 18 år eller äldre	 2 	 2 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För organhandel	 1 	 1 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För organhandel, med barn under 18 år	- 	- 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För organhandel, med person 18 år eller äldre	 1 	 1 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För krigstjänst	- 	- 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För krigstjänst, med barn under 18 år	- 	- 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För krigstjänst, med person 18 år eller äldre	- 	- 	- 	- 	- 
4 kap. 1 a § BrB Människohandel	För övriga ändamål	 65 	 50 	 15 	 2 	 2 
4 kap. 1 a § BrB Människohandel	För övriga ändamål, med barn under 18 år	 12 	 10 	 2 	 10 	 8 
4 kap. 1 a § BrB Människohandel	För övriga ändamål, med person 18 år eller äldre	 53 	 40 	 13 	- 	- 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	Människoexploatering, totalt	 171 	 158 	 13 	 15 	 14 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tvångsarbete	 164 	 151 	 13 	 15 	 13 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tvångsarbete, med barn under 18 år	 4 	 3 	 1 	- 	- 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tvångsarbete, med person 18 år eller äldre	 160 	 148 	 12 	 15 	 14 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tiggeri	 7 	 7 	- 	 29 	 29 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tiggeri, med barn under 18 år	 2 	 2 	- 	 50 	 50 
4 kap. 1 b § BrB Människoexploatering, inkl. grovt	För tiggeri, med person 18 år eller äldre	 5 	 5 	- 	 20 	 20 
4 kap. 2 § BrB Olaga frihetsberövande	Olaga frihetsberövande, totalt	1 611 	1 322 	 289 	 11 	 9 
4 kap. 2 § BrB Olaga frihetsberövande	Mot barn under 18 år	 432 	 382 	 50 	 7 	 6 
4 kap. 2 § BrB Olaga frihetsberövande	Mot flicka under 18 år	 193 	 171 	 22 	 7 	 6 
4 kap. 2 § BrB Olaga frihetsberövande	Mot pojke under 18 år	 239 	 211 	 28 	 7 	 6 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre	 777 	 630 	 147 	 12 	 9 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre, närstående genom parrelation	 340 	 330 	 10 	 14 	 14 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 72 	 67 	 5 	 10 	 10 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 161 	 145 	 16 	 12 	 11 
4 kap. 2 § BrB Olaga frihetsberövande	Mot kvinna 18 år eller äldre, obekanta	 204 	 88 	 116 	 3 	 1 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre	 402 	 310 	 92 	 14 	 11 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre, närstående genom parrelation	 26 	 24 	 2 	 13 	 12 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre, närstående genom släktskap/familj	 26 	 17 	 9 	- 	- 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 108 	 98 	 10 	 18 	 17 
4 kap. 2 § BrB Olaga frihetsberövande	Mot man 18 år eller äldre, obekanta	 242 	 171 	 71 	 13 	 9 
4 kap. 3 § BrB Barnfridsbrott	Barnfridsbrott, totalt	10 679 	10 357 	 322 	 18 	 17 
4 kap. 3 § BrB Barnfridsbrott	Mot flicka under 18 år	5 205 	5 065 	 140 	 18 	 17 
4 kap. 3 § BrB Barnfridsbrott	Mot pojke under 18 år	5 474 	5 292 	 182 	 17 	 17 
4 kap 4 § BrB Olaga tvång	Olaga tvång, totalt	1 119 	 914 	 205 	 13 	 10 
4 kap 4 § BrB Olaga tvång	Mot barn under 18 år	 385 	 303 	 82 	 15 	 12 
4 kap 4 § BrB Olaga tvång	Mot flicka under 18 år	 143 	 110 	 33 	 12 	 9 
4 kap 4 § BrB Olaga tvång	Mot pojke under 18 år	 242 	 193 	 49 	 17 	 14 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre	 374 	 318 	 56 	 9 	 7 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre, närstående genom parrelation	 149 	 136 	 13 	 8 	 7 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 21 	 18 	 3 	 6 	 5 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 100 	 83 	 17 	 13 	 10 
4 kap 4 § BrB Olaga tvång	Mot kvinna 18 år eller äldre, obekanta	 103 	 81 	 22 	 8 	 6 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre	 360 	 293 	 67 	 14 	 11 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre, närstående genom parrelation	 16 	 11 	 5 	 9 	 6 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre, närstående genom släktskap/familj	 16 	 14 	 2 	 7 	 6 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 116 	 101 	 15 	 12 	 10 
4 kap 4 § BrB Olaga tvång	Mot man 18 år eller äldre, obekanta	 212 	 167 	 45 	 16 	 13 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Grov fridskränkning, totalt	1 091 	1 057 	 34 	 19 	 19 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot barn under 18 år	 823 	 793 	 30 	 14 	 14 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot flicka under 18 år	 416 	 402 	 14 	 13 	 13 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot pojke under 18 år	 407 	 391 	 16 	 15 	 15 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot kvinna 18 år eller äldre	 185 	 182 	 3 	 41 	 41 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot kvinna 18 år eller äldre, närstående genom parrelation	 148 	 147 	 1 	 46 	 45 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 37 	 35 	 2 	 23 	 22 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot man 18 år eller äldre	 83 	 82 	 1 	 20 	 19 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot man 18 år eller äldre, närstående genom parrelation	 67 	 66 	 1 	 18 	 18 
4 kap 4 a § 1 st. BrB Grov fridskränkning 	Mot man 18 år eller äldre, närstående genom släktskap/familj	 16 	 16 	- 	 25 	 25 
4 kap 4 a § 2 st. BrB Grov kvinnofridskränkning 	Grov kvinnofridskränkning, totalt	1 205 	1 181 	 24 	 23 	 22 
4 kap 4 b § BrB Olaga förföljelse	Olaga förföljelse, totalt	 529 	 440 	 89 	 33 	 27 
4 kap 4 b § BrB Olaga förföljelse	Mot barn under 18 år	 29 	 26 	 3 	 27 	 24 
4 kap 4 b § BrB Olaga förföljelse	Mot flicka under 18 år	 22 	 19 	 3 	 21 	 18 
4 kap 4 b § BrB Olaga förföljelse	Mot pojke under 18 år	 7 	 7 	- 	 43 	 43 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre	 380 	 330 	 50 	 35 	 30 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre, närstående genom parrelation	 148 	 145 	 3 	 40 	 39 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 17 	 17 	- 	 38 	 35 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 116 	 103 	 13 	 37 	 32 
4 kap 4 b § BrB Olaga förföljelse	Mot kvinna 18 år eller äldre, obekanta	 99 	 65 	 34 	 23 	 14 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre	 120 	 84 	 36 	 26 	 18 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre, närstående genom parrelation	 24 	 21 	 3 	 33 	 29 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre, närstående genom släktskap/familj	 7 	 5 	 2 	 40 	 29 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 35 	 25 	 10 	 29 	 20 
4 kap 4 b § BrB Olaga förföljelse	Mot man 18 år eller äldre, obekanta	 54 	 33 	 21 	 16 	 9 
4 kap 4 c § 1-2 st. BrB Äktenskapstvång	Äktenskapstvång, vilseledande till äktenskapsresa, totalt	 35 	 30 	 5 	 3 	 3 
4 kap 4 c § 3 st. BrB Barnäktenskapsbrott	Barnäktenskapsbrott 	 63 	 60 	 3 	 5 	 5 
4 kap 4 d § BrB Vilseledande till äktenskapsresa	Vilseledande till äktenskapsresa 	 13 	 13 	- 	- 	- 
4 kap. 5 § BrB Hedersförtryck	Hedersförtryck, totalt	 95 	 93 	 2 	 3 	 3 
4 kap. 5 § BrB Hedersförtryck	Mot barn under 18 år	 49 	 47 	 2 	- 	- 
4 kap. 5 § BrB Hedersförtryck	Mot flicka under 18 år	 45 	 43 	 2 	- 	- 
4 kap. 5 § BrB Hedersförtryck	Mot pojke under 18 år	 4 	 4 	- 	- 	- 
4 kap. 5 § BrB Hedersförtryck	Mot kvinna 18 år eller äldre	 41 	 41 	- 	 7 	 7 
4 kap. 5 § BrB Hedersförtryck	Mot man 18 år eller äldre	 5 	 5 	- 	- 	- 
4 kap. 5 § BrB Olaga hot	Olaga hot, totalt	50 758 	39 667 	11 091 	 13 	 10 
4 kap. 5 § BrB Olaga hot	Mot barn under 18 år	7 956 	5 391 	2 565 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot flicka under 18 år	3 381 	2 356 	1 025 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot flicka under 18 år, internetrelaterat	 949 	 551 	 398 	 15 	 9 
4 kap. 5 § BrB Olaga hot	Mot flicka under 18 år, ej internetrelaterat	2 432 	1 805 	 627 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot pojke under 18 år	4 575 	3 035 	1 540 	 13 	 9 
4 kap. 5 § BrB Olaga hot	Mot pojke under 18 år, internetrelaterat	 767 	 394 	 373 	 7 	 4 
4 kap. 5 § BrB Olaga hot	Mot pojke under 18 år, ej internetrelaterat	3 808 	2 641 	1 167 	 14 	 9 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre	19 877 	16 454 	3 423 	 15 	 12 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom parrelation	7 465 	7 042 	 423 	 17 	 16 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom parrelation, internetrelaterat	 790 	 720 	 70 	 22 	 20 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom parrelation, ej internetrelaterat	6 675 	6 322 	 353 	 17 	 15 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom släktskap/familj	2 053 	1 800 	 253 	 19 	 16 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom släktskap/familj, internetrelatera	 223 	 191 	 32 	 19 	 16 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre närstående genom släktskap/familj, ej internetrelat	1 830 	1 609 	 221 	 19 	 16 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	5 112 	4 054 	1 058 	 11 	 8 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, internetrel	1 063 	 860 	 203 	 11 	 8 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, ej internet	4 049 	3 194 	 855 	 11 	 8 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, obekanta	5 242 	3 553 	1 689 	 11 	 7 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, obekanta, internetrelaterat	1 098 	 694 	 404 	 8 	 5 
4 kap. 5 § BrB Olaga hot	Mot kvinna 18 år eller äldre, obekanta, ej internetrelaterat	4 144 	2 859 	1 285 	 12 	 8 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre	19 984 	15 485 	4 499 	 12 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom parrelation	1 083 	 927 	 156 	 8 	 7 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom parrelation, internetrelaterat	 164 	 133 	 31 	 14 	 11 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom parrelation, ej internetrelaterat	 919 	 794 	 125 	 8 	 7 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom släktskap/familj	1 514 	1 296 	 218 	 18 	 15 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom släktskap/familj, internetrelaterat	 204 	 168 	 36 	 21 	 16 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, närstående genom släktskap/familj, ej internetrelater	1 310 	1 128 	 182 	 18 	 15 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	7 020 	5 800 	1 220 	 12 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, internetrelate	 901 	 728 	 173 	 13 	 10 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, ej internetrel	6 119 	5 072 	1 047 	 11 	 9 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, obekanta	10 363 	7 458 	2 905 	 12 	 8 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, obekanta, internetrelaterat	1 527 	1 027 	 500 	 8 	 5 
4 kap. 5 § BrB Olaga hot	Mot man 18 år eller äldre, obekanta, ej internetrelaterat	8 836 	6 431 	2 405 	 12 	 8 
4 kap. 5 § BrB Olaga hot	Mot grupp	2 941 	2 337 	 604 	 12 	 9 
4 kap. 5 § BrB Olaga hot	Mot grupp, internetrelaterat	 597 	 435 	 162 	 6 	 4 
4 kap. 5 § BrB Olaga hot	Mot grupp, ej internetrelaterat	2 344 	1 902 	 442 	 14 	 10 
4 kap. 6 § BrB Hemfridsbrott, olaga intrång 	Hemfridsbrott, olaga intrång , totalt	10 999 	6 510 	4 489 	 15 	 7 
4 kap. 6 a § BrB Kränkande fotografering	Kränkande fotografering, totalt	1 043 	 816 	 227 	 25 	 19 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Olovlig identitetsanvändning, totalt	17 413 	6 303 	11 110 	 3 	 1 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot barn under 18 år	 382 	 138 	 244 	 5 	 2 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot flicka under 18 år	 229 	 80 	 149 	 5 	 2 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot pojke under 18 år	 153 	 58 	 95 	 5 	 2 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot kvinna 18 år eller äldre	7 959 	2 845 	5 114 	 3 	 1 
4 kap. 6 b § BrB Olovlig identitetsanvändning	Mot man 18 år eller äldre	9 072 	3 320 	5 752 	 3 	 1 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Olaga integritetsintrång, totalt	2 091 	1 393 	 698 	 7 	 4 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot barn under 18 år	1 025 	 663 	 362 	 9 	 6 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot flicka under 18 år	 677 	 474 	 203 	 11 	 8 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot pojke under 18 år	 348 	 189 	 159 	 4 	 2 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre	 669 	 511 	 158 	 6 	 4 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre, närstående genom parrelation	 248 	 217 	 31 	 7 	 6 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 19 	 14 	 5 	 7 	 5 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 196 	 162 	 34 	 3 	 2 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot kvinna 18 år eller äldre, obekanta	 205 	 117 	 88 	 8 	 4 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre	 397 	 219 	 178 	 2 	 1 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre, närstående genom parrelation	 23 	 18 	 5 	- 	- 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre, närstående genom släktskap/familj	 3 	 3 	- 	- 	- 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 47 	 40 	 7 	 3 	 2 
4 kap. 6 c-d § BrB Olaga integritetsintrång 	Mot man 18 år eller äldre, obekanta	 324 	 158 	 166 	 2 	 1 
4 kap. 7 § BrB Ofredande 	Ofredande, totalt	55 136 	24 917 	30 219 	 7 	 3 
4 kap. 7 § BrB Ofredande 	Mot barn under 18 år	6 252 	3 519 	2 733 	 8 	 4 
4 kap. 7 § BrB Ofredande 	Mot flicka under 18 år	3 460 	1 980 	1 480 	 8 	 4 
4 kap. 7 § BrB Ofredande 	Mot pojke under 18 år	2 792 	1 539 	1 253 	 8 	 4 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre	29 463 	13 567 	15 896 	 7 	 3 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre, närstående genom parrelation	6 920 	5 159 	1 761 	 8 	 5 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	1 583 	 921 	 662 	 7 	 3 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	7 476 	3 474 	4 002 	 6 	 3 
4 kap. 7 § BrB Ofredande 	Mot kvinna 18 år eller äldre, obekanta	13 483 	4 012 	9 471 	 7 	 2 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre	16 762 	6 715 	10 047 	 6 	 2 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre, närstående genom parrelation	1 356 	 797 	 559 	 4 	 2 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre, närstående genom släktskap/familj	 801 	 423 	 378 	 6 	 2 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	4 240 	1 992 	2 248 	 5 	 2 
4 kap. 7 § BrB Ofredande 	Mot man 18 år eller äldre, obekanta	10 365 	3 503 	6 862 	 7 	 2 
4 kap. 7 § BrB Ofredande 	Mot grupp	2 659 	1 116 	1 543 	 6 	 2 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Uppmaning till självmord	 181 	 107 	 74 	 12 	 7 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot barn under 18 år	 79 	 37 	 42 	 5 	 3 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot flicka under 18 år	 59 	 32 	 27 	 6 	 3 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot pojke under 18 år	 20 	 5 	 15 	- 	- 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot kvinna 18 år eller äldre	 72 	 51 	 21 	 19 	 13 
4 kap. 7 a § 1 st. BrB Uppmaning till självmord	Mot man 18 år eller äldre	 30 	 19 	 11 	 5 	 3 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Oaktsam uppmaning till självmord 	 32 	 14 	 18 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot barn under 18 år	 20 	 6 	 14 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot flicka under 18 år	 15 	 6 	 9 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot pojke under 18 år	 5 	- 	 5 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot kvinna 18 år eller äldre	 6 	 4 	 2 	- 	- 
4 kap. 7 a § 1 st. BrB Oaktsam uppmaning till självmord	Mot man 18 år eller äldre	 6 	 4 	 2 	- 	- 
4 kap. 8-9 a § BrB Olovlig avlyssning m.m. 	Olovlig avlyssning m.m. totalt	1 336 	 323 	1 013 	 5 	 1 
4 kap. 9 c § BrB Dataintrång 	Dataintrång, totalt	11 849 	4 385 	7 464 	 28 	 9 
4 kap. 9 c § BrB Dataintrång 	 Genom överbelastningsattack	 252 	 196 	 56 	- 	- 
4 kap. 9 c § BrB Dataintrång 	 Med hjälp av skadlig kod i utpressningssyfte	 261 	 119 	 142 	- 	- 
4 kap. 9 c § BrB Dataintrång 	 Genom olovlig registerslagning	2 115 	1 698 	 417 	 69 	 50 
4 kap. 9 c § BrB Dataintrång 	 I sociala medier eller e-tjänster	6 239 	1 508 	4 731 	 3 	 1 
4 kap. 9 c § BrB Dataintrång 	Övrigt dataintrång	2 943 	 826 	2 117 	 3 	 1 
5 kap. BrB Ärekränkning	Ärekränkning, totalt	9 951 	2 399 	7 552 	 10 	 1 
5 kap. BrB Ärekränkning	Mot barn under 18 år	1 218 	 369 	 849 	 15 	 3 
5 kap. BrB Ärekränkning	Mot flicka under 18 år	 689 	 202 	 487 	 17 	 3 
5 kap. BrB Ärekränkning	Mot flicka under 18 år, internetrelaterat	 426 	 134 	 292 	 23 	 5 
5 kap. BrB Ärekränkning	Mot flicka under 18 år, ej internetrelaterat	 263 	 68 	 195 	 4 	 1 
5 kap. BrB Ärekränkning	Mot pojke under 18 år	 529 	 167 	 362 	 13 	 3 
5 kap. BrB Ärekränkning	Mot pojke under 18 år, internetrelaterat	 257 	 83 	 174 	 12 	 3 
5 kap. BrB Ärekränkning	Mot pojke under 18 år, ej internetrelaterat	 272 	 84 	 188 	 13 	 3 
5 kap. BrB Ärekränkning	Mot kvinna 18 år eller äldre	4 179 	 963 	3 216 	 6 	 1 
5 kap. BrB Ärekränkning	Mot kvinna 18 år eller äldre, internetrelaterat	1 752 	 447 	1 305 	 10 	 1 
5 kap. BrB Ärekränkning	Mot kvinna 18 år eller äldre, ej internetrelaterat	2 427 	 516 	1 911 	 3 	 0 
5 kap. BrB Ärekränkning	Mot man 18 år eller äldre	4 554 	1 067 	3 487 	 11 	 1 
5 kap. BrB Ärekränkning	Mot man 18 år eller äldre, internetrelaterat	1 884 	 494 	1 390 	 15 	 2 
5 kap. BrB Ärekränkning	Mot man 18 år eller äldre, ej internetrelaterat	2 670 	 573 	2 097 	 7 	 1 
6 kap. BrB Sexualbrott	Sexualbrott, totalt	24 674 	22 089 	2 585 	 22 	 20 
6 kap. 1, 1 a, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov, oaktsam våldtäkt 	Våldtäkt, våldtäkt mot barn, oaktsam våldtäkt, totalt	9 523 	9 089 	 434 	 15 	 15 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Våldtäkt, totalt	9 334 	8 904 	 430 	 16 	 15 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot barn under 15 år, totalt	2 536 	2 382 	 154 	 28 	 27 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, totalt	2 253 	2 136 	 117 	 30 	 28 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, totalt	2 124 	2 016 	 108 	 30 	 28 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, utomhus	 214 	 202 	 12 	 35 	 33 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, inomhus	1 910 	1 814 	 96 	 29 	 28 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, totalt	 129 	 120 	 9 	 30 	 27 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, utomhus	 26 	 24 	 2 	 21 	 19 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka under 15 år, inomhus	 103 	 96 	 7 	 32 	 29 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, totalt	 283 	 246 	 37 	 15 	 13 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, totalt	 260 	 228 	 32 	 14 	 13 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, utomhus	 17 	 15 	 2 	 20 	 18 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, inomhus	 243 	 213 	 30 	 14 	 12 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, totalt	 23 	 18 	 5 	 18 	 13 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, utomhus	 4 	 3 	 1 	- 	- 
6 kap. 1, 4 § BrB Försök till våldtäkt  inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke under 15 år, inomhus	 19 	 15 	 4 	 21 	 16 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot barn 15–17 år, totalt	1 234 	1 190 	 44 	 15 	 15 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, totalt	1 174 	1 138 	 36 	 16 	 15 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, totalt	1 124 	1 091 	 33 	 16 	 15 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, utomhus	 131 	 129 	 2 	 11 	 11 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, inomhus	 993 	 962 	 31 	 16 	 16 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, totalt	 50 	 47 	 3 	 17 	 16 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, utomhus	 13 	 12 	 1 	 8 	 8 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot flicka 15–17 år, inomhus	 37 	 35 	 2 	 20 	 19 
6 kap. 1, 4 § BrB Våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, totalt	 60 	 52 	 8 	 6 	 5 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, totalt	 54 	 47 	 7 	 6 	 6 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, utomhus	 13 	 11 	 2 	- 	- 
6 kap. 1, 4 § BrB Fullbordad våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, inomhus	 41 	 36 	 5 	 8 	 7 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, totalt	 6 	 5 	 1 	- 	- 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, utomhus	- 	- 	- 	- 	- 
6 kap. 1, 4 § BrB Försök till våldtäkt inkl. grov, våldtäkt mot barn inkl. grov	Mot pojke 15–17 år, inomhus	 6 	 5 	 1 	- 	- 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, totalt	5 263 	5 070 	 193 	 10 	 10 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom parrelation	1 934 	1 893 	 41 	 10 	 9 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom parrelation	1 838 	1 799 	 39 	 10 	 10 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom parrelation	 96 	 94 	 2 	 7 	 7 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 95 	 92 	 3 	 12 	 12 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 88 	 85 	 3 	 11 	 10 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 7 	 7 	- 	 29 	 29 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	1 934 	1 869 	 65 	 11 	 11 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	1 798 	1 739 	 59 	 11 	 11 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 101 	 97 	 4 	 6 	 6 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	1 697 	1 642 	 55 	 12 	 11 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 136 	 130 	 6 	 8 	 8 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 23 	 23 	- 	 13 	 13 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 113 	 107 	 6 	 7 	 7 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, totalt	1 280 	1 196 	 84 	 10 	 10 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta	1 125 	1 050 	 75 	 10 	 10 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, utomhus	 267 	 255 	 12 	 11 	 11 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, inomhus	 858 	 795 	 63 	 10 	 9 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, totalt	 155 	 146 	 9 	 12 	 11 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, utomhus	 72 	 67 	 5 	 13 	 13 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot kvinna 18 år eller äldre, obekanta, inomhus	 83 	 79 	 4 	 10 	 10 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, totalt	 301 	 262 	 39 	 5 	 4 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom parrelation	 49 	 45 	 4 	 4 	 4 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom parrelation	 42 	 40 	 2 	 3 	 2 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom parrelation	 7 	 5 	 2 	 20 	 14 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom släktskap/familj	 17 	 14 	 3 	- 	- 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom släktskap/familj	 16 	 13 	 3 	- 	- 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, närstående genom släktskap/familj	 1 	 1 	- 	- 	- 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 119 	 99 	 20 	 6 	 5 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 109 	 90 	 19 	 7 	 6 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 3 	 3 	- 	- 	- 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 106 	 87 	 19 	 7 	 6 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 10 	 9 	 1 	- 	- 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 1 	 1 	- 	- 	- 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 9 	 8 	 1 	- 	- 
6 kap. 1 § BrB Våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, totalt	 113 	 101 	 12 	 5 	 4 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta	 104 	 93 	 11 	 5 	 5 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, utomhus	 21 	 17 	 4 	- 	- 
6 kap. 1 § BrB Fullbordad våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, inomhus	 83 	 76 	 7 	 7 	 6 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta	 9 	 8 	 1 	- 	- 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, utomhus	 3 	 3 	- 	- 	- 
6 kap. 1 § BrB Försök till våldtäkt inkl. grov	Mot man 18 år eller äldre, obekanta, inomhus	 6 	 5 	 1 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Oaktsam våldtäkt, totalt	 189 	 185 	 4 	 1 	 1 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot flicka 15-17 år	 39 	 38 	 1 	 3 	 3 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot flicka 15-17 år, utomhus	 5 	 5 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot flicka 15-17 år, inomhus	 34 	 33 	 1 	 3 	 3 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot pojke 15-17 år	 2 	 2 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot pojke 15-17 år, utomhus	- 	- 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot pojke 15-17 år, inomhus	 2 	 2 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre	 136 	 134 	 2 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, närstående genom parrelation	 59 	 59 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 4 	 4 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 55 	 54 	 1 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	 2 	 2 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 53 	 52 	 1 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, obekanta	 18 	 17 	 1 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, obekanta, utomhus	 2 	 2 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot kvinna 18 år eller äldre, obekanta, inomhus	 16 	 15 	 1 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre	 12 	 11 	 1 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, närstående genom parrelation	 4 	 4 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre ,närstående genom släktskap/familj	- 	- 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 6 	 5 	 1 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, utomhus	- 	- 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap, inomhus	 6 	 5 	 1 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, obekanta	 2 	 2 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, obekanta, utomhus	- 	- 	- 	- 	- 
6 kap. 1 a § BrB Oaktsam våldtäkt 	Mot man 18 år eller äldre, obekanta, inomhus	 2 	 2 	- 	- 	- 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Sexuellt övergrepp, totalt	 355 	 336 	 19 	 20 	 19 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot flicka 15-17 år	 83 	 81 	 2 	 22 	 22 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot pojke 15-17 år	 10 	 10 	- 	 40 	 40 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre	 225 	 216 	 9 	 20 	 19 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre, närstående genom parrelation	 62 	 62 	- 	 11 	 11 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	 10 	 10 	- 	 10 	 10 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 94 	 91 	 3 	 23 	 22 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot kvinna 18 år eller äldre, obekanta	 59 	 53 	 6 	 26 	 24 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre	 37 	 29 	 8 	 3 	 3 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre, närstående genom parrelation	 5 	 4 	 1 	- 	- 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre, närstående genom släktskap/familj	 1 	 1 	- 	- 	- 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 13 	 10 	 3 	 10 	 8 
6 kap. 2 § BrB Sexuellt övergrepp inkl. grovt 	Mot man 18 år eller äldre, obekanta	 18 	 14 	 4 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Oaktsamt sexuellt övergrepp, totalt	 7 	 6 	 1 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot flicka 15-17 år	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot pojke 15-17 år	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldre	 5 	 4 	 1 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldr, närstående genom parrelation	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldre, närstående genom släktskap/familj	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldre, annan sorts relation eller bekantskap	 2 	 2 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot kvinna 18 år eller äldre, obekanta	 3 	 2 	 1 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre	 2 	 2 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre, närstående genom parrelation	 1 	 1 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre, närstående genom släktskap/familj	- 	- 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre, annan sorts relation eller bekantskap	 1 	 1 	- 	- 	- 
6 kap. 3 § BrB Oaktsamt sexuellt övergrepp 	Mot man 18 år eller äldre, obekanta	- 	- 	- 	- 	- 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Sexuellt utnyttjande av barn, totalt	 136 	 121 	 15 	 12 	 11 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Av flicka under 15 år	 101 	 93 	 8 	 16 	 15 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Av pojke under 15 år	 24 	 20 	 4 	- 	- 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Av flicka 15-17 år	 10 	 7 	 3 	- 	- 
6 kap. 5 § BrB Sexuellt utnyttjande av barn	Av pojke 15-17 år	 1 	 1 	- 	- 	- 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Sexuellt övergrepp mot barn, totalt	 835 	 778 	 57 	 28 	 26 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Mot flicka under 15 år	 621 	 581 	 40 	 30 	 28 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Mot pojke under 15 år	 195 	 180 	 15 	 22 	 20 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Mot flicka 15-17 år	 14 	 13 	 1 	 31 	 29 
6 kap. 6 § BrB Sexuellt övergrepp mot barn	Mot pojke 15-17 år	 5 	 4 	 1 	 25 	 20 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Samlag med avkomling eller syskon, totalt	 2 	- 	 2 	- 	- 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Med flicka 15-17 år	 1 	- 	 1 	- 	- 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Med pojke 15-17 år	- 	- 	- 	- 	- 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Med kvinna 18 år eller äldre	 1 	- 	 1 	- 	- 
6 kap. 7 § BrB Samlag med avkomling eller syskon	Med man 18 år eller äldre	- 	- 	- 	- 	- 
6 kap. 8 § BrB Utnyttjande av barn under 18 år för sexuell posering, inkl grov 	Utnyttjande av barn under 18 år för sexuell posering, totalt	2 254 	2 081 	 173 	 41 	 37 
6 kap. 9 § BrB Utnyttjande av barn under 18 år genom köp av sexuell handling.	Utnyttjande av barn under 18 år genom köp av sexuell handling.	 178 	 176 	 2 	 47 	 47 
6 kap. 10 § BrB Sexuellt ofredande	Sexuellt ofredande, totalt	9 815 	8 033 	1 782 	 20 	 16 
6 kap. 10 § BrB Sexuellt ofredande	Exhibitionism. Totalt	 190 	 138 	 52 	 31 	 22 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, totalt	9 625 	7 895 	1 730 	 20 	 16 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot barn under 15 år	3 048 	2 529 	 519 	 22 	 18 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot flicka under 15 år	2 580 	2 171 	 409 	 23 	 19 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, pojke under 15 år	 468 	 358 	 110 	 15 	 11 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot barn 15-17 år	1 254 	1 100 	 154 	 22 	 19 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot flicka 15-17 år	1 114 	 978 	 136 	 21 	 18 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot pojke 15-17 år	 140 	 122 	 18 	 26 	 22 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot person 18 år eller äldre	5 323 	4 266 	1 057 	 18 	 14 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot kvinna 18 år eller äldre	4 794 	3 887 	 907 	 19 	 14 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot kvinna 18 år eller äldre, närstående genom parrela	 355 	 340 	 15 	 22 	 21 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot kvinna 18 år eller äldre, närstående genom släktsk	 85 	 79 	 6 	 22 	 20 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande,  mot kvinna 18 år eller äldrea, annan sorts relation e	1 362 	1 210 	 152 	 15 	 13 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande,  mot kvinna 18 år eller äldre, obekanta	2 984 	2 250 	 734 	 20 	 14 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre	 529 	 379 	 150 	 18 	 12 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre, närstående genom parrelatio	 20 	 16 	 4 	 13 	 10 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre, närstående genom släktskap/	 18 	 14 	 4 	 29 	 22 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre, annan sorts relation eller 	 152 	 121 	 31 	 9 	 7 
6 kap. 10 § BrB Sexuellt ofredande	Annat sexuellt ofredande, mot man 18 år eller äldre, obekanta	 339 	 228 	 111 	 22 	 14 
6 kap. 10 a § BrB Kontakt för att träffa ett barn i sexuellt syfte	Kontakt för att träffa ett barn i sexuellt syfte, totalt	 227 	 198 	 29 	 10 	 8 
6 kap. 10 a § BrB Kontakt för att träffa ett barn i sexuellt syfte	Med flicka under 15 år	 183 	 160 	 23 	 8 	 7 
6 kap. 10 a § BrB Kontakt för att träffa ett barn i sexuellt syfte	Med pojke under 15 år	 44 	 38 	 6 	 18 	 16 
6 kap. 11 § BrB Köp av sexuell tjänst	Köp av sexuell tjänst, totalt	1 157 	1 103 	 54 	 61 	 56 
6 kap. 12 § BrB Koppleri, grovt koppleri	Koppleri, totalt	 184 	 167 	 17 	 10 	 9 
7 kap. Brott mot familj	Brott mot familj, totalt	1 428 	 671 	 757 	 5 	 2 
7 kap. 4 § BrB Egenmäktighet med barn	Egenmäktighet med barn	1 413 	 659 	 754 	 5 	 2 
7 kap. 1-3 § BrB Övriga brott mot familj	Övriga brott	 15 	 12 	 3 	- 	- 
8-12 kap. Brott mot förmögenhet	Brott mot förmögenhet, totalt	863 837 	224 661 	639 176 	 19 	 4 
8 kap. Stöld, rån m.m.	Stöld, rån m.m. totalt	383 003 	101 234 	281 769 	 25 	 6 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Tillgrepp av motordrivet fortskaffningsmedel, totalt	16 192 	5 601 	10 591 	 9 	 3 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av bil	7 989 	3 173 	4 816 	 13 	 5 
8 kap. 7 § BrB Försök till tillgrepp av motordrivet fortskaffningsmedel	Av bil	 955 	 229 	 726 	 15 	 3 
8 kap. 7 § BrB Fullbordat tillgrepp av motordrivet fortskaffningsmedel	Av bil, totalt	7 034 	2 944 	4 090 	 13 	 5 
8 kap. 7 § BrB Fullbordat tillgrepp av motordrivet fortskaffningsmedel	Av bil avsedd för yrkesmässig godsbefordran (Lastbil, släpfordon, järnvägsvagn e	 963 	 273 	 690 	 7 	 2 
8 kap. 7 § BrB Fullbordat tillgrepp av motordrivet fortskaffningsmedel	Av övriga bilar	6 071 	2 671 	3 400 	 13 	 5 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av motorcykel	1 670 	 530 	1 140 	 4 	 1 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av  moped	3 765 	1 134 	2 631 	 4 	 1 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av båt	 691 	 182 	 509 	 4 	 1 
8 kap. 7 § BrB Tillgrepp av motordrivet fortskaffningsmedel	Av annat fordon	2 077 	 582 	1 495 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Tillgrepp av icke motordrivet fortskaffningsmedel, totalt	65 821 	5 453 	60 368 	 4 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av cykel	57 971 	4 620 	53 351 	 4 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av elcykel	14 784 	1 794 	12 990 	 5 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av annan cykel än elcykel	43 166 	2 805 	40 361 	 4 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av båt	 369 	 63 	 306 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av annat icke motordrivet fordon	7 481 	 770 	6 711 	 3 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld, inte av skjutvapen, totalt	70 239 	18 731 	51 508 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i skola, kyrka, idrottsanläggning och lokal för kultur, totalt	3 289 	 901 	2 388 	 7 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i skola, bibliotek, fritidshem, m.m.	2 195 	 624 	1 571 	 8 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld idrottsanläggning, kyrka, museum m.m.	1 094 	 277 	 817 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i hotell, kafé, restaurang, biograf, teater, nöjes-, samlings- och	2 306 	 810 	1 496 	 14 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i butik, apotek, kiosk m.m.,totalt	2 303 	1 383 	 920 	 24 	 13 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i butik, varuhus o.d.	1 975 	1 239 	 736 	 24 	 14 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i kiosk, automat och skyltskåp	 239 	 88 	 151 	 15 	 5 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i apotek och läkemedelsförråd	 89 	 56 	 33 	 30 	 17 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i industri, verkstad, byggplats, lager, garage, hamnområde, kontor	16 480 	4 228 	12 252 	 8 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i kontor	2 332 	 851 	1 481 	 10 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i industri, verkstad, byggplats, lager, garage, hamnområde, ej i k	14 148 	3 377 	10 771 	 8 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i bostad, fritidshus m.m., totalt	35 589 	8 802 	26 787 	 7 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i bostad (lägenhet, villa)	11 050 	6 296 	4 754 	 7 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i villa, radhus o.d., totalt	5 923 	3 799 	2 124 	 7 	 5 
8 kap. 1, 2, 4 § BrB Fullbordad stöld inkl. grov	Inbrottsstöld i villa, radhus o.d.	4 489 	3 282 	1 207 	 8 	 5 
8 kap. 1, 2, 4 § BrB Försök till stöld inkl. grov	Inbrottsstöld i villa, radhus o.d.	1 434 	 517 	 917 	 7 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i lägenhet, totalt	5 127 	2 497 	2 630 	 6 	 3 
8 kap. 1, 2, 4 § BrB Fullbordad stöld inkl. grov	Inbrottsstöld i lägenhet	3 595 	2 080 	1 515 	 6 	 3 
8 kap. 1, 2, 4 § BrB Försök till stöld inkl. grov	Inbrottsstöld i lägenhet	1 532 	 417 	1 115 	 5 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i källare och på vind	21 617 	1 906 	19 711 	 5 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i fritidshus	2 922 	 600 	2 322 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Inbrottsstöld i övriga platser	10 272 	2 607 	7 665 	 8 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen	 116 	 53 	 63 	 6 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen från militär	 3 	 2 	 1 	- 	- 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen från skytteo	 7 	 4 	 3 	 50 	 29 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen från bostad 	 64 	 31 	 33 	- 	- 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Stöld (även inbrottsstöld) av skjutvapen ammunition och sprängämnen från övriga 	 42 	 16 	 26 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld, totalt	207 212 	61 079 	146 133 	 36 	 9 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Från fordon m.m.	56 632 	6 228 	50 404 	 7 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Ur och från motordrivet fordon, totalt	46 516 	5 042 	41 474 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Ur och från motordrivet fordon, av fast interiör/exteriör	22 991 	2 109 	20 882 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Ur och från motordrivet fordon, av andra föremål än fast interiör/exteriör	23 524 	2 932 	20 592 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Från cykel	3 887 	 387 	3 500 	 6 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Från båt (annat än båtmotor)	1 971 	 249 	1 722 	 9 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av båtmotor	 940 	 139 	 801 	 7 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Under yrkesmässig transport, totalt	3 318 	 411 	2 907 	 11 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Under yrkesmässig transport, avsedd för yrkesmässig godsbefordran (lastbil, släp	 989 	 240 	 749 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Under yrkesmässig transport, avsedd för övrig yrkesmässig transport	2 329 	 171 	2 158 	 13 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av drivmedel, totalt	6 751 	1 639 	5 112 	 9 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av diesel	3 929 	 776 	3 153 	 13 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av diesel ur större fordonstank (även entreprenadmaskin m.m.)	3 671 	 692 	2 979 	 14 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Av diesel ur större tankar (ej kopplade till fordon)	 258 	 84 	 174 	 8 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld av drivmedel (även diesel), totalt	2 822 	 863 	1 959 	 5 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld av drivmedel genom smitning (från bensinstation)	 776 	 601 	 175 	 5 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld av drivmedel, ej genom smitning	2 046 	 262 	1 784 	 6 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I skola, kyrka, idrottsanläggning och lokal för kultur, totalt	9 502 	 929 	8 573 	 13 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I skola, bibliotek, fritidshem m.m.	4 948 	 383 	4 565 	 11 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I idrottsanläggning, kyrka, museum m.m.	4 554 	 546 	4 008 	 15 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I hotell, kafé, restaurang, biograf, teater, nöjes-, samlings- och ungdomslokal 	7 283 	1 288 	5 995 	 16 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I butik, varuhus o.d.	47 462 	34 373 	13 089 	 59 	 33 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I industri, verkstad, byggplats, lager, hamnområde, kontor m.m., totalt	5 005 	1 408 	3 597 	 43 	 11 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I kontor	1 481 	 378 	1 103 	 22 	 5 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I industri, verkstad, byggplats, lager, hamnområde, ej i kontor	3 524 	1 030 	2 494 	 51 	 14 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I bostad m.m.	12 496 	3 796 	8 700 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I bostad (lägenhet, villa), totalt	10 972 	3 665 	7 307 	 6 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I bostad mot äldre eller funktionsnedsatt	4 790 	1 697 	3 093 	 8 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I bostad mot ej äldre eller funktionsnedsatt	6 182 	1 968 	4 214 	 5 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	I källare och på vind	1 524 	 131 	1 393 	 6 	 0 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Väskryckning (inte rån), totalt	 884 	 297 	 587 	 9 	 3 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Väskryckning mot äldre eller funktionsnedsatt	 187 	 96 	 91 	 13 	 6 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Väskryckning mot ej äldre eller funktionsnedsatt	 697 	 201 	 496 	 7 	 2 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Fickstöld, totalt	20 303 	3 202 	17 101 	 8 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Fickstöld mot äldre eller funktionsnedsatt	1 926 	 645 	1 281 	 12 	 4 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Fickstöld mot ej äldre eller funktionsnedsatt	18 377 	2 557 	15 820 	 7 	 1 
8 kap. 1, 2, 4 § BrB Stöld inkl. grov	Övrig stöld	40 894 	7 919 	32 975 	 13 	 2 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån, totalt	6 381 	5 177 	1 204 	 17 	 14 
8 kap. 5, 6 § BrB Rån inkl. grovt	Bankrån, totalt	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Bankrån med användning av skjutvapen	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Bankrån utan användning av skjutvapen	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Butiksrån, totalt	 354 	 346 	 8 	 39 	 38 
8 kap. 5, 6 § BrB Rån inkl. grovt	Butiksrån med användning av skjutvapen	 74 	 74 	- 	 45 	 45 
8 kap. 5, 6 § BrB Rån inkl. grovt	Butiksrån utan användning av skjutvapen	 280 	 272 	 8 	 38 	 36 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdebefordran, totalt	 1 	- 	 1 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdebefordran med användning av skjutvapen	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdebefordran utan användning av skjutvapen	 1 	- 	 1 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdetransport, totalt	 1 	- 	 1 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdetransport med användning av skjutvapen	- 	- 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot värdetransport utan användning av skjutvapen	 1 	- 	 1 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Taxirån, totalt	 11 	 9 	 2 	 22 	 18 
8 kap. 5, 6 § BrB Rån inkl. grovt	Taxirån med användning av skjutvapen	 1 	 1 	- 	- 	- 
8 kap. 5, 6 § BrB Rån inkl. grovt	Taxirån utan användning av skjutvapen	 10 	 8 	 2 	 25 	 20 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson (äldre eller funktionsnedsatt), totalt	 498 	 394 	 104 	 23 	 18 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson (äldre eller funktionsnedsatt) med användning av skjutvapen	 89 	 77 	 12 	 25 	 21 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson (äldre eller funktionsnedsatt) utan användning av skjutvape	 409 	 317 	 92 	 23 	 18 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson (ej äldre eller funktionsnedsatt), totalt	4 862 	3 928 	 934 	 15 	 12 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år, totalt	1 375 	1 193 	 182 	 17 	 15 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år utomhus, totalt	1 230 	1 066 	 164 	 17 	 14 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år utomhus med användning av skjutvapen	 78 	 70 	 8 	 24 	 22 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år utomhus utan användning av skjutvapen	1 152 	 996 	 156 	 16 	 14 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år inomhus, totalt	 145 	 127 	 18 	 19 	 17 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år inomhus med användning av skjutvapen	 11 	 11 	- 	 27 	 27 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson under 18 år inomhus utan användning av skjutvapen	 134 	 116 	 18 	 18 	 16 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre, totalt	3 487 	2 735 	 752 	 14 	 11 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre utomhus, totalt	2 832 	2 155 	 677 	 11 	 9 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre utomhus med användning av skjutvapen	 321 	 245 	 76 	 14 	 11 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre utomhus utan användning av skjutvapen	2 511 	1 910 	 601 	 11 	 8 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre inomhus, totalt	 655 	 580 	 75 	 24 	 22 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre inomhus med användning av skjutvapen	 117 	 101 	 16 	 25 	 21 
8 kap. 5, 6 § BrB Rån inkl. grovt	Rån mot privatperson 18 år eller äldre inomhus utan användning av skjutvapen	 538 	 479 	 59 	 24 	 22 
8 kap. 5, 6 § BrB Rån inkl. grovt	Övriga rån, totalt	 654 	 500 	 154 	 17 	 13 
8 kap. 5, 6 § BrB Rån inkl. grovt	Övriga rån med användning av skjutvapen	 81 	 67 	 14 	 15 	 12 
8 kap. 5, 6 § BrB Rån inkl. grovt	Övriga rån utan användning av skjutvapen	 573 	 433 	 140 	 18 	 13 
8 kap. 8-10 § BrB Övriga brott mot 8 kap. 	Övriga brott mot 8 kap.	17 042 	5 140 	11 902 	 5 	 1 
9 kap. BrB Bedrägeri och annan oredlighet	Bedrägeri och annan oredlighet, totalt	239 253 	85 986 	153 267 	 9 	 3 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Bedrägeri, bedrägligt beteende, totalt	223 067 	73 899 	149 168 	 8 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Genom social manipulation, totalt	46 127 	19 097 	27 030 	 4 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Romansbedrägeri, totalt	1 385 	1 010 	 375 	 2 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Romansbedrägeri mot äldre eller funktionsnedsatt	 564 	 419 	 145 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Romansbedrägeri ej mot äldre eller funktionsnedsatt	 821 	 591 	 230 	 3 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Investeringsbedrägeri, totalt	3 898 	2 476 	1 422 	 6 	 4 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Investeringsbedrägeri mot äldre/funktionsnedsatt	1 073 	 684 	 389 	- 	- 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Investeringsbedrägeri ej mot äldre/funktionsnedsatt	2 825 	1 792 	1 033 	 8 	 5 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Befogenhetsbedrägeri, totalt	11 853 	3 653 	8 200 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Befogenhetsbedrägeri mot äldre/funktionsnedsatt	7 986 	2 643 	5 343 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Befogenhetsbedrägeri ej mot äldre/funktionsnedsatt	3 867 	1 010 	2 857 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Genom social manipulation av  annan typ, totalt	28 991 	11 958 	17 033 	 4 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Genom social manipulation av  annan typ mot äldre/funktionsnedsatt	16 237 	6 283 	9 954 	 3 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Genom social manipulation av  annan typ ej mot äldre/funktionsnedsatt	12 754 	5 675 	7 079 	 6 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Identitetsbedrägeri, totalt	11 321 	5 027 	6 294 	 6 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Identitetsbedrägeri mot äldre/funktionsnedsatt	2 214 	1 004 	1 210 	 19 	 8 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Identitetsbedrägeri ej mot äldre/funktionsnedsatt	9 107 	4 023 	5 084 	 3 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Fakturabedrägeri, totalt	8 002 	2 268 	5 734 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Fakturabedrägeri mot äldre/funktionsnedsatt	2 079 	 474 	1 605 	 0 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Fakturabedrägeri ej mot äldre/funktionsnedsatt	5 923 	1 794 	4 129 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri (bank, betal- och kreditkort), totalt	103 596 	15 272 	88 324 	 5 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri med fysiskt kort, totalt	14 590 	8 519 	6 071 	 9 	 5 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri med fysiskt kort mot äldre/funktionsnedsatt	3 154 	2 445 	 709 	 19 	 13 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri med fysiskt kort ej mot äldre/funktionsnedsatt	11 436 	6 074 	5 362 	 5 	 3 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Kortbedrägeri utan fysiskt kort, totalt	89 006 	6 753 	82 253 	 1 	 0 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Annonsbedrägeri, totalt	26 436 	18 246 	8 190 	 15 	 5 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Annonsbedrägeri mot äldre/funktionsnedsatt	1 461 	 710 	 751 	 5 	 1 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Annonsbedrägeri, ej mot äldre/funktionsnedsatt	24 975 	17 536 	7 439 	 16 	 5 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Försäkringsbedrägeri	 598 	 571 	 27 	 16 	 10 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Snyltningsbrott	1 129 	 823 	 306 	 5 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Grovt fordringsbedrägeri	 7 	 4 	 3 	- 	- 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Övrigt bedrägeri, totalt	25 409 	12 156 	13 253 	 13 	 5 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Övrigt bedrägeri mot äldre/funktionsnedsatt	6 327 	2 290 	4 037 	 7 	 2 
9 kap. 1-3 § BrB Bedrägeri inkl. grovt. bedrägligt beteende	Övrigt bedrägeri ej mot äldre/funktionsnedsatt	19 079 	9 864 	9 215 	 15 	 6 
9 kap. 3 a § BrB Subventionsmissbruk 	Subventionsmissbruk, totalt	 1 	- 	 1 	- 	- 
9 kap. 3 c § BrB Olovlig befattning med betalningsverktyg	Olovlig befattning med betalningsverktyg, totalt	 390 	 265 	 125 	 6 	 3 
9 kap. 4 § BrB Utpressning 	Utpressning, totalt	8 522 	5 175 	3 347 	 10 	 6 
9 kap. 5 § BrB Ocker 	Ocker, totalt	 77 	 56 	 21 	 9 	 6 
9 kap. 6, 7 § BrB Häleri, häleriförseelse 	Häleri, häleriförseelse, totalt	6 623 	6 390 	 233 	 23 	 18 
9 kap. 6 § BrB Häleri, häleriförseelse, inkl. grovt	Häleri	2 380 	2 320 	 60 	 29 	 23 
9 kap. 7 § BrB Häleri, häleriförseelse 	Häleriförseelse	4 243 	4 070 	 173 	 20 	 15 
9 kap. 8-10 § Oredligt förfarande, svindleri, ockerpantning 	Oredligt förfarande, svindleri, ockerpantning, totalt	 573 	 201 	 372 	 7 	 2 
10 kap. BrB Förskingring och annan trolöshet	Förskingring och annan trolöshet, totalt	14 088 	8 943 	5 145 	 20 	 11 
10 kap. 1-3 § BrB Förskingring, grov förskingring, undandräkt	Förskingring, undandräkt, totalt	1 355 	1 236 	 119 	 37 	 31 
10 kap. 3 § BrB Olovligt förfogande	Olovligt förfogande, totalt	9 130 	4 665 	4 465 	 3 	 1 
10 kap. 5 § BrB Trolöshet mot huvudman 	Trolöshet mot huvudman, totalt	1 468 	1 322 	 146 	 53 	 47 
10 kap. 5 a, 5 c § BrB Tagande av muta inkl. grov 	Tagande av muta	 389 	 336 	 53 	 37 	 24 
10 kap. 5 b, 5 c § BrB Givande av muta inkl. grov	Givande av muta	 180 	 144 	 36 	 53 	 42 
10 kap. 5 d, 5 e § BrB Handel med inflytande och/eller vårdslös finansiering av mutbrott 	Handel med inflytande och/eller vårdslös finansiering av mutbrott 	 8 	- 	 8 	- 	- 
10 kap. 7 § BrB Olovligt brukande 	Olovligt brukande, totalt	1 236 	 971 	 265 	 11 	 6 
10 kap. 8 § BrB Fyndförseelse	Fyndförseelse, totalt	 149 	 106 	 43 	 28 	 12 
10 kap. 6 § BrB Behörighetsmissbruk	Behörighetsmissbruk, totalt	 173 	 163 	 10 	 13 	 12 
11 kap. BrB Brott mot borgenärer m.m.	Brott mot borgenärer m.m., totalt	8 202 	7 934 	 268 	 46 	 36 
11 kap. 1, 2  § BrB 	Oredlighet mot borgenärer	 172 	 158 	 14 	 18 	 13 
11 kap. 2 § BrB 	Försvårande av konkurs eller exekutiv förrättning 	 7 	 6 	 1 	- 	- 
11 kap. 3  § BrB 	Vårdslöshet mot borgenärer	 9 	 6 	 3 	- 	- 
11 kap. 4 § BrB 	Otillbörligt gynnande av borgenär	 17 	 15 	 2 	 8 	 6 
11 kap. 5 § BrB 	Bokföringsbrott 	7 997 	7 749 	 248 	 47 	 36 
12 kap. BrB Skadegörelsebrott	Skadegörelsebrott, totalt	219 291 	20 564 	198 727 	 16 	 1 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Skadegörelse, åverkan, totalt	219 261 	20 544 	198 717 	 16 	 1 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Genom brand (även på motorfordon), totalt	4 628 	1 353 	3 275 	 5 	 1 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Bilbrand eller brand på andra motorfordon	1 824 	 568 	1 256 	 3 	 1 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Brand på annat än motorfordon	2 804 	 785 	2 019 	 7 	 2 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	På motorfordon (inte genom brand)	28 493 	3 956 	24 537 	 17 	 2 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Klotter mot kollektivtrafik	34 926 	 924 	34 002 	 12 	 0 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Övrigt klotter, ej mot kollektivtrafik	53 971 	1 326 	52 645 	 25 	 0 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Mot stat, kommun, landsting (ej klotter)	57 327 	1 612 	55 715 	 18 	 0 
12 kap. 1-3 § BrB Skadegörelse, grov skadegörelse, åverkan 	Annan skadegörelse (ej klotter)	39 916 	11 373 	28 543 	 16 	 4 
12 kap. 4 § BrB Tagande av olovlig väg	Tagande av olovlig väg 	 30 	 20 	 10 	 5 	 3 
13-15 kap. BrB Brott mot allmänheten	Brott mot allmänheten, totalt	15 772 	11 975 	3 797 	 17 	 12 
13 kap. BrB Allmänfarliga brott	Allmänfarliga brott, totalt	4 760 	3 355 	1 405 	 13 	 9 
13 kap 1, 2 § BrB Mordbrand inkl. grov	Mordbrand	1 235 	1 030 	 205 	 13 	 11 
13 kap 3 § BrB Allmänfarlig ödeläggelse	Allmänfarlig ödeläggelse, totalt	 350 	 323 	 27 	 17 	 16 
13 kap 3 § BrB Allmänfarlig ödeläggelse	Genom sprängning	 319 	 307 	 12 	 18 	 17 
14 kap 3 § BrB Allmänfarlig ödeläggelse	Genom sprängning, fullbordat brott	 132 	 128 	 4 	 21 	 20 
15 kap 3 § BrB Allmänfarlig ödeläggelse	Genom sprängning, försök med mera till brott	 183 	 175 	 8 	 15 	 14 
13 kap 3 § BrB Allmänfarlig ödeläggelse	Ej genom sprängning	 31 	 16 	 15 	 6 	 3 
13 kap 5 c § BrB Sabotage mot blåljusverksamhet inkl. grovt 	Sabotage mot blåljusverksamhet, totalt	 383 	 320 	 63 	 38 	 30 
13 kap. 6 § BrB Allmänfarlig vårdslöshet	Allmänfarlig vårdslöshet, totalt	2 450 	1 549 	 901 	 6 	 4 
13 kap. 6 § BrB Allmänfarlig vårdslöshet	Vållande av brand	2 095 	1 348 	 747 	 6 	 4 
13 kap. 6 § BrB Allmänfarlig vårdslöshet	Annan allmänfarlig vårdslöshet	 355 	 201 	 154 	 9 	 5 
13 kap. 7-9 § BrB Spridande av gift eller smitta förgöring, vårdslöshet med gift eller smittämne 	Spridande av gift eller smitta förgöring, vårdslöshet med gift eller smittämne, 	 105 	 38 	 67 	- 	- 
13 kap. 3-5 b, 10 Övriga brott mot 13 kap.	Övriga brott mot 13 kap.	 236 	 94 	 142 	 23 	 9 
14 kap. BrB Förfalskningsbrott	Förfalskningsbrott, totalt	6 441 	5 484 	 957 	 19 	 15 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Urkundsförfalskning m.m., totalt	4 222 	3 557 	 665 	 25 	 20 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Check	 3 	 3 	- 	- 	- 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Legitimationshandling	 915 	 876 	 39 	 45 	 41 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Handling som  använts för illegal invandring (pass, resedokument, uppehållstills	 271 	 265 	 6 	 40 	 38 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Övrig legitimationshandling	 644 	 611 	 33 	 48 	 42 
14 kap. 1-4, 10 § BrB Urkundsförfalskning m.m.	Övrig urkundsförfalskning	3 304 	2 678 	 626 	 18 	 14 
14 kap. 5, 10 § BrB Signaturförfalskning	Signaturförfalskning, totalt	 35 	 32 	 3 	- 	- 
14 kap. 6, 7, 10, 11 § BrB Penningförfalskning m.m. 	Penningförfalskning m.m., totalt	1 205 	1 163 	 42 	 2 	 2 
14 kap. 8-11 § BrB Övriga brott	Övriga brott mot 14 kap.	 979 	 732 	 247 	 16 	 9 
15 kap. Mened, falskt åtal m.m.	15 kap. Mened, falskt åtal m.m. totalt	4 571 	3 136 	1 435 	 18 	 12 
15 kap. 1-3 § BrB Mened, osann partsutsaga m.m.	Mened, osann partsutsaga m.m., totalt	 313 	 207 	 106 	 18 	 12 
15 kap. 7 § BrB Falsk tillvitelse, vårdslös tillvitelse	Falsk tillvitelse, vårdslös tillvitelse, totalt	2 338 	1 373 	 965 	 7 	 4 
15 kap. 11, 12 § BrB Osant intygande, brukande av osann urkund	Missbruk av urkund avs. pass och övr. resedokument samt utfärdat pass på falska 	 549 	 517 	 32 	 45 	 36 
15 kap. 4 a, 4 b, 5, 6, 8-13 § BrB Övriga brott	Övriga brott mot 15 kap.	1 371 	1 039 	 332 	 22 	 15 
16-20 kap. BrB Brott mot staten	Brott mot staten, totalt	52 049 	35 816 	16 233 	 25 	 16 
16 kap. BrB Brott mot allmän ordning	Brott mot allmän ordning, totalt	18 374 	14 315 	4 059 	 11 	 9 
16 kap. 15 § 1, 2 st. BrB Falskt larm	Falskt larm, totalt	 732 	 559 	 173 	 24 	 14 
16 kap. 15 § 3 st. BrB Missbruk av larmanordning	Missbruk av larmanordning, totalt	 147 	 74 	 73 	 13 	 5 
16 kap. 8 § BrB Hets mot folkgrupp	Hets mot folkgrupp, totalt	 922 	 360 	 562 	 19 	 7 
16 kap. 9 § BrB Olaga diskriminering	Olaga diskriminering, totalt	 64 	 26 	 38 	- 	- 
16 kap. 10 a § BrB Barnpornografibrott 	Barnpornografibrott, totalt	14 445 	11 864 	2 581 	 9 	 7 
16 kap. 13 § BrB Djurplågeri 	Djurplågeri, totalt	1 546 	1 046 	 500 	 24 	 15 
16 kap. 1-6, 10-14 § BrB Övriga brott 	Övriga brott mot 16 kap. 	 518 	 386 	 132 	 49 	 30 
17 kap. BrB Brott mot allmän verksamhet	Brott mot allmän verksamhet, totalt	24 523 	19 543 	4 980 	 39 	 27 
17 kap. 1, 5 § BrB Våld mot tjänsteman o.d.	Våld mot tjänsteman, totalt	3 988 	3 762 	 226 	 45 	 37 
17 kap. 1 § BrB Våld mot tjänsteman	Mot polis	1 311 	1 244 	 67 	 60 	 53 
17 kap. 1 § BrB Våld mot tjänsteman	Mot ordningsvakt 	1 259 	1 209 	 50 	 39 	 35 
17 kap. 1, 5 § BrB Våld mot tjänsteman o.d.	Mot annan person	1 418 	1 309 	 109 	 34 	 26 
17 kap. 1, 5 § BrB Hot m.m. mot tjänsteman o.d.	Hot m.m. mot tjänsteman o.d.	6 410 	5 962 	 448 	 41 	 32 
17 kap. 4, 5 § BrB Våldsamt motstånd	Våldsamt motstånd, totalt	4 843 	4 670 	 173 	 64 	 43 
17 kap. 10 § BrB Övergrepp i rättssak	Övergrepp i rättssak, totalt	4 590 	4 217 	 373 	 18 	 16 
17 kap. BrB 8, 9, 11-13, 15 § Övriga brott	Övriga brott mot 17 kap.	4 692 	 932 	3 760 	 18 	 3 
18 kap. BrB Högmålsbrott	Högmålsbrott, totalt	 14 	 5 	 9 	- 	- 
19 kap. BrB Brott mot rikets säkerhet	Brott mot rikets säkerhet, totalt	 15 	 11 	 4 	 73 	 53 
20 kap. BrB Tjänstefel m.m.	Tjänstefel m.m. totalt	9 123 	1 942 	7 181 	 2 	 0 
20 kap. 1 § BrB Tjänstefel inkl.grovt 	Tjänstefel	8 791 	1 738 	7 053 	 2 	 0 
20 kap. 3 § BrB Brott mot tystnadsplikt	Brott mot tystnadsplikt	 332 	 204 	 128 	 7 	 4 
22 kap. BrB Om landsförräderi m.m.	Om landsförräderi m.m. totalt	 22 	 12 	 10 	- 	- 
Brott mot specialstraffrättsliga författningar	Brott mot specialstraffrättsliga författningar, totalt	287 025 	262 763 	24 262 	 49 	 39 
Lag (1951:649) om straff för vissa trafikbrott	Trafikbrottslagen, totalt	67 357 	50 985 	16 372 	 64 	 45 
1 § 2 st. TBL Grov vårdslöshet i trafik 	Grov vårdslöshet i trafik, totalt	 885 	 845 	 40 	 60 	 53 
3 § 1 st. TBL Olovlig  körning, grov olovlig körning 	Olovlig  körning, totalt	20 352 	19 921 	 431 	 84 	 75 
4, 4 a § TBL Rattfylleri, grovt rattfylleri	Rattfylleri, totalt	10 707 	10 617 	 90 	 76 	 74 
4 § 2 st. TBL Rattfylleri under påverkan av narkotika	Rattfylleri under påverkan av narkotika, totalt	13 103 	12 957 	 146 	 49 	 46 
5 § TBL Smitning, trafikolycka	Smitning, trafikolycka, totalt	21 184 	5 548 	15 636 	 11 	 3 
5 § TBL Smitning, trafikolycka	Med betydande materialskador, personskador eller dödligt utfall	1 426 	 618 	 808 	 19 	 8 
5 § TBL Smitning, trafikolycka	Med inga eller lindriga material- och personskador	19 758 	4 930 	14 828 	 10 	 2 
3 § 2 och 3 st. TBL Övriga brott 	Övriga brott mot trafikbrottslagen	1 126 	1 097 	 29 	 49 	 43 
Narkotikastrafflag (1968:64)	Narkotikastrafflagen, totalt	114 247 	112 824 	1 423 	 45 	 39 
1-3 a § NSL Narkotikabrott inkl. grovt, vårdslöshet med narkotika	Överlåtelse m.m. 	8 689 	8 386 	 303 	 28 	 26 
1-3 § NSL Narkotikabrott inkl. grovt	Innehav 	59 373 	58 927 	 446 	 44 	 38 
1-3 § NSL Narkotikabrott inkl. grovt	Eget bruk	45 818 	45 149 	 669 	 50 	 44 
1-3 § NSL Narkotikabrott inkl. grovt	Framställning	 367 	 362 	 5 	 50 	 45 
Miljöbalken (1998:808)	Miljöbalken, totalt	4 231 	2 509 	1 722 	 7 	 3 
29 kap. 1 § MB Miljöbrott inkl. grovt	Miljöbrott	 953 	 586 	 367 	 8 	 5 
29 kap. 2, 2 a § MB Brott eller förseelse mot områdesskydd 	Brott eller förseelse mot områdesskydd	 512 	 423 	 89 	 12 	 8 
29 kap. 2 b § MB Artskydd inkl grovt 	Artskydd	 145 	 133 	 12 	 6 	 5 
29 kap. 2 c § MB Otillåten hantering av invasiv främmande art	Otillåten hantering av invasiv främmande art 	 3 	 2 	 1 	- 	- 
29 kap. 3, 3 a § MB Miljöfarlig eller olovlig kemikaliehantering 	Miljöfarlig eller olovlig kemikaliehantering 	 173 	 156 	 17 	- 	- 
29 kap. 1 § MB Otillåten miljöverksamhet	Otillåten miljöverksamhet 	 781 	 700 	 81 	 4 	 2 
29 kap. 4 a § 1–15 p MB Otillåten avfallstransport	Otillåten avfallstransport 	 83 	 77 	 6 	 9 	 6 
29 kap. 5 § MB Försvårande av miljökontroll	Försvårande av miljökontroll 	 81 	 73 	 8 	 2 	 1 
29 kap. 6 § MB Bristfällig miljöinformation	Bristfällig miljöinformation	 60 	 50 	 10 	- 	- 
29 kap. 7 § MB Nedskräpning	Nedskräpning	1 383 	 265 	1 118 	 9 	 1 
29 kap. 8 § MB Övriga brott mot miljöbalken	Övriga brott mot miljöbalken 	 57 	 44 	 13 	 3 	 2 
Skattebrottslag (1971:69) 2-10 §	Skattebrottslagen 	4 982 	4 857 	 125 	 22 	 15 
4 § SBL Grovt skattebrott	Grovt skattebrott, totalt	1 439 	1 430 	 9 	 25 	 19 
SBL 2-4 § Skattebrott, skatteförseelse, grovt skattebrott	Avseende mervärdesskattelagen 	 756 	 735 	 21 	 19 	 12 
SBL 2-4 § Skattebrott, skatteförseelse, grovt skattebrott	Avseende övrig skattelagstiftninig 	1 820 	1 768 	 52 	 20 	 14 
SBL 5 § Vårdslös skatteuppgift 	Vårdslös skatteuppgift	 5 	 4 	 1 	 75 	 60 
SBL 6 § Skatteavdragsbrott 	Skatteavdragsbrott	 9 	 5 	 4 	- 	- 
SBL 7, 8 § Skatteredovisningsbrott, vårdslös skatteredovisning 	Skatteredovisningsbrott, vårdslös skatteredovisning 	 53 	 48 	 5 	- 	- 
SBL 10 § Försvårande av skattekontroll	Försvårande av skattekontroll 	 900 	 867 	 33 	 25 	 16 
Lag (1986:436) om näringsförbud, 47 §	Överträdelse av lagen om näringsförbud	 59 	 58 	 1 	 39 	 37 
Aktiebolagslag (2005:551)	Aktiebolagslagen, totalt	 196 	 180 	 16 	 31 	 21 
ABL 30 kap. 1 § 2 st. 2 p. Underlåtenhet att föra/hålla aktiebok tillgänglig 	Underlåtenhet att föra/hålla aktiebok tillgänglig	 3 	 3 	- 	- 	- 
ABL 30 kap. 1 § 1 st. 4 p. Brott mot låneförbud m.m. 	Brott mot låneförbud m.m. 	 78 	 74 	 4 	 22 	 15 
ABL 30 kap. 1 § 3 st. Brott mot bulvan/målvaktsbestämmelser 	Brott mot bulvan/målvaktsbestämmelser 	 108 	 97 	 11 	 37 	 25 
ABL 30 kap. 1 § 1 st. 1 p., 3 p. och 2 § Övriga brott 	Övriga brott mot aktiebolagslagen 	 7 	 6 	 1 	 50 	 43 
Lag (2016:1307) om straff för marknadsmissbruk på värdepappersmarknaden	Lag om straff för marknadsmissbruk m.m, totalt	 135 	 118 	 17 	 34 	 29 
Lag 2016:1307 2 kap. 2-4, 7 § Insiderbrott m.m.	Insiderbrott m.m.	 101 	 85 	 16 	 24 	 20 
Lag 2016:1307 2 kap.3 § Obehörigt röjande av insiderinformation 	Obehörigt röjande av insiderinformation	 3 	 3 	- 	 33 	 33 
Lag 2016:1307 2 kap.4, 7 § Marknadsmanipulation, inkl. grov	Marknadsmanipulation	 31 	 30 	 1 	 64 	 58 
Lag (2014:307) om straff för penningtvättsbrott	Penningtvättsbrott, totalt	20 427 	20 081 	 346 	 38 	 27 
Lag 2014:307, 3-4 § Penningtvättsbrott 	Penningtvättsbrott 	17 557 	17 284 	 273 	 38 	 27 
Lag 2014:307, 5 § Penningtvättsbrott, grovt brott	Penningtvättsbrott	1 287 	1 258 	 29 	 45 	 41 
Lag 2014:307, 6 § Penningtvättsförseelse 	Penningtvättsförseelse	 625 	 602 	 23 	 32 	 25 
Lag 2014:307, 7 § 1-3 st Näringspenningtvätt	Näringspenningtvätt 	 958 	 937 	 21 	 28 	 24 
Bidragsbrottslag (2007:612)	Bidragsbrottslagen, totalt	30 797 	30 269 	 528 	 58 	 50 
Lag 2007:612, 2-4 § Bidragsbrottslag	Mot Försäkringskassan	23 248 	22 903 	 345 	 62 	 54 
Lag 2007:612, 2-4 § Bidragsbrottslag	Mot kommunerna	1 368 	1 305 	 63 	 27 	 20 
Lag 2007:612, 2-4 § Bidragsbrottslag	Mot a-kassorna och Arbetsförmedlingen	4 256 	4 202 	 54 	 56 	 47 
Lag 2007:612, 2-4 § Bidragsbrottslag	Mot PPM, CSN och Migrationsverket	1 925 	1 859 	 66 	 32 	 27 
Lag (2000:1225) om straff för smuggling	Smugglingslagen, totalt	3 758 	3 643 	 115 	 66 	 63 
Lag (2000:1225) 3-5, 7, 14 § Smugglingsbrott och olovlig in- och utförsel	Smugglingsbrott och olovlig in- och utförsel, ej narkotika	1 491 	1 446 	 45 	 69 	 64 
Lag (2000:1225) 6, 7, 14 § Narkotikasmuggling och olovlig in- och utförsel av narkotika 	Narkotikasmuggling och olovlig in- och utförsel av narkotika 	1 842 	1 783 	 59 	 64 	 62 
Lag (2000:1225)6 a, 7 , 14 § Vapensmuggling, olovlig in- och utförsel	Vapensmuggling, olovlig in- och utförsel	 137 	 133 	 4 	 71 	 69 
Lag (2000:1225)6 a, 7 , 14 § Vapensmuggling, olovlig in- och utförsel	Av pistol, revolver eller start-, signal- och tårgasvapen	 38 	 38 	- 	 53 	 53 
Lag (2000:1225)6 a, 7 , 14 § Vapensmuggling, olovlig in- och utförsel	Av automatvapen (inkl. kulsprutepistol) 	 2 	 2 	- 	- 	- 
Lag (2000:1225)6 a, 7 , 14 § Vapensmuggling, olovlig in- och utförsel	Av jaktvapen 	 3 	 2 	 1 	- 	- 
Lag (2000:1225)6 a, 7 , 14 § Vapensmuggling, olovlig in- och utförsel	Av annat vapen 	 29 	 29 	- 	 69 	 69 
Lag (2000:1225) 6 b, 7, 14 § Smuggling av explosiv vara, olovlig in- och utförsel	Smuggling av explosiv vara, olovlig in- och utförsel	 75 	 75 	- 	 56 	 53 
Lag (2000:1225) 8-11, 14 § Tullbrott och vårdslös tullredovisning 	Tullbrott och vårdslös tullredovisning	 104 	 102 	 2 	 81 	 76 
Lag (2000:1225) 12-14 § Olovlig befattning med smuggelgods 	Olovlig befattning med smuggelgods 	 109 	 104 	 5 	 52 	 45 
Lag (1998:506) om punktskattekontroll av transporter m.m. av alkoholvaror, tobaksvaror och energiprodukter 5 kap. 1, 1 a-c §	Lagen om punktskattekontroll 	 187 	 176 	 11 	 43 	 33 
Lag (1992:860) om kontroll av narkotika	Lagen om kontroll av narkotika (13 §)	- 	- 	- 	- 	- 
Alkohollag (2010:1622) 11 kap.	Alkohollagen, totalt	 899 	 717 	 182 	 31 	 23 
Lag (2010:1622) 11 kap. (1 § 1 p., 2 , 4 §) Olovlig befattning med sprit genom tillverkning, inkl. grov 	Olovlig befattning med sprit genom tillverkning	 48 	 46 	 2 	 63 	 50 
Lag (2010:1622) 11 kap.  (1 § 2 p., 4 §) Olovlig befattning med olovligt tillverkad sprit genom förvärv, innehav m.m.	Olovlig befattning med olovligt tillverkad sprit genom förvärv, innehav m.m.	 117 	 99 	 18 	 29 	 22 
Lag (2010:1622) 11 kap.(3, 4, 6 §) Olovlig försäljning av alkohol inkl. grov, olovligt innehav av alkohol 	Olovlig försäljning av alkohol, olovligt innehav av alkohol 	 332 	 259 	 73 	 42 	 30 
Lag (2010:1622) 11 kap. (5 §) Olovlig vin- och öltillverkning m.m.	Olovlig vin- och öltillverkning m.m. 	 9 	 8 	 1 	 67 	 22 
Lag (2010:1622) 11 kap.  (7, 9 §)Olovligt anskaffande av alkohol, olovlig hantering av alkohol	Olovligt anskaffande av alkohol, olovlig hantering av alkohol 	 377 	 290 	 87 	 19 	 14 
Lag (2010:1622) 11 kap.(8 §) Olovlig försäljning av teknisk sprit m.m. 	Olovlig försäljning av teknisk sprit m.m. 	 16 	 15 	 1 	- 	- 
Lag (2018:2088) om tobak och liknande produkter	Tobakslagen	 278 	 229 	 49 	 13 	 10 
Lag om tobaksfria nikotinprodukter	Lag om tobaksfria nikotinprodukter	 36 	 30 	 6 	 32 	 25 
Lag om förbud mot vissa hälsofarliga varor (3 § 1 st. och 4 §)	Lag om förbud mot vissa hälsofarliga varor	 100 	 99 	 1 	 23 	 18 
Lag om brandfarliga och explosiva varor (6 §, 16 § 1 st, 28 § 1 st, 29 § 2 st, 29a §)	Lag om brandfarliga och explosiva varor	 565 	 502 	 63 	 31 	 25 
Läkemedelslag (2015:315) 16 kap. 1 §	Läkemedelslag	 80 	 76 	 4 	 2 	 1 
Lag (2009:366) om handel med läkemedel (9 kap. 1, 1 a §)	Lag om handel med läkemedel 	 34 	 32 	 2 	 10 	 9 
Lag (2009:730) om handel med vissa receptfria läkemedel 24 §	Lag om handel med vissa receptfria läkemedel	 6 	 6 	- 	 40 	 33 
Vapenlag (1996:67) 9 kap. 1-3 §	Vapenlagen, totalt	9 377 	8 953 	 424 	 20 	 18 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Vapenbrott; innehav, totalt	7 599 	7 206 	 393 	 20 	 18 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Innehav av pistol, revolver eller start-, signal- och tårgasvapen	3 064 	2 853 	 211 	 15 	 14 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Innehav av pistol, revolver eller start-, signal- och tårgasvapen	1 141 	1 066 	 75 	 16 	 14 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Innehav av pistol, revolver eller start-, signal- och tårgasvapen	1 922 	1 786 	 136 	 15 	 14 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Innehav av automatvapen (inkl. kulsprutepistol) 	 332 	 318 	 14 	 20 	 19 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Innehav av automatvapen (inkl. kulsprutepistol) 	 38 	 36 	 2 	 3 	 3 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Innehav av automatvapen (inkl. kulsprutepistol) 	 294 	 282 	 12 	 22 	 21 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Innehav av jaktvapen, totalt	 846 	 815 	 31 	 13 	 12 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Innehav av jaktvapen	 684 	 660 	 24 	 9 	 8 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Innehav av jaktvapen	 162 	 155 	 7 	 29 	 28 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Innehav av annat vapen, totalt	3 357 	3 220 	 137 	 26 	 22 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Innehav av annat vapen	2 210 	2 130 	 80 	 27 	 22 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Innehav av annat vapen	1 147 	1 090 	 57 	 24 	 23 
Vapenlag (1996:67) 1, 1 a § Vapenbrott inkl. grovt, synnerligen grovt	Vapenbrott; överlåtelse, utlåning av skjutvapen, totalt	 115 	 109 	 6 	 15 	 13 
Vapenlag (1996:67) 1 § Vapenbrott, ej grovt brott	Vapenbrott; överlåtelse, utlåning av skjutvapen	 65 	 60 	 5 	 14 	 11 
Vapenlag (1996:67) 1 a § Grovt vapenbrott, synnerligen grovt vapenbrott	Vapenbrott; överlåtelse, utlåning av skjutvapen	 50 	 49 	 1 	 17 	 16 
Vapenlag (1996:67) 1 b, 2 § Annat brott	Annat brott mot Vapenlagen	1 663 	1 638 	 25 	 23 	 19 
Lag (1988:254)  1, 2, 4 § om förbud beträffande knivar och andra farliga föremål	Lagen om förbud betr. knivar m.m. 	10 522 	10 135 	 387 	 77 	 61 
Jaktlag (1987:259) 43, 44, 46 §	Jaktlagen, totalt	 392 	 181 	 211 	 11 	 5 
Jaktlag (1987:259) 43, 44, 46 §	Illegal rovdjursjakt (varg, björn, järv, lodjur och kungsörn)	 44 	 35 	 9 	 3 	 2 
Jaktlag (1987:259) 43, 44, 46 §	Övriga brott mot jaktlagen	 348 	 146 	 202 	 13 	 5 
Fiskelag (1993:787) 37, 38, 40 §	Fiskelagen	 278 	 225 	 53 	 42 	 32 
Lag (1980:424) om åtgärder mot förorening från fartyg	Lagen om åtgärder mot förorening från fartyg	 65 	 26 	 39 	 5 	 2 
Arbetsmiljölag (1977:1160) 8 kap. 1,  2 §	Arbetsmiljölagen 	 134 	 100 	 34 	- 	- 
Utlänningslag (2005:716),  20 kap.	Utlänningslagen, totalt	1 333 	1 240 	 93 	 23 	 20 
UtlL 20 kap. 2 § Uppsåtligen uppehåller sig i Sverige trots beslut om utvisning 	Uppsåtligen uppehåller sig i Sverige trots beslut om utvisning 	 69 	 67 	 2 	 74 	 71 
UtlL 20 kap. 5 § Har utlänning anställd som inte har rätt att vistas i Sverige, eller saknar arbetstillstånd 	Har utlänning anställd som inte har rätt att vistas i Sverige, eller saknar arbe	 908 	 865 	 43 	 23 	 20 
UtlL 20 kap. 7 § Hjälp till utlänning att olovligen uppehålla sig i Sverige, annan EU-stat eller Schengenområdet	Hjälp till utlänning att olovligen uppehålla sig i Sverige, annan EU-stat eller 	 7 	 6 	 1 	- 	- 
UtlL 20 kap. 8 § Människosmuggling	Människosmuggling	 136 	 122 	 14 	 24 	 21 
UtlL 20 kap. 9 § Organiserande av människosmuggling	Organiserande av människosmuggling	 11 	 11 	- 	- 	- 
UtlL 20 kap. 4-7 § Övriga brott	Övriga brott mot utlänningslagen	 202 	 169 	 33 	 5 	 3 
Lag (1988:688) om kontaktförbud	Lagen om kontaktförbud, totalt	3 704 	3 587 	 117 	 31 	 28 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Med elektronisk övervakning	 3 	 3 	- 	- 	- 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Utan elektronisk övervakning	3 662 	3 547 	 115 	 31 	 29 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot barn under 18 år, totalt	 107 	 104 	 3 	 40 	 38 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot flicka under 18 år	 55 	 54 	 1 	 37 	 36 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot pojke under 18 år	 52 	 50 	 2 	 43 	 40 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot kvinna 18 år eller äldre, totalt	3 098 	3 009 	 89 	 29 	 27 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Närstående genom parrelation	2 357 	2 298 	 59 	 28 	 26 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Närstående genom släktskap/familj	 234 	 230 	 4 	 44 	 43 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Annan sorts relation eller bekantskap	 424 	 400 	 24 	 31 	 27 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Obekanta	 83 	 81 	 2 	 22 	 20 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Mot man 18 år eller äldre, totalt	 456 	 433 	 23 	 41 	 37 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Närstående genom parrelation	 121 	 110 	 11 	 23 	 21 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Närstående genom släktskap/familj	 200 	 194 	 6 	 66 	 61 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Annan sorts relation eller bekantskap	 106 	 104 	 2 	 17 	 16 
Lag (1988:688) 24 § Överträdelse av kontaktförbud	Obekanta	 29 	 25 	 4 	 26 	 21 
Lag (1988:688) 25 § Hindrande av elektronisk övervakning 	Hindrande av elektronisk övervakning	 39 	 37 	 2 	 16 	 13 
Lag (2005:321) om tillträdesförbud vid idrottsarrangemang	Lagen om tillträdesförbud vid idrottsarrangemang	 10 	 10 	- 	 70 	 70 
Kulturmiljölag (1988:950) 2 kap. 21, 21 a §	Kulturmiljölagen	 64 	 51 	 13 	 10 	 8 
Spellag (2018:1138) 	Spellagen, totalt	 24 	 21 	 3 	 25 	 21 
Spellag (2018:1138), 19 kap. 1, 3 §, inkl. grovt	Olovlig spelverksamhet	 17 	 15 	 2 	 36 	 29 
Spellag (2018:1138), 19 kap. 2, 3 §, inkl. grovt	Främjande av olovligt spel	 3 	 3 	- 	- 	- 
Spellag (2018:1138), 19 kap. 4,5 §, inkl. grovt	Spelfusk	 4 	 3 	 1 	- 	- 
Lag (1991:1969) om förbud mot vissa dopningsmedel	Lagen om förbud mot vissa dopningmedel	2 283 	2 273 	 10 	 39 	 31 
Lag (1991:1969) om förbud mot vissa dopningsmedel, 2 § 4, 5 p., 3, 3 a §, inkl. grovt	Överlåtelse	 388 	 386 	 2 	 4 	 4 
Lag (1991:1969) om förbud mot vissa dopningsmedel,  2 § 6 p., 3, 3 a §, inkl. grovt	Innehav	1 357 	1 350 	 7 	 59 	 44 
Lag (1991:1969) om förbud mot vissa dopningsmedel, 2 § 7 p., 3, 3 a §, inkl. grovt	Eget bruk	 536 	 535 	 1 	 21 	 18 
Lag (1991:1969) om förbud mot vissa dopningsmedel, 2 § 3 p., 3, 3 a §, inkl. grovt	Framställning	 2 	 2 	- 	- 	- 
Folkbokföringslag (1991:481) 42 §	Folkbokföringslagen	4 825 	4 398 	 427 	 10 	 6 
Övriga trafikbrott (ej TBL) med fängelse i straffskalan	Övriga trafikbrott (ej TBL) med fängelse i straffskalan	 178 	 168 	 10 	 25 	 21 
Sjölag (1994:1009) 20 kap.	Sjölagen, totalt	 252 	 225 	 27 	 63 	 56 
Lag (1994:1009) 20 kap. 4, 5 § Sjöfylleri 	Sjöfylleri	 149 	 146 	 3 	 81 	 79 
Lag (1994:1009) 20 kap. 1, 2, 6-9 § Övriga brott	Övriga brott mot sjölagen 	 103 	 79 	 24 	 29 	 21 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser	Lagen om straff för folkmord, brott mot mänskligheten och krigsförbrytelser, tot	 83 	 50 	 33 	- 	- 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser, 1 §	Folkmord	 13 	 6 	 7 	- 	- 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser,  2 §	Brott mot mänskligheten	 22 	 14 	 8 	- 	- 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser,  4-11 §	Krigsförbrytelse	 40 	 24 	 16 	- 	- 
Lag (2014:406) om straff för folkmord, brott mot mänskligheten och krigsförbrytelser, 14-15 §	Övriga brott	 4 	 3 	 1 	- 	- 
Lag (1982:316) med förbud mot könsstympning av kvinnor	Lagen med förbud mot könsstympning av kvinnor	 62 	 54 	 8 	- 	- 
Lag (2003:148) om straff för terroristbrott 2 §	Lag om straff för terroristbrott 	 25 	 15 	 10 	 7 	 4 
Skyddslag (2010:305) 30-31 §	Skyddslag, totalt	 581 	 474 	 107 	 28 	 21 
Lag (1996:95) om vissa internationella sanktioner, 8, 15 §	Lag om vissa internationella sanktioner 	- 	- 	- 	- 	- 
Ordningslagen (1993:1617) 2 kap. 29 §, 5 kap. 3-5 §§	Ordningslagen	1 886 	1 107 	 779 	 21 	 11 
Lag (1960:729) om upphovsrätt till litterära och konstnärliga verk, lag(2000:171) om förbud beträffande viss avkodningsutrustning 	Brott mot upphovsrätten	 99 	 43 	 56 	 33 	 9 
Lag (1992:1685) om skydd för kretsmönster för halvledarprodukter, lag (2018:1653) om företagsnamn, patentlagen (1967:837), mönsterskyddslagen (1970:485), växtförädlarrättslagen (1997:306), varumärkeslagen (2010:1877)	Brott mot det industriella rättsskyddet	 118 	 61 	 57 	 7 	 2 
Övriga författningar	Övriga författningar	2 356 	1 975 	 381 	 25 	 18 `;

const jsonData = dataToJson(data);
writeDataToFile(jsonData, 'output.json');
