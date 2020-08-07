fetch('../json/data.json')
  .then(response=>response.json())
  .then(datos=>{
    console.log(datos[0].primernombre)// muestra todo
   alert(datos[0].primernombre)
   document.getElementById('respuesta').innerHTML= `
   los datos son <br>
   PERSONA 1<br>
   primer nombre: <b> ${datos[0].primernombre} </b> segundo nombre : <b> ${datos[0].segundonombre}</b> <br>
   PERSONA 2<br>
   primer nombre: <b> ${datos[1].primernombre} </b>  segundo nombre : <b> ${datos[1].segundonombre}</b> <br>
   PERSONA 3<br>
   primer nombre: <b> ${datos[2].primernombre} </b>  segundo nombre : <b> ${datos[2].segundonombre}</b> <br>
        
   `

  });
  
  //alert(datos.primernombre[1])