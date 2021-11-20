// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAMXt1W66Ta-8BQ4hb0q_XPQkSECMytI74",    
  authDomain: "letstalkapp-5cf07.firebaseapp.com",    
  databaseURL: "https://letstalkapp-5cf07-default-rtdb.firebaseio.com",    
  projectId: "letstalkapp-5cf07",    
  storageBucket: "letstalkapp-5cf07.appspot.com",    
  messagingSenderId: "231883752781",    
  appId: "1:231883752781:web:7792c176eed93046eee304"    
};    

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS


var username = localStorage.getItem("username");
var roomname = localStorage.getItem("room_name");


function send() {

var message = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            
            name: username,
            msg: message,
            likes: 0

      });

      document.getElementById("msg").value="";

}

function logout() {

      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";

}





function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code





//End code
      } });  }); }
getData();
