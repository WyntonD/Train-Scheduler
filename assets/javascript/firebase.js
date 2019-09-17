const config = {
    apiKey: "AIzaSyDuD7LRr92zgil_Ay4lyO8TVEuGsOAiR5Q",
    authDomain: "train-scheduler-49455.firebaseapp.com",
    databaseURL: "https://train-scheduler-49455.firebaseio.com",
    projectId: "train-scheduler-49455",
    storageBucket: "",
    messagingSenderId: "778964512910",
    appId: "1:778964512910:web:d154c9f16b67772a"
  };

firebase.initializeApp(config);

var database = firebase.database();


$("#add-train").on("click", function (event) {
    event.preventDefault();
    console.log("Clicked");
   
   // Grabbed values from text-boxes

  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainFrequency = $("#train-time-input").val().trim();
  var trainComing = $("#frequency-input").val().trim();
   // Code for "Setting values in the database"

   var newTrain = {
       name: trainName,
       going: trainDestination,
       rate: trainFrequency,
       coming: trainComing,
   };

database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.going);
console.log(newTrain.rate);
console.log(newTrain.coming);


alert("Train successfully added");

$("#train-name-input").val("");
$("#destination-input").val("");
$("#train-time-input").val("");
$("#frequency-input").val("");
});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

var trainName = childSnapshot.val().name;
var trainDestination = childSnapshot.val().going;
var trainFrequency = childSnapshot.val().rate;
var trainComing = childSnapshot.val().coming;

console.log(trainName);
console.log(trainDestination);
console.log(trainFrequency);
console.log(trainComing);

var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency),
    $("<td>").text(trainComing)
);

$("#train-table > tbody").append(newRow);

}); 
