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


function updatePet(){
  var petId = getUrlParameter('petId')
  var petName = $('#pet_name').val()
  var petGender = $('#pet_gender').val()
  var petBreed = $('#pet_breed').val()
  var petColor = $('#pet_color').val()
  var petBirthday = $('#pet_birthday').val()
  var petWeight = $('#pet_weight').val()
  var petBlood = $('#pet_blood_type').val()
  var petSignal = $('#pet_chars').val()
  //var petPhoto = $('').val()
  var clientId = $('#client_name').val()
  var vetId = $('#vet_name').val()

  mascota = {
    "petId": petId,
    "petName": petName,
    "petBreed": petBreed,
    "petGender": petGender,
    "petColor": petColor,
    "petBirthday": petBirthday,
    "petWeight": petWeight,
    "petBloodtype": petBlood,
    "petSignal": petSignal,
    //"petPhoto":petPhoto,
    "client":{
      "clientId": clientId
    },
    "veterinary":{
      "vetId":vetId
    }
  }


  $.ajax({
    url:"https://petit-kjuxhuxmaq-uc.a.run.app/pet/" + petId,
    type: "PUT",
    data: JSON.stringify(mascota),
    contentType:"application/json; charset=utf-8",
    dataType: "json",
    success: function(data,status){
      console.log(data,status)
    }
  });
}
