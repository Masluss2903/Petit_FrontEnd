

var data = [
  {
    "petPic": "assets/JPEG/siri.jpg",
    "petName":"Siri",
    "petId":"3",
    "clientId":"3",
    "vetId":"5"
  },{
    "petPic": "assets/JPEG/jacinto.jpg",
    "petName":"Jacinto",
    "petId":"2",
    "clientId":"3",
    "vetId":"5"
  },{
    "petPic": "assets/JPEG/julia.jpg",
    "petName":"Julia",
    "petId":"1",
    "clientId":"3",
    "vetId":"5"
    }
]



function petButtonVaccines(value){
  var btnVaccines = '<button type="button" onclick="window.location.href =\'/index.html?petId=' + value + '\';" class="btn btn-outline-primary">VER  <i class="fas fa-eye"></i> </button>'
  return btnVaccines;
}

function petCalendarButton(value){
  var calendarBtn = '<button type="button" onclick="window.location.href =\'/calendar.html?petId=' + value + '\';" class="btn btn-outline-primary">VER   <i class="fas fa-eye"></i></button>'
  return calendarBtn;
}

function petTwoBtns(value){
  var showBtn = '<button type="button" onclick="window.location.href =\'/book-pet.html?petId=' + value + '\';" class="btn btn-outline-green mr-2"><i class="fas fa-eye"></i></button>'
  var editBtn = '<button type="button" onclick="window.location.href =\'/update-pet.html?petId=' + value + '\';" class="btn btn-outline-blue mr-2"><i class="fas fa-pencil-alt"></i></button>'
  var deleteBtn = '<button type="button" onclick="window.location.href =\'/my-pets.html?petId=' + value + '\';" class="btn btn-outline-red mr-2"><i class="fas fa-trash-alt"></i></button>'
  return [showBtn + editBtn + deleteBtn];
}

function petThreeBtns(value){
  var showBtn = '<button type="button" onclick="window.location.href =\'/my-pets.html?petId=' + value + '\';" class="btn btn-outline-green mr-2"><i class="fas fa-eye"></i></button>'
  var updateBtn = '<button type="button" onclick="window.location.href =\'/update-pet.html?petId=' + value + '\';" class="btn btn-outline-blue mr-2"><i class="fas fa-edit"></i></button>'
  var deleteBtn = '<button type="button" onclick="window.location.href =\'/my-patients.html?petId=' + value + '\';" class="btn btn-outline-red mr-2"><i class="fas fa-trash-alt"></i></button>'
  return [showBtn + updateBtn + deleteBtn];
}

function petPic(value){
  return '<img  class="pet-pic2" src="' + value + '" >'
}

$(document).ready(function() {
  llenarTabla();
});

function llenarTabla() {
  $('#pets').bootstrapTable({data:data})
}
