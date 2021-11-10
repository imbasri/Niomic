/*Buatlah sebuah function yang mempunyai nilai balik atau return dan sebuah parameter / argument
Setelah itu teman teman kirimlah sebuah nilai kedalam function tersebut
Didalam function tersebut teman teman ubah nilai dari variabel yang dikirim lalu kembalikan dengan return
Setelah nilai dikembalikan , tampilkan kedua nilai tersebut sebelum dirubah didalam function dan sesudah */

// arrow function es6
let menuMakanan = (ayoMakan = (makanan = "Nasi Pecel") => {
    console.log(makanan);
});
//memanggil function
ayoMakan(); //memanggil funtionnya dengan hasil default argumen
ayoMakan("Nasi dan Sate"); // langsung memanggil functionnya tapi dirubah hasilnya
console.log("\n"); //hanya breakline pada console.log
menuMakanan(); //sebelum dirubah dengan argument default tapi pemanggilan dengan variabel
menuMakanan("Ayam Goreng"); // setelah dirubah nilai dari parameternya tapi pemanggilan dengan variabel