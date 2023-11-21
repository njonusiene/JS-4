// Instructions
// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Papildomai

// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.

var map = [
    {country: "Lietuva", size: 65300, people: 2862380},
    {country: "Latvija", size: 64589, people: 1907675},
    {country: "Estija", size: 45339, people: 1328439},
    {country: "Lenkija", size: 312696, people: 39100400},
    {country: "Suomija", size: 338455, people: 5553000},
]

for(var i = 0; i < map.length; i++){
    likes(map[i].country, map[i].size, map[i].people);
}

function likes(country, size, people){
    var square = (size * 1000000) / people; // konvertuojame km² į m²
    console.log("Šalis: " + country + ", joje gyvena " + people + " mln. gyventojų.");
    console.log("Valstybės plotas: " + size + " km², plotas tenkantis vienam gyventojui: " + square.toFixed(2) + " m²");
    console.log("==================");
}
