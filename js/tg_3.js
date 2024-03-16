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
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return `Total Price: ${totalPrice}`;
  },
};
atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
console.log(atTheOldToad.potions);
console.log(atTheOldToad.getTotalPrice());
atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
console.log(atTheOldToad.potions);
console.log(atTheOldToad.getTotalPrice());
