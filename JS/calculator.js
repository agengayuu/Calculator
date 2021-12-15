const tombol = document.querySelector(".container-tombol");
const layar = document.querySelector("#layar");

tombol.addEventListener("click", function(e){
    
    const tombolClick = e.target;
    const nilaiTombol = tombolClick.innerText;

    //"Ini adalah String " + Inivariabel + "String"
    if(nilaiTombol === "C"){
        layar.value = "";
    }
    else if(nilaiTombol === "<"){
        layar.value = layar.value.slice(0, -1);
    }
    else if(nilaiTombol === "="){
        layar.value = eval(layar.value);
    }
    else {
        layar.value = layar.value + nilaiTombol;
    }
});
