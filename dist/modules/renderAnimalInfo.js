// KLAR
export default function renderAnimalInfo(animal) {
    const infoList = document.querySelector(".animal-info");
    if (infoList) {
        infoList.innerHTML = "";
        const h2 = document.createElement("h2");
        h2.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
        const img = document.createElement("img");
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
            }
            else if (typeof animal.skills === "string") {
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
