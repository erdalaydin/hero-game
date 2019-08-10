// Write your JS here
const hero = {};
hero.name = "";
hero.heroic = true;
hero.inventory = [];
hero.health = 10;
hero.weapon = {type: "gun", damage: 2} 


function rest(hero) {
        if (hero.health === 10) {
            alert("Your health is %100!")
          } else {
            hero.health = 10
            return hero;
          }
        }


function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
}

function equipWeapon(hero) {
    if (hero.inventory[0]) {
        hero.weapon = hero.inventory[0]
    }
}

function displayStats (hero){
    document.getElementById(hero.name)
}