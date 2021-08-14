var db = firebase.firestore()
var user
firebase.auth().onAuthStateChanged(function (u) {
    user = u
})