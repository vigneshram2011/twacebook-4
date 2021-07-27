var firebaseConfig = {
    apiKey: "AIzaSyA2juQkb__SauNSpkaSHT-fy7klYLxL32M",
    authDomain: "twacebook-97581.firebaseapp.com",
    databaseURL: "https://twacebook-97581-default-rtdb.firebaseio.com",
    projectId: "twacebook-97581",
    storageBucket: "twacebook-97581.appspot.com",
    messagingSenderId: "149392623679",
    appId: "1:149392623679:web:7d4625deb75421ff80d08a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location.replace("index.html");
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
            }
        });
    });
}
getData();