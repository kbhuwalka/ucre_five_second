// Get a reference to the database service
var database = firebase.database();

var user = "kunal";

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

$(function(){
  writeUserData(user, "Kunal Bhuwalka", "kunal@gmail.com", "blah");
});
