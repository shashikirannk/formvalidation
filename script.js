const name =document.getElementById('name');
const password = document.getElementById("password");
const email=document.getElementById("email");
const contact= document.getElementById("contact");
const address= document.getElementById("address");
const engineering= document.getElementById("engineering");
const hobbies= document.getElementById("hobbies");
const gender= document.getElementById("gender");
const err = document.getElementsByClassName('error');

const firebaseConfig = {
  apiKey: "AIzaSyBJXwprNaxBZSbdBx8j_9plFoquTZgpyec",
  authDomain: "formvalidation-4f97f.firebaseapp.com",
  projectId: "formvalidation-4f97f",
  databaseURL:"https://formvalidation-4f97f-default-rtdb.firebaseio.com/",
  storageBucket: "formvalidation-4f97f.appspot.com",
  messagingSenderId: "342496968100",
  appId: "1:342496968100:web:5105e70e3816a4331c1531"
};



firebase.initializeApp(firebaseConfig);

const reference =firebase.database().ref("/");


function formSubmitHandler(event) {
event.preventDefault(); 
let namea =customValidator(name, 0, "First Name is Mandatory..");
let passworda=customValidator(password, 1, "password is Mandatory");
let emaila=customValidator(email, 2, "Email is Mandatory");
let gendera=customValidator(gender, 3, "Gender is Mandatory");
let contacta=customValidator(contact, 4, "Contact is Mandatory");
let engineeringa=customValidator(engineering, 5, "select is Mandatory");
let hobbiesa=customValidator(hobbies, 6, "Hobbies is Mandatory");
let addressa=customValidator(address, 7, "address is Mandatory");



console.log(namea +" " +passworda+  " " +emaila + " "+contacta + " " +addressa +"" +engineeringa + " "+ hobbiesa + " "+gendera );

if(namea && passworda && emaila && contacta && addressa ) {
       let formData = {
       name:name.value,
       password:password.value,
        email:email.value,
        contact:contact.value,
        address:address.value,
        engineering:engineering.value,
        hobbies:hobbies.value,
        gender:gender.value
              
       }
       // localStorage.setItem('formData', JSON.stringify(formData));
       let newRef = reference.push();
       newRef.set(formData);
   
 }
}

console.log(JSON.parse(localStorage.getItem("formData")))


function customValidator(inputFieldReference, errorClassId, errorMessage) {
if (inputFieldReference.value.trim() === '') {
inputFieldReference.style.border = "2px solid red";
err[errorClassId].textContent = errorMessage;
return false;
} else {
inputFieldReference.style.border = "2px solid green";
err[errorClassId].textContent = "";
return true;
}
}






