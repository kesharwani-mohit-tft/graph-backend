const express = require('express')
//for creating a router
const router = new express.Router();
const {getList} = require("../controllers/get")
const {createData} = require("../controllers/post")

router.get('/', (req, res) => {
    res.send('Hello from router!');
  });//or you can use controllers like below


router.post('/create', createData)
router.get('/statics', getList);


module.exports = router;

