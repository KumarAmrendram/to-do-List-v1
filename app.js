const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS Varibales
let newItems = ["item 1"];
let workItems = ["work item 1"]

app.get("/", function (req, res) {
  // date fucntion starts
  var today = new Date(); // Date is a date funtion

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("app", { listTitle: day, newListItems: newItems });
});

app.post("/", function (req, res) {
  let item = req.body.newTask;

    console.log(req.body.list);
    if (req.body.list === "Work") {
      workItems.push(item);
      res.redirect("/work");
    } else {
      newItems.push(item);
      res.redirect("/")
    }
});


app.get("/work", function(req ,res){
    res.render("app", {listTitle:"Work List", newListItems: workItems});
})

app.listen(5000, function (req, res) {
  console.log("Server started at 5000");
});
