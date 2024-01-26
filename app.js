import express from "express";
import animalsRouter from './routes/animalsRoutes.js';
import pets from "./petList.js";

const app = express();
const port = 8000;

app.use('/animals', animalsRouter);

app.get('/', (req, res) => {
    const petTypes = Object.keys(pets)
    const petList = petTypes.map(petType => {
        return `<li><a href="/animals/${petType}">${petType}</a></li>`;
    });

    res.send(`
        <h1>Adopt A pet </h1>
        <p>Browse through the links below to find your new furry friend.</p>
        <ul>${petList.join('')}</ul>
    `);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});