const Alert = require("../models/Alerts");

const getList = async (req, res) => {
  const { startDate, endDate, camera_Id, action_Id, max_confidence, min_confidence } = req.query;

  try {
    let query = {};

    if (action_Id !== undefined && action_Id !== '' && !isNaN(action_Id)) {
      query.action_Id = Number(action_Id);
    }
    
    if (camera_Id !== undefined && camera_Id !== '' && !isNaN(camera_Id)) {
      query.camera_Id = Number(camera_Id);
    }

    if (max_confidence !== undefined && max_confidence !== '' && !isNaN(max_confidence)) {
      query.confidence = { $lte: Number(max_confidence) };
    }
    
    if (min_confidence !== undefined && min_confidence !== '' && !isNaN(min_confidence)) {
      query.confidence = { ...query.confidence, $gte: Number(min_confidence) };
    }

    if (startDate !== undefined && endDate !== '') {
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);
      
      // Check if the dates are valid before using them in the query
      if (!isNaN(startDateObj.getTime()) && !isNaN(endDateObj.getTime())) {
        endDateObj.setDate(endDateObj.getDate() + 1); // Include the end date
        query.createdAt = { $gte: startDateObj, $lt: endDateObj };
      } else {
        throw new Error("Invalid date format in startDate or endDate");
      }
    }

    console.log("Query:", query);
    console.log("Dates--:", startDate,endDate);

    const data = await Alert.find(query);

    res.send({ data, "total": data.length });
  } catch (error) {
    console.log("Error:", error);
    res.status(400).send(error.message);
  }
};

module.exports = { getList };
