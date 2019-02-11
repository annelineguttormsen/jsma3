//oppgave 1
var fornavn = document.getElementById("fornavn");
var etternavn = document.getElementById("etternavn");
var telefon = document.getElementById("telefon");
var epost = document.getElementById("epost");

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click",testRegex);

function testRegex() {
    var innhold = /./;
    var tlfReg = /\d{8,8}/;
    var epostReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var tlfnr = tlfReg.test(telefon.value);
    var epostvalue = epostReg.test(epost.value);
    var navn = innhold.test(fornavn.value) + innhold.test(etternavn.value);
    console.log(tlfnr + " " + epostvalue + " " + navn);
}

//oppgave 2
var data = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};
var jsonObj = JSON.parse(data);

for (var x in jsonObj["video"]) {
    console.log(jsonObject[x]);
}

for (var x in jsonObj["video"]["author"].data) {
    jsonObj["video"]["author"].data[x];
}