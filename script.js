//Jawaban Nomor 1//
//Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
//Tampilkan panjang data Array
//Tampilkan seluruh item pada array
//Gunakan Console.log
//Tampilkan data tersebut pada Halaman HTML menggunakan list tag

let data = ['Software Developer', "Database Administrator", "Hardware Engineer", 
"System Analyst", "Network Architect" ];
 
console.log("Jumlah Pekerjaan IT : " + data.length);
console.log("Nama Pekerjaan IT : " + data);


let list = document.getElementById("myList");
data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });