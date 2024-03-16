'use strict';
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (potion of this.potions) totalPrice += potion.price;
    return totalPrice;
  },
};

atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
//console.log(getPotions());
console.log(getTotalPrice());
atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
console.log(getPotions());
console.log(getTotalPrice());
