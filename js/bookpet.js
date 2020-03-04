// var data = [
//   {
//     "sn":"S",
//     "vaccineType":"PARVOVIROSIS",
//     "vaccineDate":"15/01/2018",
//     "vaccineDescription":"PARVOVIROSIS CANINA"
//
//   },{
//     "sn":"S",
//     "vaccineType":"QUÍNTUPLE 1RA",
//     "vaccineDate":"23/03/2018",
//     "vaccineDescription":"PARVOVIROSIS/MOQUILLO/HEPATITIS/PARAINFLUENZA"
//   },{
//     "sn":"S",
//     "vaccineType":"QUÍNTUPLE 2RA",
//     "vaccineDate":"08/05/2019",
//     "vaccineDescription":"PARVOVIROSIS/MOQUILLO/HEPATITIS/PARAINFLUENZA"
//   },{
//     "sn":"S",
//     "vaccineType":"SEXTUPLE",
//     "vaccineDate":"11/11/2019",
//     "vaccineDescription":"LEPTOSPIROSIS CANINA"
//   },{
//     "sn":"N",
//     "vaccineType":"TOS DE LAS PERRERAS",
//     "vaccineDate":"2/02/2020",
//     "vaccineDescription":"RABIA CANINA"
//   }
// ];

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};


$(document).ready(function() {
  var petId = getUrlParameter('petId')
  llenarInfo(petId)

  // llenarTabla();
});

function llenarInfo(petId) {
  $.ajax({
    url:"https://petit-kjuxhuxmaq-uc.a.run.app/pet/" + petId
  }).then(function(datoscartilla){
    setLabelText('#petName', datoscartilla.petName)
    setLabelText('#petGender', datoscartilla.petGender)
    setLabelText('#petBirthDate', datoscartilla.petBirthday)
    setLabelText('#petBreed', datoscartilla.petBreed)
    setLabelText('#petId', datoscartilla.petId)
    setLabelText('#petColor', datoscartilla.petColor);
    $("#petPic").attr("src",datoscartilla.petPhoto);
    setLabelText('#petOwner', datoscartilla.client.clientName)
    setLabelText('#petAddress', datoscartilla.client.clientAddress)
    setLabelText('#petPhone', datoscartilla.client.clientPhone)
    setLabelText('#petVetName', datoscartilla.veterinary.vetName)

    $('#table_vacunas').bootstrapTable({data:datoscartilla.petVacciness})
  });

}



function setLabelText(labelId, labelText){
  $(labelId).empty()
  $(labelId).append(labelText)
}


// function llenarTabla() {
//   $('#table_vacunas').bootstrapTable({data:data})
// }

function element(value){
    return value = '<i class="fas fa-check ok"></i>'
}
