import pets from "../petList.js";

const animalList = (req, res) => {

    const petType = req.params.pet_type;



    if (!(petType in pets)) {
        res.send('<h1>Invalid pet type</h1>');
        return;
    }

    const filteredPets = pets[petType];


    const petListItems = filteredPets.map((pet, index) => {
        const profileLink = `<a href="/animals/${petType}/${index}">${pet.name}</a>`;

        return `<li>${profileLink}</li>`;
    }).join('');

    const htmlResponse = `<h1>List of ${petType}</h1><ul>${petListItems}</ul>`;
    res.send(htmlResponse);
};

export default animalList