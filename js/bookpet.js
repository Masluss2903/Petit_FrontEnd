var data = [
  {
    "sn":"S",
    "vaccineType":"PARVOVIROSIS",
    "vaccineDate":"15/01/2018",
    "vaccineDescription":"PARVOVIROSIS CANINA"

  },{
    "sn":"S",
    "vaccineType":"QUÍNTUPLE 1RA",
    "vaccineDate":"23/03/2018",
    "vaccineDescription":"PARVOVIROSIS/MOQUILLO/HEPATITIS/PARAINFLUENZA"
  },{
    "sn":"S",
    "vaccineType":"QUÍNTUPLE 2RA",
    "vaccineDate":"08/05/2019",
    "vaccineDescription":"PARVOVIROSIS/MOQUILLO/HEPATITIS/PARAINFLUENZA"
  },{
    "sn":"S",
    "vaccineType":"SEXTUPLE",
    "vaccineDate":"11/11/2019",
    "vaccineDescription":"LEPTOSPIROSIS CANINA"
  },{
    "sn":"N",
    "vaccineType":"TOS DE LAS PERRERAS",
    "vaccineDate":"2/02/2020",
    "vaccineDescription":"RABIA CANINA"
  }
];


var datoscartilla = {
  "petName":"Siri",
  "petGender":"Hembra",
  "petOwner":"María Martínez",
  "petVetName":"Clínica Guau Vet",
  "petBirthDate":"01 de diciembre del 2017",
  "petBreed":"Golden Retriever",
  "petId":"986214554",
  "petAddress":"Av. Argómedo #6241,Villa altos del nilo,Guadalajara",
  "petColor":"Blanco",
  "petPhone":"33-44-66-77-99",
  "petPic":"assets/JPEG/siri.jpg"
};

$(document).ready(function() {
  llenarInfo()
  llenarTabla();
});

function llenarInfo() {
  setLabelText('#petName', datoscartilla.petName)
  setLabelText('#petGender', datoscartilla.petGender)
  setLabelText('#petOwner', datoscartilla.petOwner)
  setLabelText('#petVetName', datoscartilla.petVetName)
  setLabelText('#petBirthDate', datoscartilla.petBirthDate)
  setLabelText('#petBreed', datoscartilla.petBreed)
  setLabelText('#petId', datoscartilla.petId)
  setLabelText('#petAddress', datoscartilla.petAddress)
  setLabelText('#petColor', datoscartilla.petColor)
  setLabelText('#petPhone', datoscartilla.petPhone)
  $("#petPic").attr("src",datoscartilla.petPic);
}

function setLabelText(labelId, labelText){
  $(labelId).empty()
  $(labelId).append(labelText)
}


function llenarTabla() {
  $('#table_vacunas').bootstrapTable({
    data:data
  })
}

function element(value){
  if(value === "S"){
    return value = '<i class="fas fa-check ok"></i>'
  } else{
    return value = '<i class="fas fa-times not"></i>'
  }
}
