//Jawaban Nomor 1//
//Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
//Tampilkan panjang data Array
//Tampilkan seluruh item pada array
//Gunakan Console.log
//Tampilkan data tersebut pada Halaman HTML menggunakan list tag

let pekerjaanIT = ['Software Developer', "Database Administrator", "Hardware Engineer", 
"System Analyst", "Network Architect" ];
 
console.log("Jumlah Pekerjaan IT : " + pekerjaanIT.length);
console.log("Nama Pekerjaan IT : " + pekerjaanIT);

let select = document.getElementById('ul');


for (var i = 0; i < array.length; i++) {
  var li = document.createElement("li");
  var link = document.createElement("a");
  link.setAttribute('href', '#');
  li.appendChild(link);
  var text = document.createTextNode(array[i]);
  link.appendChild(text);
  select.insertBefore(li, select.childNodes[i]);
}
