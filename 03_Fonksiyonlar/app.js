// Fonksiyonlar

//! 1.Yöntem ; Function Declaration
// Bu yöntem ile fonksiyonun tanımlanması çağırılmasından
// önce veya sonra olabilir...

//? Fonksiyon Tanımlanması

function yazdirAd() {
  console.log("Mehmet");
}

//? Fonksiyonun Çağırılması

yazdirAd();

//==========================================================================================

//! Örnek ;
//! Klavyeden girilen sayının tek mi çift mi olduğunu gösteren
//! bir fonksiyon yazınız ?

const sayiniz = prompt("Sayı Giriniz");

console.log(tekCift(sayiniz));

function tekCift(sayiniz) {
  return sayiniz % 2 == 0 ? `${sayiniz} çifttir` : `${sayiniz} tektir`;
}

//==========================================================================================

//! 2.Yöntem ; Function Expression
// Bu yöntem daha yaygın olarak kullanılır...

//? Örnek ;
//? 15 yazdıralım tek mi çift mi bize döndüren bir fonksiyon yazdıralım ?

const tekcift1 = function (sayi) {
  return sayi % 2 == 0 ? "Çift" : "Tek";
};

console.log(tekcift1(15));

//==========================================================================================

//? Örnek ;
//? Verilen sayılardan en büyük sayıyı bulduran fonksiyonu yazdırın ?

let buyukBul = function (a, b, c) {
  let enBuyuk;

  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > c && b > a) {
    enBuyuk = b;
  } else {
    enBuyuk = c;
  }
  return enBuyuk;
};
console.log(buyukBul(5, 8, 9));

//==========================================================================================

//! 3.Yöntem ; Function Arrow (Ok)

// const ciftMi = (sayi) => (sayi % 2 == 0 ? "cift" : "tek");

const ciftMi = (num) => (num % 2 == 0 ? `${num} = Cift` : `${num} = Tek`);
console.log(ciftMi(7));

//? Örnek ;

const taban = prompt("taban gir");
const us = prompt("us giriniz");

const ustAl = (taban, us) => taban ** us;

console.log(ustAl(taban, us));
