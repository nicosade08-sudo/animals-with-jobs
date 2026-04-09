// KLAR

import fetchAnimals from "./modules/fetchAnimals.ts";
import renderListOfAnimals from "./modules/renderListOfAnimals.ts";

async function init() {
  const animals = await fetchAnimals();
  if (animals) {
    renderListOfAnimals(animals);
  }
}

init();