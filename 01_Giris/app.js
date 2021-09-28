// Konsol
console.log("Hello Javascript");
alert("Dikkat");
console.warn("Bu bir uyarıdır");
console.error("Bu bir hatadır");
prompt("Adınızı Giriniz");

// Değişken Tanımlama
//-- var
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
// ? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

var isim = "Tahir";
console.log(typeof isim);
isim = 3.14;
console.log(typeof isim);

// Const
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).
// ! Mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı.
// ! Çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

const piSayisi = 3.14;
// piSayisi = 3; // değiştirmeye kalkarsan itiraz eder...

const isim1 = "Tahir"; // Const son değerdir değiştirilemez...Final gibi...
console.log(typeof isim1);

// const number;
// number=4; // ! 32 ve 33. satırlar hatalı yazıma girer...

// Let
// ? Eğer değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
fiyat = 10;
console.log(typeof fiyat); // number
fiyat = "Basri";
console.log("Fiyat"); // Fiyat

// String tanımlamak için 3 farklı karakterle yazabiliriz...

let name1 = "Alaattin";
let name2 = "Faruk";
let name3 = `Oğuzhan`;
console.log(name3); // Oğuzhan
console.log(name2); // Faruk

// Aritmetik Operatörler

const ayran = 5;
const cikolata = 6;
const ekmek = 2;
console.log(ayran + cikolata + ekmek); // 13
console.log("Toplam Fiyat"); // Toplam Fiyat

const ad = "Can";
const soyad = "Canan";
console.log(ad + " " + soyad); // Can Canan

const s1 = 7;
const s2 = "7";
console.log(s1 + s2); // 77 --> Concat yaptı...

console.log("Benim adım" + " " + ad + " " + "Benim yaşım" + " " + s1); // Benim adım Can Benim yaşım 7
// Alternatif kolay yazdırma şekli... Template literal deniyor...
console.log(`Benim adım ${ad} Benim yaşım ${s1}`); // Benim adım Can Benim yaşım 7

// Üs alma

const taban = 2;
const us = 3;
console.log(taban ** us); // 2*2*2=8

// Modulus %

const sayi = 123;
const birlerBasamagi = 123 % 10;
console.log(birlerBasamagi); // 3

// Karşılaştırma Operatörleri ==/===

const s3 = 5;
const s4 = "5";
console.log(s3 == s4); // true
console.log(s3 === s4); // false

// Tip Değişimleri

const para = "100";
console.log(para + 15); // 10015
console.log(Number(para) + 15); // 115

const sayi5 = 56;
console.log(String(sayi5) + sayi5); //5656
console.log(typeof sayi5); // Tipi number
