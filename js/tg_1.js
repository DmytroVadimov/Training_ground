'use strict';
const atTheOldToad = {
  potions: [],
  getPotions() {
    return 'List of all available potions';
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

console.log(atTheOldToad.getPotions()); // "List of all available potions"
console.log(atTheOldToad.addPotion('Invisibility')); // "Adding Invisibility"
console.log(atTheOldToad.addPotion('Power potion')); // "Adding Power potion"
