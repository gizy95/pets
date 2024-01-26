import pets from "../petList.js";

const animalId = (req, res) => {
    const petType = req.params.pet_type;
    const petId = req.params.pet_id;

    if (!(petType in pets) || isNaN(petId)) {
        res.send('<h1>Invalid pet type or ID</h1>');
        return;
    }

    const pet = pets[petType][petId];

    if (!pet) {
        res.send('<h1>Pet not found</h1>');
        return;
    }

    const htmlResponse = `
        <h1>${pet.name}</h1>
        <img src="${pet.url}" alt="${pet.name}">
        <p>${pet.description}</p>
        <ul>
            <li>Breed: ${pet.breed}</li>
            <li>Age: ${pet.age}</li>
        </ul>
    `;
    res.send(htmlResponse);
};

export default animalId