var n = 0;
var Stock= [0,2,2]

function ComprarKit(index){
    let ListaKitsFormulario = document.getElementById("ListaKitsFormulario");
    ListaKitsFormulario.selectedIndex = index;
}
function CambiarKit(NuevoIndice){
    let ListaKits = document.getElementsByClassName("Kit");
    let BotonSlide = document.getElementsByClassName("BotonSlide")
    n += NuevoIndice; 
    n === 0 ? BotonSlide[0].disabled = true : BotonSlide[0].disabled = false;
    n === 2 ? BotonSlide[1].disabled = true : BotonSlide[1].disabled = false;
    for(var i = ListaKits.length-1; i >= 0; i-- ){
        if(i === n){
            continue;
        }
        ListaKits[i].style.display = "none";
    }
    ListaKits[n].style.display ="Block";
}

if(window.matchMedia("screen and (max-width:1160px)").matches){
    console.log("Detectado un ancho menor a 1160px")
    let SlideJs = document.getElementById("SlideJs")
    let BotonSlide = document.getElementsByClassName("BotonSlide")

    SlideJs.classList.add("KitSlide");
    for(var i = 0; i < BotonSlide.length; i++){
        BotonSlide[i].hidden = false;
    }

    CambiarKit(0);
}

function PonerStock() {
    let ClassStock = document.getElementsByClassName("Stock");
    for (var i =0; i < ClassStock.length; i++){
        if(Stock[i] === 0){
            ClassStock[i].innerHTML = "SIN STOCK";
        }
        else{
        ClassStock[i].innerHTML = "Stock: " + Stock[i];
        }
    }
}
PonerStock();
