miStorage = window.localStorage;
var usuarioactivo =miStorage.getItem('user_sel');
document.getElementById('infouser').innerHTML='<b>Bienvenido usuario '+usuarioactivo+ ' </b>';