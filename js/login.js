miStorage = window.localStorage;
miStorage.setItem('user1', 'admin');
miStorage.setItem('user2', 'bfernandez');
miStorage.setItem('password1', '1234');
miStorage.setItem('password2', '1234');


function validar() {
    
    var txtuser1validar =miStorage.getItem('user1');
    var txtuser2validar =miStorage.getItem('user2');
    var txtuser=document.getElementById('txtuser').value;
    var txtpassword=document.getElementById('txtpassword').value;
    var txtpassword1validar=document.getElementById('txtpassword').value;
    var txtpassword2validar=document.getElementById('txtpassword').value;
    if(txtuser==txtuser1validar && txtpassword==txtpassword1validar){
        alert("usuario es "+txtuser1validar);
        miStorage.setItem('user_sel', 'admin');
        window.open("html/principal.html","_self")

    } else if(txtuser==txtuser2validar && txtpassword==txtpassword2validar){

        alert("usuario es "+txtuser2validar);
        miStorage.setItem('user_sel', 'bfernandez');
        window.open("html/principal.html","_self")

    }else{
        alert("usuario y/o contraseña no validos ");


    }


   
}

function validar2() {
    alert("usuario es Invitado");
    miStorage.setItem('user_sel', 'invitado');
    window.open("html/principal.html","_self")
}





/*



    
    

    


*/