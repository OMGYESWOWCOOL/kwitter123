
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAHYuaZfvMh6OsCN-KYUlGXVHB1EWN_pvA",
      authDomain: "kwitter-6c83c.firebaseapp.com",
      databaseURL: "https://kwitter-6c83c-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c83c",
      storageBucket: "kwitter-6c83c.appspot.com",
      messagingSenderId: "1022816257000",
      appId: "1:1022816257000:web:fc5e864129478132c09a5d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redrictToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redrictToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "kwitter.html";
 }

 function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwiter_page.html";
}