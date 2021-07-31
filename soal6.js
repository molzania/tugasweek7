//Jawaban Soal Nomor 6//
//Buatlah sebuah program registrasi berisi username dan password
//Lakukan validasi berikut
//Username minimal 6 karakter
//Password minimal 8 karakter
//Saat user melakukan registrasi simpan data didalam Array
//Tampilkan data setiap user melakukan registrasi
//Saat password ditampilkan, ganti dengan string yang berbeda. Gunakan replace method.
//Bikin inputan 2 username, password → kasih id → document.getElementsById(‘usrnm’).value
//document.getElementsById(‘passwd’).value
//array.push(username, password)

// const userName = "Ma";
// const password = "P";

// if (userName.length <= 6){
//     console.log("userName harus minimal 6 karakter");
// }
// if (password.length <= 8){
// console.log("password harus minimal 8 karakter");
// }

function gantiString() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

// let dataSoal6 =  [];
// Soal6value1 = document.getElementById("userName").value;
// Soal6value2 = document.getElementById("password").value;
// dataSoal6.push(Soal6value1, Soal6value2);

// function form6() {
//   var userName=document.getElementById("showuserName").value;
//   var password=document.getElementById("showPassword").value;
// }

 function validate() {
              var username = document.getElementById("userName").value;
              var password = document.getElementById("password").value;
              if (username.length <= 6){
              alert("userName harus minimal 6 karakter");
              return false;
              }
              if (password.length <= 8){
              alert("password harus minimal 8 karakter");
              return false;
              }
              if (username == null || username == "") {
              return false;
              }
              if (password == null || password == "") {
              return false;
              }
              alert('Login sukses.');
              return true;
          } 


  function copyTextValue() {

    if(document.getElementById('check1').checked){
        let text1 = document.getElementById('userName').value;
        let text2 = document.getElementById('password').value;        
        document.getElementById('showuserName').value = text1;
        document.getElementById('password').value = text2;
    }
    else{
        document.getElementById('showuserName').value = "";
        document.getElementById('showPassword').value = "";
    }    
}
  



