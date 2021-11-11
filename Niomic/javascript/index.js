// Contoh disini Semua hanya uji coba belajar
// ini contoh for
const perulangan = () => {
    for (x = 1; x <= 10; x++) {
        console.log("Aku mulai berhitung", x);
    }
};
perulangan();

//contoh while
let z = 1;
while (z <= 5) {
    console.log("ini urutan ke", z);
    z++;
} //maka diulang sampai 5x karna perkondisian pada while

//do while

let c = 1;
do {
    console.log("ayo jalan", c);
    c++;
} while (c <= 5);
console.log("");
// nested loop

for (let p = 1; p <= 3; p++) {
    console.log("ini p ke", p);
    for (let q = 1; q <= 2; q++) {
        console.log("ini q ke", q);
    } // perulangan didalam akan diulang hingga selesai, baru loop ya dimulai dari atas lagi.
    console.log("");
}