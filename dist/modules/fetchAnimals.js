// KLAR
export default async function fetchAnimals() {
    try {
        const response = await fetch("data/data.json");
        if (!response.ok) {
            throw new Error("något gick fel!!");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
