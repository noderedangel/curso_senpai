function mueveReloj()
{
momentoActual = new Date()
hora = momentoActual.getHours()
minuto = momentoActual.getMinutes()
segundo = momentoActual.getSeconds()
//
str_segundo = new String (segundo)
if (str_segundo.length == 1)
segundo = "0" + segundo
//
str_minuto = new String (minuto)
if (str_minuto.length == 1)
minuto = "0" + minuto
//
str_hora = new String (hora)
if (str_hora.length == 1)
hora = "0" + hora
//
horaImprimible = hora + " : " + minuto + " : " + segundo
//
return horaImprimible; 
}
function actualizar() 
{ 
//función del temporizador
mihora=mueveReloj(); //recoger hora actual
mireloj=document.getElementById("reloj"); //buscar elemento reloj
mireloj.innerHTML=mihora; //incluir hora en elemento
}
actualizar()
setInterval(actualizar,1000); //iniciar temporizador