const mongoose = require('mongoose');

async function main() {
  try {
    // Set the strictQuery option to suppress the warning
    mongoose.set('strictQuery', false);

    await mongoose.connect('mongodb://127.0.0.1:27017/graph', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Other options...
    });
    
    console.log("MongoDB connection successful");
    // Now you can perform other operations that depend on the database connection
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

main();








// const mongoose = require('mongoose');

// async function main() {
// await mongoose.connect('mongodb://localhost:27017/e-comm');
//   console.log("Mongodb connection successful");  
  
// }
// main().catch(err => console.log(err));



