// const mongoose = require("mongoose");

// const url = "mongodb+srv://lovekhandelwal1680:love8080@cluster1.v2tzc45.mongodb.net/problemo?retryWrites=true&w=majority&appName=Cluster1"

// module.exports.connect = () => {
//     mongoose
//       .connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       })
//       .then(() => {
//         console.log("MongoDB connected successfully");
//       })
//       .catch((error) => console.log("Error: ", error));
//   };
const mongoose = require("mongoose");

const url = "mongodb+srv://lovekhandelwal1680:love8080@cluster1.v2tzc45.mongodb.net/problemo?retryWrites=true&w=majority&appName=Cluster1";

module.exports.connect = () => {
    mongoose
        .connect(url)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => console.log("Error: ", error));
};
