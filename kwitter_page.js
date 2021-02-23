//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
key_name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + key_name + "<img src='tick.png' class='user_tick'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value = " + like + "onclick='updateLike(this.id)>'"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : " + like + "</span></button><hr>"
//End code
      } });  }); }

      getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }

      function updateLike(message_id) {
            console.log("Clicked On The Like Button - " + message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            updated_likes = Number(likes)+1;
            console.log(updated_likes);
            firebase.database().ref(room_name).child(message_id).update({
                  like:updated_likes
            });
      }