//Jawaban Soal Nomor 7//
//Buat 1 buah form contact us lalu tampilkan inputnya ketika user melakukan event onclick

// contactForm = (event) => {
//     event.preventDefault();
//     console.log(document.getElementById("name").value);
//     console.log(document.getElementById("email").value);
//     console.log(document.getElementById("message").value);

//     let emailData = document.getElementById("email").value;
//     if (emailData == "1"){
//         console.log("Mohon masukkan alamat email yang benar");
//     }
//  }

// document.getElementById("name").value="";
// document.getElementById("email").value="";
// document.getElementById("message").value="";

var fields = {};
document.addEventListener("DOMContentLoaded", function() {
  fields.name = document.getElementById('name');
  fields.email = document.getElementById('email');
  fields.message = document.getElementById('message');
 })

 function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
 }

 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.name, isNotEmpty);
  valid &= fieldValidation(fields.email, isNotEmpty);
  valid &= fieldValidation(fields.message, isNotEmpty);
 
  return valid;
 }

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

 class User {
  constructor(name, email, message) {
  this.name = name;
  this.email = email;
  this.message = message;
  }
 }

 function SendContact() {
   if (isValid()) {
     let usr = new User(name.value, email.value, message.value);

     alert('Terima kasih telah mendaftar.');
   } else {
     alert('Ada error nih.. Perbaiki, ya.');
   }
 }