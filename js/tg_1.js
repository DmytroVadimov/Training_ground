'use strict';
const atTheOldToad = {
    potions =[],
    getPotions() {
        return "List of all available potions";
    },
    addPotion(potionName) {
        return `"Adding ${potionName}"`;
    }
};

atTheOldToad.getPotions(); // "List of all available potions"
atTheOldToad.addPotion('Invisibility'); // "Adding Invisibility"
atTheOldToad.addPotion('Power potion'); // "Adding Power potion"
