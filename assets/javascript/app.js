

// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyAyGuPONxEFjkJ7sTcKeJOmUeL6D8xRdqA",
  authDomain:"train-schedule-6244c.firebaseapp.com",
  databaseURL:"https://train-schedule-6244c.firebaseio.com",
  storageBucket:"train-schedule-6244c.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding trains
// Make a button on.click function
$("#add-train-btn").on("click", function(event) {

    event.preventDefault();

    // Get the user input from the entry fields
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTime = $("#first-time-input").val().trim();
    var frequency = $("#frequency-input").val().trim();

    // Create object to hold the train data. This is what will get pushed to the Firebase or DataBase
    var newTrain = {
      name: trainName,
      destination: destination,
      first_time: firstTime,
      frequency: frequency
    };

  // Upload the train data to the database
  database.ref().push(newTrain);

  // Test it
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.first_time);
  console.log(newTrain.frequency);

  // Clear the text boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-time-input").val("");
  $("frequency-input").val("");


});

// 3. Create Firebase event for adding trains to the database and also a rows in the html when users add trains
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // storage variables
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var firstTime = childSnapshot.val().first_time;
  var frequency = childSnapshot.val().frequency;

  //console log Test
  console.log(trainName);
  console.log(destination);
  console.log(firstTime);
  console.log(frequency);

})


