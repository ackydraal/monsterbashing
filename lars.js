let runProgram = confirm("Vill du spela?");
while (runProgram) {
    const ladyBianca = {
        name: "Lady Bianca",
        health: 150,
        strenght: 25,
    };

    const birdMonster = {
        name: "Riffraff",
        health: 20,
        strenght: 10,
    };

    const ken = {
        name: "Ken",
        health: 50,
        strenght: 225,
    };

    // fixa random
    let damage = 7;

    function characterStatus(character) {
        alert(${character.name} has health: ${character.health} and ${character.strenght} as strenght.);
    }

    function attack(hero, birdMonster) {
        // loopa tills monstret eller hjälten har slut på health
        if (hero.health > 0) {
            console.log(${birdMonster.name} attacks ${hero.name} and causes ${damage})
            hero.health = hero.health - damage;
            characterStatus(ladyBianca);
        }
        else {
            console.log(${ladyBianca.name} died);
        }
    }

    characterStatus(ladyBianca);
    console.log("Lady Bianca möter ett fågelmonster");
    attack(ladyBianca, birdMonster);

    runProgram = confirm("Vill du forsätta spela?");
}

function attack(target) {
    if (target.health > 0) { let hit = getRandomInt(3); 
    if (hit == 0) { target.health -= 2; } 
    else if (hit == 1) { target.health -= 7; } 
    else { target.health -= 13; } } 
    else if (target.health <= 0) { console.log(The great $(target.name) has been brutally slain.); } 
    else {
        status(target);