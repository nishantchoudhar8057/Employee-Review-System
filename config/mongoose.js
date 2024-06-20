const mongoose = require("mongoose");

// here we connect the odm(object document maper) mongoose to the dbms mongodb.
mongoose.connect("mongodb+srv://nishantchoudhary8057:1234@cluster1.juy5yrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1", {
useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;