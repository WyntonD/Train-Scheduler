
// api keys



// <!-- TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#config-web-app -->

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDuD7LRr92zgil_Ay4lyO8TVEuGsOAiR5Q",
    authDomain: "train-scheduler-49455.firebaseapp.com",
    databaseURL: "https://train-scheduler-49455.firebaseio.com",
    projectId: "train-scheduler-49455",
    storageBucket: "",
    messagingSenderId: "778964512910",
    appId: "1:778964512910:web:c30b17dcd6f89a73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

$("#add-train").on("click", function (event) {
    console.log("Clicked");
   event.preventDefault();
   // Grabbed values from text-boxes

  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
   // Code for "Setting values in the database"

   var newTrain = {
       name: trainName,
       going: destination,
       rate: frequency,
   };

database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.going);
console.log(newTrain.rate);

$("#train-name-input").val("");
$("#destination-input").val("");
$("#frequency-input").val("");
$("#arrival-input").val("");

database.ref().on("child_added", function (childSnapshot) {
    var sv = snapshot.val();


    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().going;
    var frequency = childSnapshot.val().rate;

var trainStart = moment.unix(trainStart).format("MM?DD?YY");


var newRow = $("<tr>").append(
    $("<td>").text(name),
    $("<td>").text(going),
    $("<td>").text(rate),

);

$("#train-table > tbody").append(newRow);

}); 


    $("#table-body").append("<tr>" + "<td>" + sv.trainName + "</td><td>" + sv.destination + "</td><td>" + sv.frequency + "</td><td> total billed</td>  </tr>");
    // Handle the errors
 }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
 });
   