let runProgram = confirm("Vill du spela?");
while (runProgram) {
    const hero1 = {
        heroName: "Fenster",
        health: 36,
        damage: 12,
    };
    const hero2 = {
        heroName: "Benthor",
        health: 42,
        damage: 31,
    };
    const hero3 = {
        heroName: "Floury",
        health: 41,
        damage: 19,
    };
    const monster = {
        heroName: "Foulbeast",
        health: 77,
        damage: 22,
    };
    let damage = function getRndInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    

    function attack(hero, monster) {
        while (hero1.health > 0) {   
                if (hero.health > 0) {
                    console.log(`${ monster.heroName } attacks ${ hero1.heroName } and causes ${ monster.damage }`)
                    hero1.health = hero1.health - monster.damage;
                    console.log(`${ hero1.heroName } has ${ hero1.health } health left.`);
                }
                else {
                    console.log(`${ hero1.heroName } died`);
                }
            
        }
    }

            // characterStatus(hero1);
            console.log(hero1.heroName + " " + hero1.health);
            attack(hero1, monster);
            runProgram = confirm("Vill du forsätta spela?");
        }