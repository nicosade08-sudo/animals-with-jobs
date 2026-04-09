// KLAR

//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar

import { Animal } from "./IAnimal";

export default async function fetchAnimals(): Promise<Animal[] | null> {
    try {

   const response = await fetch("data/data.json");

    if (!response.ok) {
      throw new Error("något gick fel!!");
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log(error);
    return null;
  }
}