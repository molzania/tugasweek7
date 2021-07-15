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