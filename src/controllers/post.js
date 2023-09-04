const Alert = require("../models/Alerts")

  const createData = async (req, res) => {
    try {
        let data=new Alert(req.body);
        let result = await data.save();
        console.log("request-data",req.body)
        console.log("result",result)
        res.send("Success data added!")
    } catch (error) {
      res.status(500).send(error);    
    }
  };

  module.exports = {createData};


  