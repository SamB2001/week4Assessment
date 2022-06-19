const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getAnxiety } = require('./controller')
//const { addCompliment } = require('./controller')
const { getInspo } = require('./controller')
const { getInsult } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/anxiety", getAnxiety);
//app.put("/api/addCompliment", addCompliment);
app.get("/api/inspiration", getInspo);
app.get("/api/insult", getInsult);

app.listen(4000, () => console.log("Server running on 4000"));
