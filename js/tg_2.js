'use strict';
const atTheOldToad = {
  potions: ['Speed potion', 'Stone skin'],
  getPotions(propName) {
    for (const potion of this.potions) {
      if (potion === propName) {
        return potion;
      }
    }
    return 'List of all available potions';
  },
};

console.log(atTheOldToad.getPotions('Speed potion'));
console.log(atTheOldToad.getPotions('Doom'));
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.getPotions('Stone skin'));
console.log(atTheOldToad.getPotions('stone skin'));
