import express from "express";
import animalsRouter from './routes/animalsRoutes.js';

const app = express();
const port = 8000;

app.use('/animals', animalsRouter);

app.get('/', (req, res) => {
    res.send(`<h1>Adopt A pet </h1>
        <p>Browse through the links below to find your new furry friend.</p>
        <ul>
            <li><a href="/animals/dogs">Dogs</a></li>
            <li><a href="/animals/cats">Cats</a></li>
            <li><a href="/animals/rabbits">Rabbits</a></li>
        </ul>`
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});