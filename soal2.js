var words1 = "hallo jesika24 selamat datang!";
var words2 = "hallo anggun selamat datang!";
var words3 = "hallo ** selamat datang!";
var words4 = "hallo Mariage889120! selamat datang!";

function cekKalimat(string) {
  return /\d/.test(string);
};

console.log(cekKalimat(words1)? "Sistem kami menolak untuk inputan berisi angka " + words1.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + words1);
console.log(cekKalimat(words2)? "Sistem kami menolak untuk inputan berisi angka " + words2.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + words2);
console.log(cekKalimat(words3)? "Sistem kami menolak untuk inputan berisi angka " + words3.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + words3);
console.log(cekKalimat(words4)? "Sistem kami menolak untuk inputan berisi angka " + words4.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + words4);