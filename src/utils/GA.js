const generations = 100;
const populationSize = 100;
const mutationRate = 0.01;
const genotypeLength = 5 ** 2
// crossoverRate = 0.7;
// elitism = 2;
// tournamentSize = 5;

export function generatePopulation() {
  let population = [];
  for (let i = 0; i < populationSize; i++) {
    population.push(generateRandomIndividual());
  }
  return population;
}

function generateRandomIndividual() {
  let individual = [];
  for (let i = 0; i < genotypeLength; i++) {
    individual.push(Math.random() < 0.5 ? 0 : 1);
  }
  return individual;
}

