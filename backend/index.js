import express from "express"

const app = express();
const port = 80;

app.listen(port, () =>
    console.log(`express is listening on port ${port}`)
    )