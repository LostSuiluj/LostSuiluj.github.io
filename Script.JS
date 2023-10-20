const Überschrift = document.querySelector(".Überschrift");


Überschrift.addEventListener("click",()=>{
    Überschrift.innerHTML = "Servus"  
})
//  Logik für die Galerie 
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









// Logik  für das  Menü
const menuopener = document.querySelector(".menu");
const navigationFlyout = document.querySelector(".navigation-flyout");
const menucloser = document.querySelector(".closer");
const navigationslinks = document.querySelectorAll(".navigationselement");
console.log(navigationslinks);

menuopener.addEventListener("click",()=>{
navigationFlyout.classList.add("navigation-flyout-open")
})

menucloser.addEventListener("click",()=>{
    navigationFlyout.classList.remove("navigation-flyout-open")
})

for(let i = 0; i < navigationslinks.length; i++) {
navigationslinks[i].addEventListener("click",()=> {
     console.log(navigationslinks[i]) 
     navigationFlyout.classList.remove("navigation-flyout-open") 
})
}
