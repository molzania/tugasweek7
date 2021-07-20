//Jawaban Soal Nomor 1//
//Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
//Tampilkan panjang data Array
//Tampilkan seluruh item pada array
//Gunakan Console.log
//Tampilkan data tersebut pada Halaman HTML menggunakan list tag

let pekerjaanIT = ['Software Developer', "Database Administrator", "Hardware Engineer", 
"System Analyst", "Network Architect" ];
 
console.log("Jumlah Pekerjaan IT : " + pekerjaanIT.length);
console.log("Nama Pekerjaan IT : " + pekerjaanIT);

document.getElementById("jumlahPekerjaanIT").innerHTML = pekerjaanIT.length;
document.getElementById("namaPekerjaanIT").innerHTML = pekerjaanIT;

//Jawaban Soal Nomor 2//
//Buatlah sebuah data array yang berisi nama pada tim teman-teman.
//Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
//Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
//Tampilkan list data tersebut ke halaman HTML

let allMember=["Aldi","Bagas","Molly","Rodhiyah"];
const team1=allMember.slice(0,2);
const team2=allMember.slice(2,4);

console.log("Tim", team1, team2);

document.getElementById("team1").innerHTML = team1;
document.getElementById("team2").innerHTML = team2;

//Jawaban Soal Nomor 3//
//Diberikan 1 data array [3, 5, 7, 9, 11]
//Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5.
//Tampilkan pada console.log

let a = [3,5,7,9,11];
let b = a.map(function(x){
    return x * 5;
});

console.log(b);

document.getElementById("soal3").innerHTML = b;

//Jawaban Soal Nomor 4//
//Tersedia 2 data Array. Tugas kita adalah untuk cek apakah ada nilai yang sama pada kedua Array.
//Array pertama = [‘Math’, ‘English’, ‘Programming’]
//Array kedua = [‘Geography’, ‘Spanish’, ‘Programming’]
//Program akan mengembalikan nilai TRUE or FALSE

const pelajaran1 = ["Math", "English", "Programming"];
const pelajaran2 = ["Geography", "Spanish", "Programming"];

function CekPelajaran(pelajaran1, pelajaran2) {
    return pelajaran1.some(item => pelajaran2.includes(item))
};

CekPelajaran(pelajaran1,pelajaran2);

document.getElementById("soal4").innerHTML = CekPelajaran(pelajaran1,pelajaran2);

//Jawaban Soal Nomor 5//
//Buatlah sebuah aplikasi twitter untuk membuat sebuah tweet dan menampilkannya.
//Gunakan Array untuk menampung data tweet
//Contoh UI pada slide selanjutnya

//Jawaban Soal Nomor 6//
//Buatlah sebuah program registrasi berisi username dan password
//Lakukan validasi berikut
//Username minimal 6 karakter
//Password minimal 8 karakter
//Saat user melakukan registrasi simpan data didalam Array
//Tampilkan data setiap user melakukan registrasi
//Saat password ditampilkan, ganti dengan string yang berbeda. Gunakan replace method.
let userName = "Molzania";
let password = "PecintaHujan";
function isPasswordValid(password) {
    if (password.length > 8) {
    return true;
    }
    return false
   }
 
   function isuserNameValid(userName) {
    if (userName.length > 6) {
    return true;
    }
    return false
   }

function gantiString() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

let dataSoal6 =  [];
Soal6value1 = document.getElementById("userName").value;
Soal6value2 = document.getElementById("password").value;
dataSoal6.push(Soal6value1, Soal6value2);

//Jawaban Soal Nomor 7//
//Buat 1 buah form contact us lalu tampilkan inputnya ketika user melakukan event onclick

contactForm = (event) => {
    event.preventDefault();
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("message").value);

    let emailData = document.getElementById("email").value;
    if (emailData == "1"){
        console.log("Mohon masukkan alamat email yang benar");
    }
}

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("message").value="";
  
function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
}

document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
   })

   var dataSoal7 = {};
