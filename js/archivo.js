function procesar() {
    
    var x=document.getElementById('txtdistancia').value;
     t=document.getElementById('txttiempo').value;
    if(t==""){
        alert("No se puede realizar division por 0");
    }else{
        var v=parseInt(x)/parseInt(t);
        alert("La velocidad es "+v+" mt/seg" )
    }
    
}