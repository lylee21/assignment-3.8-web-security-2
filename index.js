const express = require('express')
const app = express()
app.use(express.json());

const router = express.Router();
const credentials = require("./generate-jwt");

const credentials = new Credentials();

router.post("/register", async (req, res) => await credentials.register(req, res));
router.post("/login", async (req, res) => await credentials.login(req, res));
 
app.use(router);

app.listen(3000)

module.exports = app;