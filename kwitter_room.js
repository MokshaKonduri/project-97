
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyARZvNwpklwrv1S4dMbx8fItcUZqQ1I_-k",
  authDomain: "kwitterclass-93.firebaseapp.com",
  databaseURL: "https://kwitterclass-93-default-rtdb.firebaseio.com",
  projectId: "kwitterclass-93",
  storageBucket: "kwitterclass-93.appspot.com",
  messagingSenderId: "269102753406",
  appId: "1:269102753406:web:b8afbcb2f0f6867c6d9a2f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Fire base links Given

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
