// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB2lvePlIj7JWkKXT8rQoPCC2TfLF1_DEs",
      authDomain: "kwitter-f7c1d.firebaseapp.com",
      databaseURL: "https://kwitter-f7c1d-default-rtdb.firebaseio.com",
      projectId: "kwitter-f7c1d",
      storageBucket: "kwitter-f7c1d.appspot.com",
      messagingSenderId: "567476796389",
      appId: "1:567476796389:web:325d88d923c2654e558d0c"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
  room_name=document.getElementById("room_name").value ;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomName-" + Room_names);
      row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}