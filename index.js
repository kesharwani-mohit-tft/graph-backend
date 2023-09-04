const express = require('express')
const cors = require('cors');

require("./src/db/conn")
const router = require("./src/routers/router");


const app = express()
app.use(cors());
const port = 4500;

app.use(express.json())//post se jo data aya usko convert karna imp hai
app.use("/", router); //puchhna


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


