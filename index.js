
		function getData(url){

  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
  	req.open('GET', url);
    
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    }
 
    req.onerror = function() {
      reject(Error("Network Error"));
    }

    req.send()
   
  })
}

var data;

function dataImg(date) {
	let imagen = document.getElementById('img');
	imagen.src = date;
}

function aloha() {

var userValue = document.getElementById('userCan').value;
var link = "/" + userValue;
if (userValue != false) 
{

  	var division = document.getElementById('containere');
	// division.style = "font-size: 30px";
	division.innerHTML = "Felicidades! Su perro favorito es " + userValue;

getData(`https://dog.ceo/api/breed${link}/images/random`)
  .then((respuesta) => data = JSON.parse(respuesta))
  .then((data) => {
    dataImg(data.message);
  })

} else {
	var division = document.getElementById('containere');
	division.style = "font-size: 50px";
	division.innerHTML = "Disculpe, ingrese el nombre de su perro favorito por favor"
}



}
