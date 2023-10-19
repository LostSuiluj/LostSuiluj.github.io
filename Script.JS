const Überschrift = document.querySelector(".Überschrift");


Überschrift.addEventListener("click",()=>{
    Überschrift.innerHTML = "Servus"  
})

const RichtungLinks = document.querySelector(".Richtung-Links");
const RichtungRechts = document.querySelector(".Richtung-Rechts");
const Galeriebild = document.querySelector(".Galerie");
let Bildnummer =  0;
Galeriebild.src=`assets/05_gallery/${Bildnummer}.png`
console.log(Bildnummer)

RichtungLinks.addEventListener("click",()=>{
    Bildnummer =  Bildnummer-1;
    if(Bildnummer == -1){
        Bildnummer = 10
    }
    Galeriebild.src=`assets/05_gallery/${Bildnummer}.png`
})

RichtungRechts.addEventListener("click",()=>{
    Bildnummer = Bildnummer +1;
    if(Bildnummer == 11){
        Bildnummer = 0
    }
    Galeriebild.src=`assets/05_gallery/${Bildnummer}.png`
})

const Name = "Paul";
console.log(`Hallo mein Name ist ${Name}`);
