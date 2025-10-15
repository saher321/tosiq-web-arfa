 // express // mongoose // dotenv // cors // nodemon
import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', ( req, res ) => {
    res.send("Hello from server");
});

app.get('/test', ( req, res ) => {
    res.send("This is a test route");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});