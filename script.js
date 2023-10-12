function secondimg(images){
    document.querySelector('.secondimg').src=images;
}
function colo(co){
    document.querySelector('#colo').src=co;
}
var colo=document.querySelector("#colo");
var image1=document.querySelector("#image1");
var image2=document.querySelector("#image2");
var image3=document.querySelector("#image3");
var gane=document.querySelector('#gane');
var gane1=document.querySelector('#gane1');


image1.addEventListener("click",function(){
    colo.style.background="red";
    gane.innerText="Badland";
    gane1.style.color="white";
    
})
image2.addEventListener("click",function(){
    colo.style.background="blue";
    gane.innerText="Divinity";
    gane.style.color="white";
    gane1.style.color="black";
})
image3.addEventListener("click",function(){
    colo.style.background="black";
    gane.innerText="Hastert";
    gane.style.color="white";
    gane1.style.color="grey";
})
 