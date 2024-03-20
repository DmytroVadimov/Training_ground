'use strict';
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsLengths = [];
planets.map(planet => {
  const letters = planet.split('');
  planetsLengths.push(letters.length);
});
console.log(planetsLengths);
