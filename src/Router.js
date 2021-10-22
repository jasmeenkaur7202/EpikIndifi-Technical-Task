let express = require("express");
let bodyParser = require("body-parser");
var ObjectId = require("mongodb").ObjectID;
const app = express();
const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://vehicledetails:vehicledetails@cluster1.oo9ps.mongodb.net/vehicledetails?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });
let database;

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencodedP({
    extended: true,
  })
);
app.listen(3000, () => {
  MongoClient.connect(url, { useNewUrlParser: true }, (error, result) => {
    if (error) throw error;
    database = result.db("vehicledetails");
    console.log("Connection successful");
  });
});

app.get("/", (req, res) => {
  database
    .collection("vehicledetails")
    .find({})
    .toArray((err, result) => {
      //   if (err) throw error
      res.render("ValetParkingDashboard", {
        vehiclelist: result,
      });
    });
});

app.get("/checkout", (req, res) => {
  database
    .collection("vehicledetails")
    .find({ _id: ObjectId(req.query.id) })
    .toArray((err, result) => {
      // if(err) throw error
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      let time = today.getHours() + ":" + today.getMinutes();
      let dateTime = date + " " + time;
      let hr1 = parseInt(time.substring(0, 2));
      let hr2 = parseInt(result[0].CheckinTime.substring(10, 12));
      let min1 = parseInt(time.substring(3, 5));
      let min2 = parseInt(result[0].CheckinTime.substring(13, 15));
      let timeDiff = (hr1 - hr2) * 60 + Math.abs(60 - min1 - (60 - min2));
      let amount = 2 * timeDiff;
      res.render("checkout", {
        vehicle: result[0],
        checkoutTime: dateTime,
        timeDifference: timeDiff,
        cost: amount,
      });
    });
});

app.get("/sucess", (req, res) => {
  database.collection("vehicledetails").remove({ _id: ObjectId(req.query.id) });
  res.render("sucesspage");
});

app.post("/details", (req, res) => {
  let vehicleNumber = req.body.vehicleNumber;
  let vehicleType = req.body.vehicleType;
  let vehicleModel = req.body.vehicleModel;
  let number = req.body.phonenumber;
  let name = req.body.customername;
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time = today.getHours() + ":" + today.getMinutes();
  let dateTime = date + " " + time;
  let data = {
    VehicleNumber: vehicleNumber,
    VehicleType: vehicleType,
    VehicleModel: vehicleModel,
    CustomerNumber: number,
    CustomerName: name,
    CheckinTime: dateTime,
  };
  database.collection("vehicledetails").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Inserted Sucessfully");
  });
  return res.redirect("/");
});
