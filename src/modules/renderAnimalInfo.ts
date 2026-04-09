// KLAR

//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
//Rendera ut bilden på djuret
//Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
//Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
//Följ formatet: "Trash Analyst - Currently (not) employed"
//Använd template literals
//Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
//Följ formatet:  Age: 9 years old.
//Använd template literals
 //Skriv ut en lista på djurets färdigheter
//Följ formatet:    Skills:
//                  Flying
//                  Eating

import { Animal } from "./IAnimal";

export default function renderAnimalInfo(animal: Animal) { 
  const infoList = document.querySelector(".animal-info");

  if (infoList) {
    infoList.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = `${animal.name} the ${animal.kindOfAnimal}`;

    const img: HTMLImageElement = document.createElement("img");
    img.src = `images/${animal.imageUrl}`;

    const h4 = document.createElement("h4");
    h4.textContent = `${animal.job} - Currently ${animal.employmentEndDate ? 'not employed' : 'employed'}`;

    const p = document.createElement("p");

    const ageLabel = document.createElement("span");
    ageLabel.classList.add("label");
    ageLabel.textContent = "Age:";

    p.appendChild(ageLabel);
    p.append(` ${new Date().getFullYear() - Number(animal.birthYear)} years old.`);

    p.classList.add("age");

    const ul = document.createElement("ul");
    ul.classList.add("skills");

    if (animal.skills && animal.skills.length > 0) { 

      const title = document.createElement("li");

      const skillsLabel = document.createElement("span");
      skillsLabel.classList.add("label");
      skillsLabel.textContent = "Skills:";

      title.appendChild(skillsLabel);
      ul.appendChild(title);

      if (Array.isArray(animal.skills)) {
        animal.skills.forEach(skill => {
          const li = document.createElement("li");
          li.textContent = skill;
          ul.appendChild(li);
        });

      } else if (typeof animal.skills === "string") {
        const li = document.createElement("li");
        li.textContent = animal.skills;
        ul.appendChild(li);
      }
    }
    
    infoList.appendChild(img);
    infoList.appendChild(h2);
    infoList.appendChild(h4);
    infoList.appendChild(p);
    infoList.appendChild(ul);
  }
}