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


    function attack(hero, monster) {
        while (hero1.health > 0) {  
            function getRndDamage(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            let monDmg = getRndDamage(1, 22);
            let heroDmg = getRndDamage(1, 12);
            let hero2Dmg = getRndDamage(1, 31);
            let hero3Dmg = getRndDamage(1, 19);
                if (hero1.health > 0) {
                    console.log(`${ monster.heroName } attacks ${ hero1.heroName } and causes ${ monDmg }`)
                    hero1.health = hero1.health - monDmg;
                    console.log(`${ hero1.heroName } has ${ hero1.health } health left.`);
                }
                if (hero1.health < 0 ) {
                    console.log (`The monster has slain ${ hero1.heroName } and all remaining heroes are running away.`)
                    break;
                }
                else {
                    console.log (`The monster has slain ${ hero1.heroName } and all remaining heroes are running away.`)
                    break;
                }
                if (monster.health > 0 ) {
                    console.log (`${ hero1.heroName } attacks ${ monster.heroName } and causes ${ heroDmg }`)
                    monster.health = monster.health - heroDmg;
                    console.log(`${ monster.heroName } has ${ monster.health } health left.`);
                }
                else {
                    console.log(`${ monster.heroName } died`)
                }
                if (monster.health > 0 ) {
                    console.log (`${ hero2.heroName } attacks ${ monster.heroName } and causes ${ hero2Dmg }`)
                    monster.health = monster.health - hero2Dmg;
                    console.log(`${ monster.heroName } has ${ monster.health } health left.`);
                }
                else {
                    console.log(`${ monster.heroName } died`)
                }
                if (monster.health > 0 ) {
                    console.log (`${ hero3.heroName } attacks ${ monster.heroName } and causes ${ hero3Dmg }`)
                    monster.health = monster.health - hero3Dmg;
                    console.log(`${ monster.heroName } has ${ monster.health } health left.`);
                }
                else {
                    console.log(`${ monster.heroName } died`)
                }
                if (monster.health < 0 ) {
                    console.log (`The mighty heroes stand victorious on the battlefield. Congratulations`)
                    break;
                }
                if (hero1.health < 0 ) {
                    console.log (`The monster has slain ${ hero1.heroName } and all remaining heroes are running away.`)
                    break;
                }
                
            
        }
    }

            // characterStatus(hero1);
            console.log(hero1.heroName + " " + hero1.health);
            attack(hero1, monster);
            runProgram = confirm("Vill du forsätta spela?");
        }