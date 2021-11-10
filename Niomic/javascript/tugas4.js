// tugas 4 soal
/*Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek. */

let budi = 152;
let andi = 166;
let jobo = 163;
//function tinggiBadan
let tinggiBadan = (x) => {
    if (x >= 165) {
        console.log(`Tinggi Badan ${x}cm, Tinggi lebih dari 165cm`);
    } else if (x <= 164 && x >= 155) {
        console.log(`Tinggi Badan ${x}cm, Sedang 155cm sampai 164cm`);
    } else {
        console.log(`Tinggi Badan ${x}cm, Pendek dibawah 154cm`);
    }
};
// Math Max dan Min tinggi badan antara siswa
x = console.log(
    `Tinggi Badan Siswa Tertinggi : ${Math.max(budi, andi, jobo)} cm`
);
x = console.log(
    `Tinggi Badan Siswa Terpendek : ${Math.min(budi, andi, jobo)} cm`
);
// memanggil function tinggi badan sesuai dengan Variabel Siswa
tinggiBadan(andi);
tinggiBadan(jobo);
tinggiBadan(budi);